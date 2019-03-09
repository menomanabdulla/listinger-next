import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import Widgets from './widgets';
import 'lightbox-react/style.css'; 


const images = [
    './static/images/listing/thumb-1.jpg',
    './static/images/listing/thumb-2.jpg',
    './static/images/listing/thumb-3.jpg',
    './static/images/listing/thumb-4.jpg',
];

class Photos extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
  
    render() {
      const { photoIndex, isOpen } = this.state;
  
      return (
        <div>
            <div className="padding-top-70 padding-bottom-100 lg-inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="lg-listing-details-section-wrap lg-listing-photo">
                                <div className="item">
                                    <img src="./static/images/listing/thumb-1.jpg" className="img-fluid" alt="" />
                                    <div className="overlay">
                                        <span onClick={() => this.setState({ isOpen: true })}><i className="la la-search-plus"></i></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="./static/images/listing/thumb-2.jpg" className="img-fluid" alt="" />
                                    <div className="overlay">
                                        <span onClick={() => this.setState({ isOpen: true })}><i className="la la-search-plus"></i></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="./static/images/listing/thumb-3.jpg" className="img-fluid" alt="" />
                                    <div className="overlay">
                                        <span onClick={() => this.setState({ isOpen: true })}><i className="la la-search-plus"></i></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="./static/images/listing/thumb-4.jpg" className="img-fluid" alt="" />
                                    <div className="overlay">
                                        <span onClick={() => this.setState({ isOpen: true })}><i className="la la-search-plus"></i></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="./static/images/listing/thumb-5.jpg" className="img-fluid" alt="" />
                                    <div className="overlay">
                                        <span onClick={() => this.setState({ isOpen: true })}><i className="la la-search-plus"></i></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="./static/images/listing/thumb-6.jpg" className="img-fluid" alt="" />
                                    <div className="overlay">
                                        <span onClick={() => this.setState({ isOpen: true })}><i className="la la-search-plus"></i></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="./static/images/listing/thumb-7.jpg" className="img-fluid" alt="" />
                                    <div className="overlay">
                                        <span onClick={() => this.setState({ isOpen: true })}><i className="la la-search-plus"></i></span>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="./static/images/listing/thumb-8.jpg" className="img-fluid" alt="" />
                                    <div className="overlay">
                                        <span onClick={() => this.setState({ isOpen: true })}><i className="la la-search-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Widgets />
                    </div>
                </div>
            </div>
  
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
      );
    }
}
export default Photos;
