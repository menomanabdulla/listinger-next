
import React from 'react';
import { Modal } from 'react-bootstrap';
import SimpleMap from './listing-details/simpleMap';
import { Scrollbars } from 'react-custom-scrollbars';


class ModalLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalShow: false };
    }
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <div className="listing-modal-block">
                <div className="lg-listing-single">
                    <div className="modal-listing-info-block">
                        <div className="entry-thumb">
                            <a href="#">
                                <img src={`${this.props.modallisting.thumb}`} className="img-fluid lazy" alt="thumbnail" />
                            </a>
                            <div className="thumb-meta">
                                <div className="price-status">
                                    <ul>
                                        <li>$</li>
                                        <li>$</li>
                                        <li><span>$</span></li>
                                        <li><span>$</span></li>
                                    </ul>
                                </div>      
                                <span>{this.props.modallisting.ratting}</span>(5)  
                            </div>
                        </div>
                        <div className="entry-content">
                            <div className="meta-block">
                                <div className="author-avatar">
                                    
                                </div>
                                <ul className="meta-head">
                                    <li className="bookmark">
                                        <button className="btn favorite">
                                            <i className="la la-heart-o"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <h6 className={`entry-title ${this.props.modallisting.availability}`}>
                                <a href="/listing-details">{this.props.modallisting.title}</a>  
                            </h6>
                            <p>{this.props.modallisting.description}</p>
                            <div className="meta-cat">
                                <div className="categorie">
                                    <span className={`icon ${this.props.modallisting.typeClass}`}><i className={`la ${this.props.modallisting.typeSign}`}></i></span>{this.props.modallisting.type}  
                                </div>
                                <div className={`status ${this.props.modallisting.availability}`}>
                                    <span>{this.props.modallisting.availability}</span>
                                </div>    
                            </div>
                            <div className="listing-detils-desc-block" >
                                <Scrollbars style={{ height: "80px" }}>
                                        <p style={{height:"150px"}}>
                                            { this.props.modallisting.detailsDesc }
                                        </p>
                                </Scrollbars>
                            </div>
                        </div>
                        <div className="meta-footer">
                            <span className="location"><i className="la la-map-marker"></i> {this.props.modallisting.location}</span>
                            <span className="phone-number"><i className="la la-phone"></i> {this.props.modallisting.phone}</span>    
                        </div>
                    </div>
                </div>
                <div className="modal-map-block">
                    <SimpleMap 
                        name = { this.props.modallisting.title }
                        icon = { this.props.modallisting.typeIcon }
                        position = { this.props.modallisting.position } />
                </div>
            </div>
        </Modal>
      );
    }
}

export default ModalLayout;