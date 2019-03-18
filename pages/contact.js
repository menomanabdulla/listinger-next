import React from 'react';
import Head from '../components/head';
import Navigation from '../components/navigation';
import SearchFormOne from '../components/search-form-one';
import Footer from '../components/footer';

import '../style/_general.scss';
import '../style/header.scss';
import '../style/contact.scss';

const Contact = () =>(
    <div>
        <Head title="Contact | Listing"/>
        <Navigation
          imgSrc = {'/static/images/logo.png'}
          containerCls = {'static'}
          SearchForm = { <SearchFormOne /> } 
        />
        <div className="page-header page-header-bg">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="page-header-inner">
                            <h2>Contact Us</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="padding-tb110 lg-inner-page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="lg-contact-header">
                            <h2>Get in Touch</h2>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Various versions have evolved over the years, sometimes by accident.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contact-wrapper">
                            <div className="contact-address">
                                <h6>Request a</h6>
                                <h4>Free Consultation</h4>
                                <p>121 Park Drive, Varick Str, <br/> Newyork, USA</p>
                                <p>Call us:<span>+1 900 234 567</span></p>
                                <p>Mail us:<span>support@mail.com</span></p>
                            </div>
                            <div className="contact-form">
                                <form action="#" id="contactForm">
                                    <div className="form-group">
                                        <input type="text" className="form-control" required />
                                        <label>Your Name <span>(Required)</span></label>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" required />
                                        <label>Your Email <span>(Required)</span></label>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" required></textarea>
                                        <label>Your Message</label>
                                    </div>
                                    <button className="button primary-bg">Submit Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default Contact;

