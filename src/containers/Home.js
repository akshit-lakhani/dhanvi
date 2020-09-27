import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header active="home" />
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
                                        <p>We have experienced workers to make furniture. You can choose type of sheets in our type menu section.</p>
                                        <p>If you have any queries you can contact us and visit our place, Thank you.</p>
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
                                                <li><Link to="" className="fa fa-linkedin-square"></Link></li>
                                                <li><Link to="" className="fa fa-envelope-o"></Link></li>
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
                                                <li><Link to="" className="fa fa-instagram"></Link></li>
                                                <li><Link to="" className="fa fa-flickr"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3>Jingnesh Lavani</h3>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="menu" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                    <h2>Our Location</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonial" data-stellar-background-ratio="0.5">
                </section>
                <section>
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
                                        <h2 className="text-center">Our Office</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}
