import React, { Component } from 'react';
import Widgets from './widgets';
import Lightbox from 'lightbox-react';
import Video from './video';
import ProgressBar from '../progressbar/index'
import { Collapse } from 'antd';

import 'antd/dist/antd.css';
import 'lightbox-react/style.css'; 

const Panel = Collapse.Panel;
const images = [
    Video
];


class Overview extends Component{
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
                                <div className="lg-listing-details-section-wrap lg-listing-description">
                                    <h5><i className="la la-terminal"></i>Description</h5>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly 
                                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                                        anything embarrassing hidden in the middle of text. <br/>All the Lorem Ipsum generators on the 
                                        Internet tend to repeat predefined chunks as necessary, making this the first 
                                        true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
                                    </p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                                        aut odit aut fugit, sed quia consequuntur magni
                                    </p>
                                    <p>
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain 
                                        was born and I will give you a complete account of the system.
                                    </p>
                                </div>
                                <div className="lg-listing-details-section-wrap lg-listing-feature">
                                    <h5><i className="la la-cubes"></i>Features</h5>
                                    <ul>
                                        <li>Live Music</li>
                                        <li>Free Internet</li>
                                        <li>Secure Parking</li>
                                        <li>Game Zone</li>
                                        <li>PayPal Payment</li>
                                        <li>Visa Card</li>
                                        <li>Reading Space</li>
                                    </ul>
                                </div>
                                <div className="lg-listing-details-section-wrap lg-listing-faq">
                                    <h5><i className="la la-question-circle"></i>General Question</h5>
                                    <Collapse bordered={false} className="accordion" defaultActiveKey={['1']} accordion>
                                        <Panel header="How Listinger can improve your business?" key="1">
                                            <div className="card-body">
                                                If you are going to use a passage of Lorem Ipsum, you need to be sure there 
                                                isn't anything embarrassing hidden in the middle of text. All the Lorem 
                                                Ipsum generators on the Internet tend to repeat predefined chunks as 
                                                necessary, making this the first true generator on the Internet.
                                            </div>
                                        </Panel>
                                        <Panel header="Various versions have evolved?" key="2">
                                            <div className="card-body">
                                                If you are going to use a passage of Lorem Ipsum, you need to be sure there 
                                                isn't anything embarrassing hidden in the middle of text. All the Lorem 
                                                Ipsum generators on the Internet tend to repeat predefined chunks as 
                                                necessary, making this the first true generator on the Internet.
                                            </div>
                                        </Panel>
                                        <Panel header="Nor again is there anyone who loves or pursues?" key="3">
                                            <div className="card-body">
                                                If you are going to use a passage of Lorem Ipsum, you need to be sure there 
                                                isn't anything embarrassing hidden in the middle of text. All the Lorem 
                                                Ipsum generators on the Internet tend to repeat predefined chunks as 
                                                necessary, making this the first true generator on the Internet.
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                                <div className="lg-listing-details-section-wrap lg-listing-video">
                                    <h5><i className="la la-play-circle-o"></i>Intro Video</h5>
                                    <div className="listing-details-video-area">
                                        <span className="play-button" onClick={() => this.setState({ isOpen: true })}>
                                            <img src="./static/images/video/play-2.png" className="img-fluid" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="lg-listing-details-section-wrap lg-listing-review">
                                    <h5><i className="la la-star-half-o"></i>Customer Reviews</h5>
                                    <ProgressBar />
                                    <div className="goto-review">
                                        <a href="#">View All Review</a>
                                        <a href="#">Add Your Review</a>
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
        )
    }
}

export default Overview;