import React, { Component } from 'react';
import '../assets/style/css/about.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="about-section">
                    <h1>About Us</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>

                <h2 style={{ textAlign: 'center' }}>Our Team</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="card-container">
                            <strong>Email:</strong>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
