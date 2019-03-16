import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 


export default class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      fade: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="testimonial-block-wrap">
        <h3 className="testimonial-title">
            Trusted by <br/>
            Over 50k+ Customers
        </h3>  
        <Slider {...settings}>
            <div>
                <div className="testimonial-block">
                    <p>
                        "On the other hand, we denounce with righteous indignation and 
                        dislike men who are so beguiled and demoralized by the charms 
                        of pleasure of the moment, so blinded by desire”
                    </p>
                    <div className="testimonial-author">
                        <div className="thumb-block">
                            <img src="./static/images/misc/01.jpg" alt="img" className="img-responsive" />
                        </div>
                        <div className="info-block">
                            <h4>Robert Smith</h4>
                            <div>
                                <span>Ceo,</span>
                                <span> Doodle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="testimonial-block">
                    <p>
                        "On the other hand, we denounce with righteous indignation and 
                        dislike men who are so beguiled and demoralized by the charms 
                        of pleasure of the moment, so blinded by desire Output,
                        of pleasure of the moment, so blinded by desire”
                    </p>
                    <div className="testimonial-author">
                        <div className="thumb-block">
                            <img src="./static/images/misc/01.jpg" alt="img" className="img-responsive" />
                        </div>
                        <div className="info-block">
                            <h4>Robert Smith</h4>
                            <div>
                                <span>Ceo,</span>
                                <span> Doodle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="testimonial-block">
                    <p>
                        "On the other hand, we denounce with righteous indignation and 
                        dislike men who are so beguiled and demoralized by the charms 
                        of pleasure of the moment, so blinded by desire to be perfect”
                    </p>
                    <div className="testimonial-author">
                        <div className="thumb-block">
                            <img src="./static/images/misc/01.jpg" alt="img" className="img-responsive" />
                        </div>
                        <div className="info-block">
                            <h4>Robert Smith</h4>
                            <div>
                                <span>Ceo,</span>
                                <span> Doodle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}