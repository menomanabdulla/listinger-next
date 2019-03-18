import React,{Component} from 'react';
import { Modal, Button, Tab, Nav } from 'react-bootstrap';
import Rating from 'react-rating';
import { Upload, Icon } from 'antd';
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
import '../style/claim.scss';
import '../style/social-share.scss';

class ListingDetails extends Component{
    constructor(...args) {
        super(...args);
        this.state = { 
            modalShow: false,
            activeModal: null,
            previewVisible: false,
            previewImage: '',
            fileList: [{
              uid: '-1',
              name: 'xxx.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }]

        };
        this.clickHandler = this.clickHandler.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleCancel = () => this.setState({ previewVisible: false })
    handlePreview = (file) => {
        this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
        });
    }
    handleChange = ({ fileList }) => this.setState({ fileList });
    handleClick(event) {
        this.setState({value: undefined});
    }
    clickHandler(e, index) {
        this.setState({ activeModal: index })
    }
    
    hideModal() {
        this.setState({ activeModal: null })
    }
    render(){
        let modalClose = () => this.setState({ modalShow: false });
        const { photoIndex, isOpen } = this.state;
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        );
        return (
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
                                                <a href="#" onClick={e => this.clickHandler(e, 2)}>
                                                    <i className="la la-star-o"></i>Add Review
                                                </a>

                                                <Modal 
                                                    show={this.state.activeModal === 2}
                                                    onHide={this.hideModal}
                                                    size="lg"
                                                    aria-labelledby="contained-modal-title-vcenter"
                                                    className="cliam-modal"
                                                >
                                                    <div className="lg-listing-details-section-wrap lg-listing-add-review">
                                                        <h5><i className="la la-comment"></i>Add Your Review</h5>
                                                        <form>
                                                            <div className="row rating-input">
                                                                <label className="col-sm-3">Overall Rating</label>
                                                                <div className="col-sm-9">
                                                                    <div className="rating">
                                                                        <Rating
                                                                            emptySymbol="fa fa-star-o"
                                                                            fullSymbol="fa fa-star"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row rating-input">
                                                                <label className="col-sm-3">Service</label>
                                                                <div className="col-sm-9">
                                                                    <div className="rating">
                                                                        <Rating
                                                                            emptySymbol="fa fa-star-o"
                                                                            fullSymbol="fa fa-star"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row rating-input">
                                                                <label className="col-sm-3">Quality</label>
                                                                <div className="col-sm-9">
                                                                    <div className="rating">
                                                                        <Rating
                                                                            emptySymbol="fa fa-star-o"
                                                                            fullSymbol="fa fa-star"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row rating-input">
                                                                <label className="col-sm-3">Price</label>
                                                                <div className="col-sm-9">
                                                                    <div className="rating">
                                                                        <Rating
                                                                            emptySymbol="fa fa-star-o"
                                                                            fullSymbol="fa fa-star"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group  listing-details-photo-upload row">
                                                                <label className="col-sm-3 col-form-label">Upload Image</label>
                                                                <div className="col-sm-9">
                                                                    <div className="clearfix">
                                                                        <Upload
                                                                            action="//jsonplaceholder.typicode.com/posts/"
                                                                            listType="picture-card"
                                                                            fileList={fileList}
                                                                            onPreview={this.handlePreview}
                                                                            onChange={this.handleChange}
                                                                            >
                                                                            {fileList.length >= 3 ? null : uploadButton}
                                                                        </Upload>
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
                                                </Modal>

                                                <a href="#">
                                                    <i className="la la-heart-o"></i>Bookmarked
                                                </a>

                                                <a href="#" onClick={e => this.clickHandler(e, 3)}>
                                                    <i className="la la-share"></i>Share
                                                </a>

                                                <Modal 
                                                    show={this.state.activeModal === 3}
                                                    onHide={this.hideModal}
                                                    size="lg"
                                                    aria-labelledby="contained-modal-title-vcenter"
                                                    className="social-share-modal"
                                                >
                                                    <div className="socialsharemodal" >
                                                        <div className="gh" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" ><i className="la la-share"></i>Share Listing</h5>
                                                                    <button type="button" className="close" onClick={this.hideModal} >
                                                                        <i className="la la-close"></i>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className="listing-share">
                                                                        <div className="post-share-buttons">
                                                                            <div className="row">
                                                                                <div className="col">
                                                                                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <a href="#" className="twitter twitter-share"><i className="fa fa-twitter"></i></a>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <a href="#" className="google google-plus-share"><i className="fa fa-google-plus"></i></a>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <a href="#" className="pinterest pinterest-share"><i className="fa fa-pinterest"></i></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal>
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
                                                    <span className="claim-button">
                                                        <a href="#" onClick={e => this.clickHandler(e, 1)}>
                                                            <i className="la la-check-circle"></i>Claim Now
                                                        </a>
                                                    </span>
                                                    <Modal
                                                     show={this.state.activeModal === 1}
                                                     onHide={this.hideModal}
                                                     size="lg"
                                                     aria-labelledby="contained-modal-title-vcenter"
                                                     className="cliam-modal"
                                                     >
                                                       <form className="lg-claim-login-register-modal">
                                                            <div className="gh">
                                                                <div className="modal-content-wrap">
                                                                    <div className="modal-header">
                                                                        <h4 className="modal-title"><i className="la la-check-circle-o"></i>Claim Your Business</h4>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true" onClick={this.hideModal}><i className="la la-close"></i></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="form-group row">
                                                                            <label htmlFor="fullname" className="col-sm-3 col-form-label">Name</label>
                                                                            <div className="col-sm-9">
                                                                                <input type="text" name="fullname" id="fullname" className="form-control" placeholder="Enter your Name Here" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label htmlFor="phonenumber" className="col-sm-3 col-form-label">Phone Number</label>
                                                                            <div className="col-sm-9">
                                                                                <input type="text" name="phonenumber" id="phonenumber" className="form-control" placeholder="Ex: +1 (125) 254-8568" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row message">
                                                                            <label htmlFor="addinfo" className="col-sm-3 col-form-label">Details Information</label>
                                                                            <div className="col-sm-9">
                                                                                <textarea name="addinfo" id="addinfo" cols="30" rows="3" placeholder="Enter information about your Business to get quick approval" required></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row claim-agree">
                                                                            <label htmlFor="addinfo" className="col-sm-3 col-form-label invisible">Checkbox</label>
                                                                            <div className="col-sm-9">
                                                                                <label>
                                                                                    <input type="checkbox" /> Agree about the <a href="#"> Terms &amp; Conditions</a>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label htmlFor="claim_email" className="col-sm-3 col-form-label">Your Email  Address *</label>
                                                                            <div className="col-sm-9">
                                                                                <input type="email" name="email" id="claim_email" className="form-control" placeholder="Ex: info@email.com" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row password">
                                                                            <label htmlFor="claim_password" className="col-sm-3 col-form-label">Password *</label>
                                                                            <div className="col-sm-9">
                                                                                <input type="password" name="password" id="claim_password" className="form-control" placeholder="Ex: **********" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row login-agree">
                                                                            <label className="col-sm-3 col-form-label invisible">Remember</label>
                                                                            <div className="col-sm-9">
                                                                                <label>
                                                                                    <input type="checkbox" /> Remember Me						</label>
                                                                                <input id="author" type="hidden" name="author" value="0" />
                                                                                <input id="selected_claim_listing" type="hidden" name="selected_claim_listing" value="2312" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label invisible">submit</label>
                                                                            <div className="col-sm-9">
                                                                                <div className="inline-button">
                                                                                    <button id="login_claim_submit" name="login_claim_submit" className="button primary-bg" type="submit">Login &amp; Submit</button>
                                                                                        <span>OR</span>
                                                                                    <button id="signup_claim_submit" name="signup_claim_submit" className="button primary-bg" type="submit">Signup &amp; Submit</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Modal>
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
    }
}

export default ListingDetails;