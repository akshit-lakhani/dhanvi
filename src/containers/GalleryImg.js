import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header';
import constants from "../constatnts";

export default class GalleryImg extends Component {

    render() {
        return (
            <div>
                <Header active="gallery" />
                <div className="container py-5">
                    <div className="row">
                        {constants.map((constants, index) => (
                            <div className="col-md-4 py-4 col-sm-12" key={index}>
                                <div className="card">
                                    <img src={constants.img} alt="Avatar" height="auto" width="100%" />
                                    <div className="container">
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
