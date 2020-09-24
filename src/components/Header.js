import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <div className="pb-5">
                <section className="back navbar custom-navbar navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon icon-bar"></span>
                                <span className="icon icon-bar"></span>
                                <span className="icon icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">Dhanvi <span>.</span> Furniture</Link>
                        </div>
                        <div>
                            <ul className="menu-container nav navbar-nav-first">
                                <li><Link to="/" className="smoothScroll">Home</Link></li>
                                <li><Link to="gallery" className="smoothScroll">Gallery</Link></li>
                                <li><Link to="sheets" className="smoothScroll">Sheets</Link></li>
                                <li><Link to="/about-us" className="smoothScroll">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
