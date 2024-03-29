import React from 'react';
import '../style/footer.scss';
const Footer = () =>(
    <footer className="footer-bg">
        <div className="footer-widget-wrapper padding-tb110 padding-bottom-40">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="footer-widget footer-widget-contact">
                        <h5>Contact us</h5>
                        <ul>
                            <li>International Noel Nawab Street Los Alamitos CA 90, USA</li>
                            <li>supportlistinger@gmail.com</li>
                            <li>+99 06 1234 566 88</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="footer-widget footer-widget-links">
                            <h5>Categories</h5>
                            <ul>
                                <li><a href="#">Restaurants</a></li>
                                <li><a href="#">Cafe & Bar</a></li>
                                <li><a href="#">Hotel</a></li>
                                <li><a href="#">Spa & Beauty</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="footer-widget footer-widget-links">
                            <h5>Pages</h5>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="footer-widget footer-widget-app">
                            <h5>Get our app</h5>
                            <div className="app-links">
                                <a href="#" className="apple">Apple Store</a>
                                <a href="#" className="google">Google Play</a>
                            </div>
                            <div className="social-links">
                                <a href="#"><img src="./static/images/icons/facebook.png" className="img-fluid" alt="" /></a>
                                <a href="#"><img src="./static/images/icons/twitter.png" className="img-fluid" alt="" /></a>
                                <a href="#"><img src="./static/images/icons/linkedin.png" className="img-fluid" alt="" /></a>
                                <a href="#"><img src="./static/images/icons/instagram.png" className="img-fluid" alt="" /></a>
                                <a href="#"><img src="./static/images/icons/youtube.png" className="img-fluid" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="footer-bottom">
                        <p>&copy; 2019, <a href="#">ListinGer</a>. All Rights Reserved. <span><a href="#">Legal</a></span> <span><a href="#">Terms & Conditions</a></span></p>
                        <a href="#" className="backtotop">Back To Top <span className="ti-arrow-circle-up"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;