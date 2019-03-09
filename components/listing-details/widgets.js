import React from 'react';
import SimpleMap from './simpleMap';
const Widgets = () =>(
        <div className="col-lg-4">
            <div className="lg-listing-widget listing-widget-location">
                <div className="map">
                    <SimpleMap
                         name = "Dolores park"
                         icon = "./static/images/listing/marker/restaurant.png"
                         position = {{ lat: 37.769203, lng: -122.418093 }}
                    />
                </div>
                <ul>
                    <li><i className="la la-map-marker"></i>1014 Larkin St, Randolph, New York, United States</li>
                    <li><i className="la la-phone-square"></i>+2 445-977-3002</li>
                    <li><i className="la la-envelope"></i>business@yourmail.com</li>
                    <li><i className="la la-globe"></i><a href="#">www.websitename.com</a></li>
                </ul>
                <div className="social-lisks">
                    <span>Social:</span>
                    <a href="$"><i className="fa fa-facebook"></i></a>
                    <a href="$"><i className="fa fa-twitter"></i></a>
                    <a href="$"><i className="fa fa-linkedin"></i></a>
                    <a href="$"><i className="fa fa-instagram"></i></a>
                    <a href="$"><i className="fa fa-google-plus"></i></a>
                    <a href="$"><i className="fa fa-youtube-play"></i></a>
                </div>
                <a href="#" className="contact-button">Contact Business</a>
            </div>
            <div className="lg-listing-widget listing-widget-statistic">
                <h5><i className="la la-bar-chart"></i>Statistic</h5>
                <ul>
                    <li><i className="la la-eye"></i>256 Listing Views</li>
                    <li><i className="la la-heart-o"></i>55 Bookmarked</li>
                    <li><i className="la la-star-o"></i>17 Reviews</li>
                    <li><i className="la la-share-square"></i>6 Share</li>
                </ul>
            </div>
            <div className="lg-listing-widget listing-widget-author">
                <div className="thumb">
                    <img src="./static/images/listing/author-1.png" className="img-fluid" alt="" />
                </div>
                <div className="body">
                    <h6><a href="#">Robert Smith</a></h6>
                    <span className="accont-type">Author</span>
                    <ul>
                        <li><a href="#"><i className="la la-bars"></i>22 Listing</a></li>
                        <li><a href="#"><i className="la la-star-o"></i>86 Reviews</a></li>
                    </ul>
                </div>
            </div>
            <div className="lg-listing-widget similer-widget-listing">
                <h5><i className="la la-binoculars"></i>You may also like</h5>
                <div className="lg-similer-listing">
                    <a href="#" className="thumb">
                        <img src="./static/images/listing/listing-3.jpg" className="img-fluid" alt="" />
                        <p className="review">4.2<span>(6)</span></p>
                    </a>
                    <div className="body">
                        <span className="title"><a href="#">Oreo Super Shop</a></span>
                        <span className="listing-location"><i className="la la-map-marker"></i>San Francisco</span>
                    </div>
                </div>
                <div className="lg-similer-listing">
                    <a href="#" className="thumb">
                        <img src="./static/images/listing/listing-4.jpg" className="img-fluid" alt="" />
                        <p className="review">4.5<span>(6)</span></p>
                    </a>
                    <div className="body">
                        <span className="title"><a href="#">Xionny Drinks Side</a></span>
                        <span className="listing-location"><i className="la la-map-marker"></i>Los Angelas</span>
                    </div>
                </div>
                <div className="lg-similer-listing">
                    <a href="#" className="thumb">
                        <img src="./static/images/listing/listing-5.jpg" className="img-fluid" alt="" />
                        <p className="review">4.0<span>(9)</span></p>
                    </a>
                    <div className="body">
                        <span className="title"><a href="#">Riverview Spa Care</a></span>
                        <span className="listing-location"><i className="la la-map-marker"></i>New Work</span>
                    </div>
                </div>
            </div>
        </div>
);

export default Widgets;