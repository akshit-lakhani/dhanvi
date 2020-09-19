import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-sm-8">
                            <div className="footer-info">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">Find us</h2>
                                </div>
                                <address className="wow fadeInUp" data-wow-delay="0.4s">
                                    <p>Shop, No. 9.<br />Mahek Residency,<br />opposite Haridarshan no Khado, <br />causway Road,<br />Surat,<br />395004.</p>
                                </address>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-8">
                            <div className="footer-info">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">Reservation</h2>
                                </div>
                                <address className="wow fadeInUp" data-wow-delay="0.4s">
                                    <p>98249 14422 | 99049 53176</p>
                                    <p><Link to="mailto:info@company.com">info@company.com</Link></p>
                                    <p>LINE: eatery247 </p>
                                </address>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8">
                            <div className="footer-info footer-open-hour">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">Open Hours</h2>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay="0.4s">
                                    <p>Everyday: Open</p>
                                    <p>8:00 AM - 8:00 PM</p>
                                    <div>
                                        <strong>Saturday - Sunday</strong>
                                        <p>9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <ul className="wow fadeInUp social-icon" data-wow-delay="0.4s">
                                <li><Link to="#" className="fa fa-facebook-square" attr="facebook icon"></Link></li>
                                <li><Link to="#" className="fa fa-twitter"></Link></li>
                                <li><Link to="#" className="fa fa-instagram"></Link></li>
                                <li><Link to="#" className="fa fa-google"></Link></li>
                            </ul>
                            <div className="wow fadeInUp copyright-text" data-wow-delay="0.8s">
                                <p><br />Copyright &copy; 2020 <br />Dhanvi Furniture
                      <br /><br />Designed By: <br /><Link rel="nofollow" href="http://templatemo.com" target="_parent">Axito Planet</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
