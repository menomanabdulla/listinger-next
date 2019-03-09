import React from 'react';
import Widgets from './widgets';
import ProgressBar from '../progressbar/index';



const Rerview = () =>(
    <div className="padding-top-70 padding-bottom-100 lg-inner-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="lg-listing-details-section-wrap lg-listing-ratings">
                        <h5><i className="la la-star-half-o"></i>Rattings</h5>
                        <ProgressBar />
                    </div>
                    <div className="lg-listing-details-section-wrap lg-listing-review-block">
                        <div className="listing-review-wrap">
                        <div className="thumb">
                            <img src="./static/images/listing/public-1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="review-body">
                            <div className="review-header">
                            <div className="info">
                                <h6>Robert Smith</h6>
                                <span className="review-time">22 Aug, 2018 at 9:52 am</span>
                            </div>
                            <div className="rating">
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star-o"></i>
                            </div>
                            </div>
                            <div className="content">
                            <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over.</p>
                            </div>
                            <div className="buttons">
                            <a href="#" className="agree active"><i className="la la-smile-o"></i>Agree <span>8</span></a>
                            <a href="#" className="disagree"><i className="la la-frown-o"></i>Disagree</a>
                            <a href="#" className="comment"><i className="la la-comments"></i>Reply</a>
                            </div>
                        </div>
                        </div>
                        <div className="review-reply">
                        <div className="listing-review-wrap">
                            <div className="thumb">
                            <img src="./static/images/listing/public-2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="review-body">
                            <div className="review-header">
                                <div className="info">
                                <h6>Wanda R. Krouse</h6>
                                <span className="review-time">22 Aug, 2018 at 9:52 am</span>
                                </div>
                            </div>
                            <div className="content">
                                <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet.</p>
                            </div>
                            <div className="buttons">
                                <a href="#" className="agree"><i className="la la-smile-o"></i>Agree</a>
                                <a href="#" className="disagree active"><i className="la la-frown-o"></i>Disagree <span>5</span></a>
                                <a href="#" className="comment"><i className="la la-comments"></i>Reply</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="lg-listing-details-section-wrap lg-listing-review-block">
                        <div className="listing-review-wrap">
                            <div className="thumb">
                                <img src="./static/images/listing/public-3.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="review-body">
                                <div className="review-header">
                                    <div className="info">
                                        <h6>Robert Smith</h6>
                                        <span className="review-time">22 Aug, 2018 at 9:52 am</span>
                                    </div>
                                    <div className="rating">
                                        <i className="la la-star"></i>
                                        <i className="la la-star"></i>
                                        <i className="la la-star"></i>
                                        <i className="la la-star-o"></i>
                                        <i className="la la-star-o"></i>
                                    </div>
                                </div>
                                <div className="content">
                                    <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over.</p>

                                    <div className="photos">
                                        <img src="./static/images/listing/review-photo-1.jpg" className="img-fluid" alt="" />
                                        <img src="./static/images/listing/review-photo-2.jpg" className="img-fluid" alt="" />
                                        <img src="./static/images/listing/review-photo-3.jpg" className="img-fluid" alt="" />
                                        <div className="more-photo">
                                            <img src="./static/images/listing/review-photo-4.jpg" className="img-fluid" alt="" />
                                            <span className="more-photo-number">+6</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <a href="#" className="agree active"><i className="la la-smile-o"></i>Agree <span>8</span></a>
                                    <a href="#" className="disagree"><i className="la la-frown-o"></i>Disagree</a>
                                    <a href="#" className="comment"><i className="la la-comments"></i>Reply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg-listing-details-section-wrap lg-listing-add-review">
                        <h5><i className="la la-comment"></i>Add Your Review</h5>
                        <form>
                            <div className="row rating-input">
                                <label className="col-sm-3">Overall Rating</label>
                                <div className="col-sm-9">
                                <div className="rating">
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                </div>
                                </div>
                            </div>
                            <div className="row rating-input">
                                <label className="col-sm-3">Service</label>
                                <div className="col-sm-9">
                                <div className="rating">
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                </div>
                                </div>
                            </div>
                            <div className="row rating-input">
                                <label className="col-sm-3">Quality</label>
                                <div className="col-sm-9">
                                <div className="rating">
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                </div>
                                </div>
                            </div>
                            <div className="row rating-input">
                                <label className="col-sm-3">Price</label>
                                <div className="col-sm-9">
                                <div className="rating">
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                    <i className="la la-star-o"></i>
                                </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Upload Image</label>
                                <div className="col-sm-9">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile" />
                                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" placeholder="Your name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" placeholder="Email address" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Review</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" placeholder="Write your review"></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label"></label>
                                <div className="col-sm-9">
                                    <button className="btn">Submit Review</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Widgets/>
            </div>
      </div>
    </div>
);

export default Rerview;