import React from 'react';
import Head from '../components/head';
import Dashboard from '../components/dashboard/dashboardTemplate';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
//css
import 'antd/dist/antd.css';
import '../style/dashboard.scss';

const DashboardFrame = () => (
  <div>
    <Head title="Dashboard | Package"/>
    <Navigation imgSrc = {'/static/images/logo.png'} containerCls = {'static'} />
    <Dashboard>
      <div className="lg-dash-content-block">
          <div className="content-head">
          <span><i className="la la-tags"></i>Packages</span>
          </div>
          <div className="content-body padding-b0">
              <div className="lg-dash-packages">
                  <div className="package">
                  <h5 className="package-title">Free</h5>
                  <div className="icon">
                      <img src="/static/images/dashboard/package-icon-1.png" className="img-fluid" alt="" />
                  </div>
                  <h2 className="package-cost">$0.00</h2>
                  <span className="package-validity">One Month</span>
                  <ul className="package-features">
                      <li>Map Display</li>
                      <li>Contact Display</li>
                      <li>Image Gallery</li>
                      <li>Video</li>
                      <li>Business Tagline</li>
                      <li>Location</li>
                      <li>Social Links </li>
                  </ul>
                  <a href="#" className="buy-package">Order Now</a>
                  </div>
                  <div className="package advanced">
                  <h5 className="package-title">Advanced</h5>
                  <div className="icon">
                      <img src="/static/images/dashboard/package-icon-2.png" className="img-fluid" alt="" />
                  </div>
                  <h2 className="package-cost">$9.55</h2>
                  <span className="package-validity">One Month</span>
                  <ul className="package-features">
                      <li>Map Display</li>
                      <li>Contact Display</li>
                      <li>Image Gallery</li>
                      <li>Video</li>
                      <li>Business Tagline</li>
                      <li>Location</li>
                      <li>Social Links </li>
                  </ul>
                  <a href="#" className="buy-package active">Order Now</a>
                  </div>
                  <div className="package premium">
                  <h5 className="package-title">Premium</h5>
                  <div className="icon">
                      <img src="/static/images/dashboard/package-icon-3.png" className="img-fluid" alt="" />
                  </div>
                  <h2 className="package-cost">$42.99</h2>
                  <span className="package-validity">One Month</span>
                  <ul className="package-features">
                      <li>Map Display</li>
                      <li>Contact Display</li>
                      <li>Image Gallery</li>
                      <li>Video</li>
                      <li>Business Tagline</li>
                      <li>Location</li>
                      <li>Social Links </li>
                  </ul>
                  <a href="#" className="buy-package">Order Now</a>
                  </div>
              </div>
          </div>
      </div>
    </Dashboard>
    <Footer />
  </div>
)

export default DashboardFrame;
 