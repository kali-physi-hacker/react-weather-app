import React from 'react';
import logo from '../../static/images/logo.png';
import './Header.css';


const Header = (props) => {
    return (
        <header id="header" className="site-header">
            <div className="container">
                <a href="/" className="branding">
                    <img src={logo} alt="" className="logo" />
                    <div className="logo-type">
                        <h1 className="site-title">Kali Open Weather</h1>
                        <small className="site-description">Your daily weather info</small>
                    </div>
                </a>
                <div className="main-navigation">
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                    <ul className="menu">
                        <li className="menu-item current-menu-item"><a href="/">Home</a></li>

                    </ul> 
                </div>

                <div className="mobile-navigation"></div>
            </div>
        </header>
    )
}

export default Header;