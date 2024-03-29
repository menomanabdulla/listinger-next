import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Head from '../components/head';
import { Tab, Nav  } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../components/store';
import Testimonial from '../components/testimonial';
import ListingGrid from '../components/listing/listing-grid';
import ListingMap from '../components/listing/listing-map';
import FullWidthMap from '../components/full-width-map';
import Navigation from '../components/navigation';
import Footer from '../components/footer';


import '../style/_general.scss';
import '../style/banner.scss';
import '../style/listing.scss';
import '../style/about.scss';
import '../style/popular-listing.scss';

const Partner = dynamic(import('../components/partner'), {
  ssr: false
})


class Home extends Component{
  render() {
    return(
    <div>
          <Head title="Listinger Next" />
          <div className="navigation-two-wrap">
            <Navigation imgSrc = {'/static/images/logo-two.png'} 
              navbarCls = {'nav-style-two'}
              containerCls= {'container-fluid'} />
          </div>
          <section className="lg-banner style-two">
            <div className="container">
              <div className="row align-items-center">
                {/* remon (column change) */}
                <div className="col-xl-8 col-12">
                  <div className="section-heading text-white text-left">
                    <h3 className="title">Let’s Explore Your City</h3>
                    <p className="sub-title">You can’t imagine, what is waitng for your around your city</p>
                  </div>
                  <ul className="lg-categorie style-two">
                    <li className="categorie-red">
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
                    <li className="categorie-green">
                      <a href="#"></a>
                      <div className="entry-content">
                        <div className="entry-icon">
                          <i className="la la-bed"></i> </div>
                        <h4 className="entry-cat">Hotel</h4>
                      </div>
                    </li>
                    <li className="categorie-darkgreen">
                      <a href="#"></a>
                      <div className="entry-content">
                        <div className="entry-icon">
                          <i className="la la-shopping-cart"></i> </div>
                        <h4 className="entry-cat">Shopping</h4>
                      </div>
                    </li>
                    <li className="categorie-conifer lastitem">
                      <a href="#"></a>
                      <div className="entry-content">
                        <div className="entry-icon">
                          <i className="la la-female"></i> </div>
                        <h4 className="entry-cat">Beauty &amp; Spa</h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-12">
                  <form className="lg-mulitsearch style-two" action="#" method="GET">
                    <div className="row">
                      <div className="col-12">
                        <div className="styled-input no-arrow">
                          <input className="form-control" type="text" required />
                          <label>What are you looking for ?</label>
                          <span></span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="styled-input">
                          <input id="category_search" className="form-control" type="text" required />
                          <ul className="category-dropdown">
                            <li className="detected"><a href="#40"><i className="la la-gear"></i>Automotive</a></li>
                            <li className="detected"><a href="#41"><i className="la la-female"></i>Beauty &amp; Spa</a></li>
                            <li className="detected"><a href="#56"><i className="la la-beer"></i>Cafe &amp; Bar</a></li>
                            <li className="detected"><a href="#44"><i className="la la-bed"></i>Hotel</a></li>
                            <li className="detected"><a href="#50">Real Estate</a></li>
                            <li className="detected"><a href="#51"><i className="la la-cutlery"></i>Restaurant</a></li>
                            <li className="detected"><a href="#57"><i className="la la-shopping-cart"></i>Shopping</a></li>
                          </ul>
                          <label>Category</label>
                          <span></span>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-big-search"><i className="fa fa-search"></i> Search Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="box-style-region">
            <div className="container lg-region-box-style">
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
          <Provider store = { store }>
            <FullWidthMap />
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