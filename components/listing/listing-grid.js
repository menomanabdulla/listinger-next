import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import ModalLayou from '../ModalLayou';


class ListingGrid extends Component{
    constructor(...args) {
        super(...args);
        this.state = { 
            modalShow: false,
            activeModal: null
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    clickHandler(e, index) {
        this.setState({ activeModal: index })
    }
    
    hideModal() {
        this.setState({ activeModal: null })
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        let NewstDate = '2019-05-05T20:23:01.804Z';
        const newDate = new Date(NewstDate).getTime(),
        Today = new Date().getTime();
        return (
            <React.Fragment>
                    {
                    this.props.listing.filterListing.slice(0, 6).map(( item, index ) => {
                        if(newDate>Today){
                        return (
                            <div className="col-lg-4 col-md-6" key = { index }>
                                <div className="lg-listing-single">
                                    <div className="entry-thumb">
                                        <a href="#">
                                            <img src={`${item.thumb}`} className="img-fluid lazy" alt="thumbnail" />
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
                                            <span>{item.ratting}</span>({item.rattingCount})  
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <div className="meta-block">
                                            <div className="author-avatar">
                                                <img className="img-responsive" src={`${item.authorThumb}`} alt="" />
                                            </div>
                                            <ul className="meta-head">
                                                <li className="preview">
                                                    <ButtonToolbar>
                                                        <Button
                                                            id={ index }
                                                            variant="primary"
                                                            className = 'popupMap'
                                                            onClick={e => this.clickHandler(e, index)}
                                                            >
                                                            <i className="la la-search-plus"></i>
                                                        </Button>
                                                        <ModalLayou
                                                            id={ index }
                                                            show={this.state.activeModal === index}
                                                            onHide={this.hideModal}
                                                            modallisting = { item }
                                                        />
                                                    </ButtonToolbar>
                                                </li>
                                                <li className="bookmark">
                                                    <button className="btn favorite">
                                                        <i className="la la-heart-o"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <h6 className={`entry-title ${item.availability}`}>
                                            <a href="/listing-details">{item.title}</a>
                                        </h6>
                                        <p>{item.description}</p>
                                        <div className="meta-cat">
                                            <div className="categorie">
                                                <span className={`icon ${item.typeClass}`}><i className={`la ${item.typeSign}`}></i></span>{item.type}  
                                            </div>
                                            <div className={`status ${item.availability}`}>
                                                <span>{item.availability}</span>
                                            </div>    
                                        </div>
                                        <div className="meta-footer">
                                            <span className="location"><i className="la la-map-marker"></i> {item.location}</span>
                                            <span className="phone-number"><i className="la la-phone"></i> {item.phone}</span>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        })
                    }
                
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
      listing: state.listing
    }
}

export default connect( mapStateToProps )(ListingGrid)