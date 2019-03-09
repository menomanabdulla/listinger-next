import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import Head from '../components/head';
import Navigation from '../components/navigation';
import Partner from '../components/partner';
import Testimonial from '../components/testimonial';
import Video from '../components/listing-details/video';
import Footer from '../components/footer';
//css
import '../style/_general.scss';
import '../style/header.scss';
import '../style/about.scss';
import 'lightbox-react/style.css'; 

const images = [
    Video
];

class About extends Component{
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
                <Head title="About | Listing"/>
                <Navigation imgSrc = {'/static/images/logo.png'} containerCls = {'static'} />
                <div className="page-header page-header-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-header-inner">
                                    <h2>About Us</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="padding-120 lg-inner-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="lg-about">
                                <h2>We are ready to <span>Promote your Business</span></h2>
                                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumomnis dolor repellendus.</p>
                                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapie Content here, content here', making it look like readable.</p>
                                <a href="#" className="button">Read More</a>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 offset-xl-1">
                                <div className="lg-listing-infos">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="listing-info one">
                                                <h3>540</h3>
                                                <span>Companies</span>
                                            </div>
                                            <div className="listing-info two">
                                                <h3>10k+</h3>
                                                <span>Regular Visitor</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="listing-info three">
                                                <h3>2000+</h3>
                                                <span>Customer Review</span>
                                            </div>
                                            <a href="#" className="lg-add-business">
                                                <span className="icon"><i className="la la-plus"></i></span>
                                                <span>Add Your Business</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="padding-bottom-120 lg-inner-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="lg-video-area">
                                    <span className="play-icon" onClick={() => this.setState({ isOpen: true })}>
                                        <img src="/static/images/video/play.png" className="img-fluid" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="padding-bottom-120 lg-inner-page working-process-block-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="lg-thumb">
                                    <img src="/static/images/work/process-thumb.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="working-process-block">
                                    <h2>How it works</h2>
                                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
                                    <div className="working-process">
                                        <div className="icon">
                                            <img src="/static/images/work/icon-1.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="body">
                                            <h5>Set your choice</h5>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
                                        </div>
                                    </div>
                                    <div className="working-process">
                                        <div className="icon">
                                            <img src="/static/images/work/icon-2.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="body">
                                            <h5>Find what you want</h5>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
                                        </div>
                                    </div>
                                    <div className="working-process">
                                        <div className="icon">
                                            <img src="/static/images/work/icon-3.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="body">
                                            <h5>Explore places</h5>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="padding-bottom-120 lg-inner-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Testimonial />
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="testimonial-logos">
                                    <img src="/static/images/testimonial/logos.png" className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Partner/>
                <Footer />

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

export default About;
