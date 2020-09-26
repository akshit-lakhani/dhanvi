import React, { Component } from 'react';
import '../assets/style/css/about.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header active="about" />
                <div class="ct-pageWrapper" id="ct-js-wrapper">
                    <div class="container text-center py-5">
                        <h2>ABOUT US</h2>
                        <div class="col-md-12 col-sm-12">
                            <div class="red-border"></div>
                            <p class="ct-u-size22 ct-u-fontWeight300 marginTop40">
                                We are making furniture in MDF Modular Plywood, Which is manufacturing by Action TESA company.
                                We started our work from 2012. It's been a long time. Our Workers are very talented and experince
                                in this field. You will never complain about them.
                                </p>
                        </div>
                    </div>
                    <div class="container py-5">
                        <div class="row text-center">
                            <div class="col-md-12 col-sm-12">
                                <h2>About Our Work</h2>
                                <h3>We are Working on different Categories.</h3>
                                <p class="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60">
                                    We have best Team to make your home looking attractive and give best
                                    work from our side.
                                    </p>
                            </div>
                        </div>
                        <div class="row ct-u-paddingBoth20">
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-medkit" aria-hidden="true"></i>
                                    <p className="work-heading">KITCHEN FURNITURE</p>
                                    <p class="company-icons-subtext hidden-xs">
                                        We are making kitchen furniture with different types of trollies.
                                        </p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-money" aria-hidden="true"></i>
                                    <p className="work-heading">Cupboard</p>
                                    <p class="company-icons-subtext hidden-xs">
                                        We have different types of sheets to make Cupboard.
                                        We can make make Cupboard on Marbles and fully with MDF Modular Wooden sheet.
                                        </p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                    <p className="work-heading">Ceiling Cupboard</p>
                                    <p class="company-icons-subtext hidden-xs">
                                        We are making Ceiling Cupboard as well. Which looks fully furnished to your home.
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div class="row ct-u-paddingBoth20">
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-coffee" aria-hidden="true"></i>
                                    <p className="work-heading">TV Unit</p>
                                    <p class="company-icons-subtext hidden-xs">
                                        We are making attractive and nice looking TV Unit.
                                        Which will give you better experience while watching TV.
                                        </p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-gamepad" aria-hidden="true"></i>
                                    <p className="work-heading">Coffee Table / T-Poi</p>
                                    <p class="company-icons-subtext hidden-xs">
                                        We are making T-poi or Coffee table as well.
                                        Which will make lucrative to center of your seating area.
                                        </p>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-4">
                                <div class="company-icons-white">
                                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                                    <p className="work-heading">Drawer</p>
                                    <p class="company-icons-subtext hidden-xs">
                                        We are making Drawer which help you to store your small things at one and better place.
                                        We are making lockable Drawers as well which will make safe your things.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container py-5">
                        <div class="row text-center">
                            <div class="col-md-12">
                                <h2>CUSTOMERS</h2>
                                <h3>Trust is best thing to make unknown to known</h3>
                                <p class="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60 marginTop40">
                                    Our priority is make our customers happy.
                                    We are doing proffessional work.
                                    We work hard to give better experience to you.
                                </p>
                            </div>
                            <div class="clearfix">
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
