import React from 'react';
import { Tab, Nav  } from 'react-bootstrap';

import Head from '../components/head';
import Navigation from '../components/navigation';
import Overview from '../components/listing-details/overview';
import Rerview from '../components/listing-details/review';
import Photos from '../components/listing-details/photos';
import SearchFormOne from '../components/search-form-one';
import Footer from '../components/footer';

//css
import '../style/_general.scss';
import '../style/header.scss';
import '../style/listing.scss';

const ListingDetails = () =>(
    <div>
        <Head title="Listing Details"/>
        <Navigation
            imgSrc = {'/static/images/logo.png'}
            containerCls = {'static'}
            SearchForm = { <SearchFormOne /> } 
        />
        <div className="listing-details-page-header lg-page-header-bg">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="lisging-details-page-header-inner">
                            <div className="logo">
                                <img src="/static/images/listing/company-1.jpg" className="img-fluid" alt="" />
                            </div>
                            <h3>Wide Awake Cafe</h3>
                            <p>Moreml insta dolor sit amet, consectetur adipicing</p>
                            <div className="review">
                                <div className="rating">
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star-half-o"></i>
                                </div>
                                <span className="total-review">13 Reviews</span>
                            </div>
                            <div className="listing-page-navigation">
                                <div className="meta">
                                    <span className="location"><i className="la la-map-marker"></i>Chicago</span>
                                    <span className="contact"><i className="la la-phone"></i>+2 445-977-3002</span>
                                    <span className="cost"><span className="expensive-level"><span>$$</span>$$</span>25 - 150</span>
                                </div>
                                <div className="listing-details-key-button">
                                    <a href="#"><i className="la la-star-o"></i>Add Review</a>
                                    <a href="#"><i className="la la-heart-o"></i>Bookmarked</a>
                                    <a href="#"><i className="la la-share"></i>Share</a>
                                    <span className="report">
                                        <a href="#"><i className="la la-ellipsis-v"></i></a>
                                        <span className="report-listing">
                                        <a href="#"><i className="la la-flag-o"></i>Report Listing</a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="listing-tab-block">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="listing-tab-navigation-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 order-lg-2">
                                    <div className="listing-info">
                                        <div className="shedule">
                                            <span className="status status-close">Close.<span>Opens at 10:00 AM</span><span className="hover-arrow"><i className="la la-angle-down"></i></span></span>
                                            <ul className="shedule-list">
                                                <li><span className="w-day">Monday</span><span className="o-time">09:00 am - 05:00 pm</span></li>
                                                <li><span className="w-day">Tuesday</span><span className="o-time">06:00 am - 10:00 pm</span></li>
                                                <li><span className="w-day">Wednesday</span><span className="o-time">09:00 am - 05:00 pm</span></li>
                                                <li><span className="w-day">Thursday</span><span className="o-time">09:00 am - 05:00 pm</span></li>
                                                <li><span className="w-day">Friday</span><span className="o-time">06:00 am - 10:00 pm</span></li>
                                                <li><span className="w-day">Saturday</span><span className="o-time">09:00 am - 05:00 pm</span></li>
                                                <li className="w-close"><span className="w-day">Sunday</span><span className="o-time">Closed</span></li>
                                                <li className="local-time">January 28, 2019 12:58 pm local time</li>
                                            </ul>
                                        </div>
                                        <span className="direction"><a href="#"><i className="la la-paper-plane"></i>Get directions</a></span>
                                        <span className="claim-button"><a href="#"><i className="la la-check-circle"></i>Claim Now</a></span>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-lg-1">
                                    <div className="listging-tab">
                                        <Nav variant="pills" className="listging-tab-nav">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first"><i className="la la-bars"></i>Overview</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second"><i className="la la-star-o"></i>Reviews <span>(5)</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="thired"><i className="la la-image"></i>Photos</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listing-tab-content-block">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Overview />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Rerview />
                            </Tab.Pane>
                            <Tab.Pane eventKey="thired">
                                <Photos />
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
            </Tab.Container>
        </div>
        <Footer/>
    </div>
);

export default ListingDetails;