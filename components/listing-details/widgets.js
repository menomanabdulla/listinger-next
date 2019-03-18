import React,{Component} from 'react';
import SimpleMap from './simpleMap';
import { Modal, Button } from 'react-bootstrap';

import '../../style/business-contact.scss'

class Widgets extends Component {
    constructor(props, context) {
      super(props, context);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
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
                    <a href="#" className="contact-button" onClick={this.handleShow}>Contact Business</a>
                        <Modal show={this.state.show} onHide={this.handleClose} className="bussiness-contact-model">
                            <div className="listingercontactwidget" id="listingercontactwidget">
                                    <div className="gh" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel"><i className="la la-envelope-o"></i> Contact Business</h5>
                                                <button type="button" className="close" onClick={this.handleClose}>
                                                    <span aria-hidden="true"><i className="la la-close"></i></span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form id="user_message_submitted" action="#" className="contact-form" method="post">
                                                    <input type="hidden" id="post_id" name="post_id" value="1377" />
                                                    <input type="hidden" id="author_id" name="author_id" value="1" />
                                                    <input type="hidden" id="current_user_id" name="current_user_id" value="0" />
                                                    <div className="form-group row">
                                                        <label htmlFor="userusername" className="col-sm-2 col-form-label">user name</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" id="userusername" name="username" className="form-control" placeholder="Your User Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="useremail" className="col-sm-2 col-form-label">email</label>
                                                        <div className="col-sm-10">
                                                            <input type="email" id="useremail" name="email" className="form-control" placeholder="Email Address" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="phone" className="col-sm-2 col-form-label">phone</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" id="phone" name="phone" className="form-control" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="subject" className="col-sm-2 col-form-label">subject</label>
                                                        <div className="col-sm-10">
                                                            <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject Here" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="message" className="col-sm-2 col-form-label">message</label>
                                                        <div className="col-sm-10">
                                                            <textarea rows="5" cols="5" id="message" name="message" className="form-control" placeholder="Type Your Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mrg-b0 row">
                                                        <label htmlFor="message" className="col-sm-2 col-form-label invisible">Send Message</label>
                                                        <div className="col-sm-10">
                                                            <button id="btn-msg-submit" type="submit" name="user_message_submitted" className="button primary-bg">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Modal>
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
    }
}


export default Widgets;