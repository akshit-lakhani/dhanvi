import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header';
import Sheet from "../sheet";

export default class Sheets extends Component {
    render() {
        return (
            <div>
                <Header active="sheet" />
                <div className="container py-5">
                    <div className="row">
                        {Sheet.map((Sheet, index) => (
                            <div className="col-md-12 py-4 col-sm-12 col-12" key={index}>
                                <div className="card">
                                    <img src={Sheet.img} alt="Avatar" height="auto" width="100%" />
                                    <div className="sheet_name">
                                        <div>{Sheet.name}</div>
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
