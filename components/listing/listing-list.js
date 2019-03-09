import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, Button, Checkbox } from 'antd';

const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

const plainOptions1 = ['Hotel', 'Kids Zone', 'School'];
const plainOptions2 = ['Play Ground', 'Hot Coffee', 'Wireless Internet'];

class ListingList extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(value) {
        this.props.filter(value);
    }
      
    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    render() {
        return (
            <div className="listing-list-block">
                <div className="listing-filter-block">
                    <div className="filter-btn-block">
                        <Select defaultValue="allcatagories" style={{ width: 'auto' }} onChange={this.handleChange}>
                            <Option value="allcatagories"><i className="la la-list-alt"></i> All Categories</Option>
                            <Option value="bar"><i className="la la-beer"></i> Cafe & Bar</Option>
                            <Option value="restaurants"><i className="la la-cutlery"></i> Restaurants</Option>
                            <Option value="hotel"><i className="la la-hotel"></i> Hotel</Option>
                            <Option value="cart"><i className="la la-hotel"></i> Shopping</Option>
                        </Select>
                        <Select defaultValue="sortby" style={{ width: 'auto' }} onChange={this.handleChange}>
                            <Option value="sortby">Sort By</Option>
                            <Option value="name">Name</Option>
                            <Option value="price">Price</Option>
                        </Select>
                        <Button><i className="la la-exchange"></i> Best Match</Button>
                        <Select defaultValue="price" style={{ width: 'auto' }} onChange={this.handleChange}>
                            <Option value="price">Price</Option>
                            <Option value="low">Low</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="high">High</Option>
                        </Select>
                        <Button className="near-map-btn">Near me <i className="la la-map-marker"></i></Button>
                    </div>
                    <div className="filer-checkbox-block">
                        <div className="checkbox-group">
                            <CheckboxGroup options={plainOptions1} defaultValue={['']} onChange={this.onChange} />
                        </div>
                        <div className="checkbox-group">
                            <CheckboxGroup options={plainOptions2} defaultValue={['Play Ground']} onChange={this.onChange} />
                        </div>
                    </div>
                </div>
                <div className="listing-lists-block">
                    <div className="listing-custom-filter-block">
                        <div className="custom-filter-title-block">
                            <h3>7 Results For <span>"Custom Filter"</span></h3>
                        </div>
                        <div className="custom-filter-grid-block">
                            <Select defaultValue="allcatagories" style={{ width: 'auto' }} onChange={this.handleChange}>
                                <Option value="allcatagories">Filter By All</Option>
                                <Option value="bar"><i className="la la-beer"></i> Cafe & Bar</Option>
                                <Option value="restaurants"><i className="la la-cutlery"></i> Restaurants</Option>
                                <Option value="hotel"><i className="la la-hotel"></i> Hotel</Option>
                                <Option value="cart"><i className="la la-hotel"></i> Shopping</Option>
                                <Option value="spa"><i className="la la-hotel"></i> Spa Care</Option>
                            </Select>
                            <div className="list-grid-control-block">
                                <div className="grid-control">
                                    <i className="la la-th-large"></i>
                                </div>
                                <div className="list-control">
                                    <i className="la la-th-list"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                 {
                    this.props.listing.filterListing.map(( item, index ) => {
                        return (
                            <div className="lg-listing-single listing-single-list" key = { index } >
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
                                        <span>{item.ratting}</span>(5)  
                                    </div>
                                </div>
                                <div className="entry-content">
                                    <div className="meta-block">
                                        <div className="author-avatar">
                                            <img className="img-responsive" src={`${item.authorThumb}`} alt="" />
                                        </div>
                                        <ul className="meta-head">
                                            <li className="preview">
                                                <a href="#" className="btn popupMap">
                                                    <i className="la la-search-plus"></i>
                                                </a>
                                            </li>
                                            <li className="bookmark">
                                                <button className="btn favorite">
                                                    <i className="la la-heart-o"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <h6 className={`entry-title ${item.availability}`}>
                                        <a href="#">{item.title}</a>  
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
                        
                            )
                        })
                    }
                    <div className="row">
                        <div className="col">
                            <nav className="navigation pagination">
                                <div className="nav-links">
                                    <span aria-current="page" className="page-numbers current">1</span>
                                    <a className="page-numbers" href="#">2</a>
                                    <a className="next page-numbers" href="#"><i className="la la-arrow-right"></i></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        filter: (value) =>{
            //console.log(value)
            dispatch({type: value});
        }
    }
}

function mapStateToProps(state){
    return{
      listing: state.listing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingList)
