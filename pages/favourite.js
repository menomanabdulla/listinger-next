import React from 'react';
import Head from '../components/head';
import Dashboard from '../components/dashboard/dashboardTemplate';
import Navigation from '../components/navigation';
import SearchFormOne from '../components/search-form-one';
import Footer from '../components/footer';
//css
import 'antd/dist/antd.css';
import '../style/dashboard.scss';

const DashboardFrame = () => (
  <div>
    <Head title="Dashboard | Favourite"/>
    <Navigation
        imgSrc = {'/static/images/logo.png'}
        containerCls = {'static'}
        SearchForm = { <SearchFormOne /> } 
    />
    <Dashboard>
      <div className="row">
          <div className="col">
              <div className="lg-dash-listings">
                  <div className="my-listings-head">
                  <span><i className="la la-heart-o"></i>Favorites List</span>
                  </div>
                  <div className="my-listings-body">
                      <div className="table-wrap">
                          <table className="table">
                              <thead>
                                  <tr>
                                  <th scope="col">Listing Title</th>
                                  <th scope="col">Categories</th>
                                  <th scope="col">Status</th>
                                  <th className="action" scope="col">Actions</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                  <th scope="row">
                                      <div className="lg-dash-listing">
                                      <a href="#" className="thumb">
                                          <img src="/static/images/dashboard/listing-1.jpg" className="img-fluid" alt="" />
                                          <p className="review">4.2<span>(6)</span></p>
                                      </a>
                                      <div className="my-listing-body">
                                          <span className="title"><a href="#">Oreo Super Shop</a></span>
                                          <span className="listing-location"><i className="la la-map-marker"></i>San Francisco</span>
                                      </div>
                                      </div>
                                  </th>
                                  <td className="category bar"><span><i className="la la-beer"></i>Cafe &amp; Bar</span></td>
                                  <td className="status open"><span>Open</span></td>
                                  <td className="action">
                                      <a href="#" title="Preview" data-tooltip className="action-btn preview"><i className="la la-eye"></i></a>
                                      <a href="#" title="Remove" data-tooltip className="action-btn delete"><i className="la la-trash-o"></i></a>
                                  </td>
                                  </tr>
                                  <tr>
                                  <th scope="row">
                                      <div className="lg-dash-listing">
                                      <a href="#" className="thumb">
                                          <img src="/static/images/dashboard/listing-2.jpg" className="img-fluid" alt="" />
                                          <p className="review">4.2<span>(6)</span></p>
                                      </a>
                                      <div className="my-listing-body">
                                          <span className="title"><a href="#">Xionny Drinks Side <span className="verified"><i className="fa fa-check-circle"></i></span></a></span>
                                          <span className="listing-location"><i className="la la-map-marker"></i>New York City</span>
                                      </div>
                                      </div>
                                  </th>
                                  <td className="category resturant"><span><i className="la la-cutlery"></i>Restaurants</span></td>
                                  <td className="status listing-close"><span>Close</span></td>
                                  <td className="action">
                                      <a href="#" title="Preview" data-tooltip className="action-btn preview"><i className="la la-eye"></i></a>
                                      <a href="#" title="Remove" data-tooltip className="action-btn delete"><i className="la la-trash-o"></i></a>
                                  </td>
                                  </tr>
                                  <tr>
                                  <th scope="row">
                                      <div className="lg-dash-listing">
                                      <a href="#" className="thumb">
                                          <img src="/static/images/dashboard/listing-3.jpg" className="img-fluid" alt="" />
                                          <p className="review">4.2<span>(6)</span></p>
                                      </a>
                                      <div className="my-listing-body">
                                          <span className="title"><a href="#">The Hogi Restaurant</a></span>
                                          <span className="listing-location"><i className="la la-map-marker"></i>San Francisco</span>
                                      </div>
                                      </div>
                                  </th>
                                  <td className="category hotel"><span><i className="la la-automobile"></i>Hotel</span></td>
                                  <td className="status open"><span>Open</span></td>
                                  <td className="action">
                                      <a href="#" title="Preview" data-tooltip className="action-btn preview"><i className="la la-eye"></i></a>
                                      <a href="#" title="Remove" data-tooltip className="action-btn delete"><i className="la la-trash-o"></i></a>
                                  </td>
                                  </tr>
                                  <tr>
                                  <th scope="row">
                                      <div className="lg-dash-listing">
                                      <a href="#" className="thumb">
                                          <img src="/static/images/dashboard/listing-4.jpg" className="img-fluid" alt="" />
                                          <p className="review">4.2<span>(6)</span></p>
                                      </a>
                                      <div className="my-listing-body">
                                          <span className="title"><a href="#">Riverview Spa Care</a></span>
                                          <span className="listing-location"><i className="la la-map-marker"></i>New York City</span>
                                      </div>
                                      </div>
                                  </th>
                                  <td className="category spa"><span><i className="la la-female"></i>Spa & Beauty</span></td>
                                  <td className="status open"><span>Open</span></td>
                                  <td className="action">
                                      <a href="#" title="Preview" data-tooltip className="action-btn preview"><i className="la la-eye"></i></a>
                                      <a href="#" title="Remove" data-tooltip className="action-btn delete"><i className="la la-trash-o"></i></a>
                                  </td>
                                  </tr>
                                  <tr>
                                  <th scope="row">
                                      <div className="lg-dash-listing">
                                      <a href="#" className="thumb">
                                          <img src="/static/images/dashboard/listing-5.jpg" className="img-fluid" alt="" />
                                          <p className="review">4.2<span>(6)</span></p>
                                      </a>
                                      <div className="my-listing-body">
                                          <span className="title"><a href="#">Triangle Place</a></span>
                                          <span className="listing-location"><i className="la la-map-marker"></i>Los Angeles</span>
                                      </div>
                                      </div>
                                  </th>
                                  <td className="category resturant"><span><i className="la la-cutlery"></i>Restaurants</span></td>
                                  <td className="status open"><span>Open</span></td>
                                  <td className="action">
                                      <a href="#" title="Preview" data-tooltip className="action-btn preview"><i className="la la-eye"></i></a>
                                      <a href="#" title="Remove" data-tooltip className="action-btn delete"><i className="la la-trash-o"></i></a>
                                  </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div className="lg-dash-pagination-list text-center">
                          <nav className="navigation pagination">
                              <div className="nav-links">
                                  <a className="prev page-numbers" href="#"><i className="la la-arrow-left"></i></a>
                                  <a className="page-numbers" href="#">1</a>
                                  <span aria-current="page" className="page-numbers current">2</span>
                                  <a className="page-numbers" href="#">3</a>
                                  <a className="page-numbers" href="#">4</a>
                                  <a className="next page-numbers" href="#"><i className="la la-arrow-right"></i></a>
                              </div>
                          </nav>                
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </Dashboard>
    <Footer />
  </div>
)

export default DashboardFrame;
 