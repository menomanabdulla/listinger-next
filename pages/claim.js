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
    <Head title="Dashboard | Claim"/>
    <Navigation imgSrc = {'/static/images/logo.png'} containerCls = {'static'} />
    <Dashboard>
      <div className="lg-dash-content-block">
          <div className="content-head">
              <span><i className="la la-plus-square"></i>Ad Campaigns</span>
              </div>
              <div className="content-body">
              <div className="claim">
                  <p>You Have No Claim<i className="la la-frown-o"></i></p>
              </div>
          </div>
      </div>
    </Dashboard>
    <Footer />
  </div>
)

export default DashboardFrame;
 