import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Carousel from 'react-items-carousel';
import sheet from '../sheet';

export default class Home extends Component {
    componentWillMount() {
        this.setState({
            activeItemIndex: 0,
        });
    }


    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
    render() {
        const {
            activeItemIndex,
        } = this.state;
        return (
            <React.Fragment>
                <Header />
                <section id="about" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="about-info">
                                    <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                                        <h4>Read our story</h4>
                                        <h2>We've been Making Furniture Since 2012</h2>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0.4s">
                                        <p>We have experience workers to make furniture. You can choose type of sheets in our type menu section.</p>
                                        <p>If you have any Query you can contact us and visit our office at our place, Thank you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="wow fadeInUp about-image" data-wow-delay="0.6s">
                                    <img src={require("../assets/images/furniture.jpg")} className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                    <h2>Meet Owner</h2>
                                    <h4>They are nice &amp; friendly</h4>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">

                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                                    <img src={require("../assets/images/dinesh.jpg")} className="img-responsive" alt="" />
                                    <div className="team-hover">
                                        <div className="team-item">
                                            <h4>Dinesh Lakhani has around 10 Years of experience in this field.</h4>
                                            <ul className="social-icon">
                                                <li><Link to="#" className="fa fa-linkedin-square"></Link></li>
                                                <li><Link to="#" className="fa fa-envelope-o"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3>Dinesh Lakhani</h3>
                                    <p>Founder</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                                    <img src={require("../assets/images/jignesh.jpeg")} className="img-responsive" alt="" />
                                    <div className="team-hover">
                                        <div className="team-item">
                                            <h4>Jignesh Lavani has new unique ideas about furniture making.</h4>
                                            <ul className="social-icon">
                                                <li><Link to="#" className="fa fa-instagram"></Link></li>
                                                <li><Link to="#" className="fa fa-flickr"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3>Jingnesh Lavani</h3>
                                    <p>Founder</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                            </div>
                        </div>
                    </div>
                </section>
                <section id="menu" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                    <h2>Type of Sheets</h2>
                                    <h4>Sheets &amp; Color</h4>
                                    <Link to="/sheets"><h3>More</h3></Link>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <Carousel
                                    // Placeholder configurations
                                    enablePlaceholder
                                    numberOfPlaceholderItems={5}
                                    minimumPlaceholderTime={1000}
                                    placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

                                    // Carousel configurations
                                    numberOfCards={3}
                                    gutter={12}
                                    showSlither={true}
                                    firstAndLastGutter={true}
                                    freeScrolling={false}

                                    // Active item configurations
                                    requestToChangeActive={this.changeActiveItem}
                                    activeItemIndex={activeItemIndex}
                                    activePosition={'center'}

                                    chevronWidth={24}
                                    rightChevron={'>'}
                                    leftChevron={'<'}
                                    outsideChevron={false}
                                >
                                    <img src={sheet[0].img} alt="" />
                                    <img src={sheet[1].img} alt="" />
                                    <img src={sheet[2].img} alt="" />
                                    <img src={sheet[3].img} alt="" />
                                    <img src={sheet[4].img} alt="" />
                                    <img src={sheet[5].img} alt="" />
                                    <img src={sheet[6].img} alt="" />
                                    <img src={sheet[7].img} alt="" />
                                    <img src={sheet[8].img} alt="" />
                                </Carousel>

                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="menu-thumb">
                                    <Link to="images/menu-image2.jpg" className="image-popup" title="Self-made Salad">
                                        <img src="images/menu-image2.jpg" className="img-responsive" alt="" />
                                        <div className="menu-info">
                                            <div className="menu-item">
                                                <h3>Self-made Salad</h3>
                                                <p>Green / Fruits / Healthy</p>
                                            </div>
                                            <div className="menu-price">
                                                <span>$18</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="menu-thumb">
                                    <Link to="images/menu-image3.jpg" className="image-popup" title="Chinese Noodle">
                                        <img src="images/menu-image3.jpg" className="img-responsive" alt="" />
                                        <div className="menu-info">
                                            <div className="menu-item">
                                                <h3>Chinese Noodle</h3>
                                                <p>Pepper / Chicken / Vegetables</p>
                                            </div>
                                            <div className="menu-price">
                                                <span>$34</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="menu-thumb">
                                    <Link to="images/menu-image4.jpg" className="image-popup" title="Rice Soup">
                                        <img src="images/menu-image4.jpg" className="img-responsive" alt="" />
                                        <div className="menu-info">
                                            <div className="menu-item">
                                                <h3>Rice Soup</h3>
                                                <p>Green / Chicken</p>
                                            </div>
                                            <div className="menu-price">
                                                <span>$28</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="menu-thumb">
                                    <Link to="images/menu-image5.jpg" className="image-popup" title="Project title">
                                        <img src="images/menu-image5.jpg" className="img-responsive" alt="" />
                                        <div className="menu-info">
                                            <div className="menu-item">
                                                <h3>Deli Burger</h3>
                                                <p>Beef / Fried Potatoes</p>
                                            </div>
                                            <div className="menu-price">
                                                <span>$46</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="menu-thumb">
                                    <Link to="images/menu-image6.jpg" className="image-popup" title="Project title">
                                        <img src="images/menu-image6.jpg" className="img-responsive" alt="" />
                                        <div className="menu-info">
                                            <div className="menu-item">
                                                <h3>Big Flat Fried</h3>
                                                <p>Pepper / Crispy</p>
                                            </div>
                                            <div className="menu-price">
                                                <span>$30</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonial" data-stellar-background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                    <h2>Testimonials</h2>
                                </div>
                            </div>
                            <div className="col-md-offset-2 col-md-8 col-sm-12">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum ullamcorper nulla non.</p>
                                        <div className="tst-author">
                                            <h4>Digital Carlson</h4>
                                            <span>Pharetra quam sit amet</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam.</p>
                                        <div className="tst-author">
                                            <h4>Johnny Stephen</h4>
                                            <span>Magna nisi porta ligula</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <p>Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta quis dui elit habitant morbi.</p>
                                        <div className="tst-author">
                                            <h4>Jessie White</h4>
                                            <span>Vitae lacinia augue urna quis</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                                <div id="google-map">
                                    <iframe title="googlemap" src="https://maps.google.com/maps?q=dhanvi%20furniture&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="col-md-12 col-sm-12">
                                    <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                        <h2>Contact Us</h2>
                                    </div>
                                </div>
                                <form action="#" method="post" className="wow fadeInUp" id="contact-form" role="form" data-wow-delay="0.8s">
                                    <h6 className="text-success">Your message has been sent successfully.</h6>
                                    <h6 className="text-danger">E-mail must be valid and message must be longer than 1 character.</h6>
                                    <div className="col-md-6 col-sm-6">
                                        <input type="text" className="form-control" id="cf-name" name="name" placeholder="Full name" />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <input type="email" className="form-control" id="cf-email" name="email" placeholder="Email address" />
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <input type="text" className="form-control" id="cf-subject" name="subject" placeholder="Subject" />
                                        <textarea className="form-control" rows="6" id="cf-message" name="message" placeholder="Tell about your project"></textarea>
                                        <button type="submit" className="form-control" id="cf-submit" name="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}
