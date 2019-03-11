import React, { Component } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'; 

export default class Partner extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true, 
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="lg-inner-page">
      <div className="container">
        <div className="row">
            <div className="col">
                <div className="partner-slider-block">
                    <Slider {...settings}>
                        <div>
                            <img 
                                src="./static/images/partner/01.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/02.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/03.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/04.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/05.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/06.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/07.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/08.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/09.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        <div>
                            <img 
                                src="./static/images/partner/10.png" 
                                alt="img" 
                            className="img-responsive" />
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

