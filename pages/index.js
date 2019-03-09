import React, { Component } from 'react';
import Head from '../components/head';
import { Tab, Nav  } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../components/store';
import Testimonial from '../components/testimonial';
import ListingGrid from '../components/listing/listing-grid';
import ListingMap from '../components/listing/listing-map';
import Partner from '../components/partner';
import Footer from '../components/footer';
import Navigation from '../components/navigation';


import '../style/_general.scss';
import '../style/banner.scss';
import '../style/listing.scss';
import '../style/about.scss';
import '../style/popular-listing.scss';

class Home extends Component{
  constructor(props) {
    super(props);
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
 }
  render() {
    return(
    <div>
      <Head title="Home" />
        <section className="lg-banner lg-banner-one">
          <Navigation imgSrc = {'/static/images/logo.png'} containerCls = {'static'} />
          <div className="container">
            <div className="section-heading text-white text-left">
              <h3 className="title">Let’s Explore Your City</h3>
              <p className="sub-title">You can’t imagine, what is waitng for your around your city</p>
            </div>
            <ul className="lg-categorie">
              <li className="categorie-red">
                <a href="#"></a>
                <div className="entry-content">
                  <div className="entry-icon">
                    <i className="la la-female"></i> </div>
                  <h4 className="entry-cat">Beauty &amp; Spa</h4>
                </div>
              </li>
              <li className="categorie-green">
                <a href="#"></a>
                <div className="entry-content">
                  <div className="entry-icon">
                    <i className="la la-bed"></i> </div>
                  <h4 className="entry-cat">Hotel</h4>
                </div>
              </li>
              <li className="categorie-conifer">
                <a href="#"></a>
                <div className="entry-content">
                  <div className="entry-icon">
                    <i className="la la-cutlery"></i> </div>
                  <h4 className="entry-cat">Restaurant</h4>
                </div>
              </li>
              <li className="categorie-orange">
                <a href="#"></a>
                <div className="entry-content">
                  <div className="entry-icon">
                    <i className="la la-beer"></i> </div>
                  <h4 className="entry-cat">Cafe &amp; Bar</h4>
                </div>
              </li>
              <li className="categorie-darkgreen lastitem">
                <a href="#"></a>
                <div className="entry-content">
                  <div className="entry-icon">
                    <i className="la la-shopping-cart"></i> </div>
                  <h4 className="entry-cat">Shopping</h4>
                </div>
              </li>
            </ul>
            <form className="lg-mulitsearch" action="#" method="GET">
              {/* remon cols changes */ }
              <div className="row">
                <div className="col-md col-12">
                  <input type="hidden" name="search" value="listing" />
                  <div className="styled-input no-arrow">
                    <input className="form-control" type="text" required />
                    <label>What are you looking for ?</label>
                    <span></span>
                  </div>
                </div>
                <div className="col-md col-12">
                  <div className="styled-input">
                    <input id="category_search" className="form-control" type="text" required />
                    <ul className="category-dropdown">
                      <li><a href="#"><i className="la la-gear"></i>Automotive</a></li>
                      <li><a href="#"><i className="la la-female"></i>Beauty &amp; Spa</a></li>
                      <li><a href="#"><i className="la la-beer"></i>Cafe &amp; Bar</a></li>
                      <li><a href="#"><i className="la la-bed"></i>Hotel</a></li>
                      <li><a href="#">Real Estate</a></li>
                      <li><a href="#"><i className="la la-cutlery"></i>Restaurant</a></li>
                      <li><a href="#"><i className="la la-shopping-cart"></i>Shopping</a></li>
                    </ul>
                    <label>Category</label>
                    <span></span>
                  </div>
                </div>
                <div className="col-md col-12">
                  <div className="styled-input">
                    <input type="text" id="multisearch-banner-location" className="form-control" name="keyword" placeholder="" required />
                    <label>Location</label>
                    <span></span>
                  </div>
                </div>
                <div className="col-md-2 col-12">
                  <button className="btn btn-big-search"><i className="fa fa-search"></i> Search</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="common-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="lg-listing-region text-center">
                  <div className="entry-thumb">
                    <a href="/listing">
                      <img src="/static/images/listing/09.jpg" className="img-fluid lazy" alt="thumbnail" />
                    </a>
                  </div>
                  <div className="entry-content">
                    <div className="marker-icon">
                      <i className="la la-map-marker"></i>
                    </div>

                    <h6 className="entry-title"><a href="/listing">New York</a></h6>
                    <p className="entry-count">2 Listing</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="lg-listing-region text-center">
                  <div className="entry-thumb">
                    <a href="/listing">
                      <img src="/static/images/listing/10.jpg" className="img-fluid lazy" alt="thumbnail" />
                    </a>
                  </div>
                  <div className="entry-content">
                    <div className="marker-icon">
                      <i className="la la-map-marker"></i>
                    </div>

                    <h6 className="entry-title"><a href="/listing">Los Angeles</a></h6>
                    <p className="entry-count">2 Listing</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="lg-listing-region text-center">
                  <div className="entry-thumb">
                    <a href="/listing">
                      <img src="/static/images/listing/11.jpg" className="img-fluid lazy" alt="thumbnail" />
                    </a>
                  </div>
                  <div className="entry-content">
                    <div className="marker-icon">
                      <i className="la la-map-marker"></i>
                    </div>

                    <h6 className="entry-title"><a href="/listing">California</a></h6>
                    <p className="entry-count">2 Listing</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="lg-listing-region text-center">
                  <div className="entry-thumb">
                    <a href="/listing">
                      <img src="/static/images/listing/12.jpg" className="img-fluid lazy" alt="thumbnail" />
                    </a>
                  </div>
                  <div className="entry-content">
                    <div className="marker-icon">
                      <i className="la la-map-marker"></i>
                    </div>

                    <h6 className="entry-title"><a href="/listing">New Buston</a></h6>
                    <p className="entry-count">2 Listing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="common-padding-two bg-gray popular-listing-block">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="section-heading text-left">
                    <h3 className="title">Popular Listing</h3>
                    <p className="sub-title">You can’t imagine, what is waitng for your around your city</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <Nav variant="pills" className="listging-tab-nav listging-tab-nav-2">
                    <Nav.Item>
                        <Nav.Link eventKey="first"><i className="la la-flag-o"></i>New Listing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second"><i className="la la-star"></i>Top Rated</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="row">
                        <Provider store = { store }>
                          <ListingGrid/>
                        </Provider>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="row">
                        <Provider store = { store }>
                          <ListingGrid/>
                        </Provider>
                    </div>
                  </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </section>
        <div className="padding-120 working-process-block-wrap">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <div className="lg-thumb">
                          <img src="/static/images/work/process-thumb.png" className="img-fluid" alt="" />
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="working-process-block working-process-two">
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
      <div className="listing-full-width-map">
        <div className="absolute-container">
            <div className="city-listing-block">
              <div className="title">
                <h4>In Your City</h4>
              </div>
              <ul>
                <li>
                  <i className="la la-cutlery"></i>
                  <h5>Restaurants</h5>
                </li>
                <li>
                  <i className="la la-beer"></i>
                  <h5>Cafe & Bar</h5>
                </li>
                <li>
                  <i className="la la-female"></i>
                  <h5>Spa & Beauty</h5>
                </li>
                <li>
                  <i className="la la-hotel"></i>
                  <h5>Hotel</h5>
                </li>
              </ul>
            </div>
        </div>
          <Provider store = { store }>
            <ListingMap />
          </Provider>
      </div>
      <div className="padding-120">
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
      <div className="partner-style-two">
        <Partner />
      </div>
      <Footer />
    </div>
    );
  }
}

export default Home;