import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/style/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import 'antd/dist/antd.css';
import "./assets/style/css/animate.css";
import "./assets/style/css/magnific-popup.css";
import "./assets/style/css/owl.carousel.css";
import "./assets/style/css/owl.theme.default.min.css";
import "./assets/style/css/templatemo-style.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
