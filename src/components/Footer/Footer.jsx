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
                            <a target={"_blank"} href="live:browndesmond30_2"><i className="fa fa-skype"></i></a>
                            <a target={"_blank"} href="https://github.com/kali-physi-hacker"><i className="fa fa-github"></i></a>
                            <a target={"_blank"} href="https://web.facebook.com/kali.junior.3192/"><i className="fa fa-facebook"></i></a>
                            <a target={"_blank"} href="https://twitter.com/Desmond956"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>

                <p className="colophon">Copyright 2020 Kali Association of Scientist. Design Template from <i>Themezy</i></p>
            </div>
        </footer>
    )
}


export default Footer;