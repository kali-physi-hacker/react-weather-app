import React from 'react';


const Footer = () => {
    return (
        <footer style={{marginTop: "2rem"}} className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form action="#" className="subscribe-form">
                            <input type="text" placeholder="Enter your email to subscribe to daily weather data..." />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <div className="social-links">
                            <a href="#facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#google"><i className="fa fa-google-plus"></i></a>
                            <a href="#pinterest"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>

                <p className="colophon">Copyright 2020 Kali Association of Scientist. Design Template from <i>Themezy</i></p>
            </div>
        </footer>
    )
}


export default Footer;