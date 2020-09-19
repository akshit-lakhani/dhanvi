import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './containers/About';
import GalleryImg from './containers/GalleryImg';
import Home from './containers/Home';
import Sheets from './containers/Sheets';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gallery" component={GalleryImg} />
                    <Route exact path="/sheets" component={Sheets} />
                    <Route exact path="/about-us" component={About} />
                </Switch>
            </BrowserRouter>
        )
    }
}
