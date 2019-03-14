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
    <Head title="Dashboard | Addpromotion"/>
    <Navigation
        imgSrc = {'/static/images/logo.png'}
        containerCls = {'static'}
        SearchForm = { <SearchFormOne /> } 
    />
    <Dashboard>
      <div className="lg-dash-content-block">
          <div className="content-head">
              <span><i className="la la-plus-square"></i>Ad Campaigns</span>
          </div>
          <div className="content-body">
              <div className="ad-campaign">
                  <h4>What is Ad Promotion?</h4>
                  <p>Add information about your business below. Your business page will not appear in search results until this information has been verified and approved by our moderators. Once it is approved, you will receive an email with instructions on how to claim your business page.</p>
                  <a href="#">Get Started Now</a>
                  <div className="thumb">
                      <img src="/static/images/dashboard/campaing-thumb.png" className="img-fluid" alt=""/>
                  </div>
              </div>
          </div>
      </div>
    </Dashboard>
    <Footer />
  </div>
)

export default DashboardFrame;
 