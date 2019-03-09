import React from 'react';
import Sidenav from './sideMenu';
const Dashboard = ({children}) => (
  <div>
    <div className="padding-tb110 lg-inner-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 order-2">
            <div className="lg-dash-statistic">
              <div className="row">
                <div className="col">
                  <div className="statistic-view statistic">
                    <div className="icon">
                      <i className="la la-eye"></i>
                    </div>
                    <div className="content">
                      <h4>569</h4>
                      <span>Total Listing Views</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="statistic-review statistic">
                    <div className="icon">
                      <i className="la la-star-o"></i>
                    </div>
                    <div className="content">
                      <h4>85</h4>
                      <span>Customer Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg-dash-statistic-2">
              <div className="row">
                <div className="col-12 col-sm">
                  <div className="published-listing">
                    <div className="icon">
                      <i className="la la-list-alt"></i>
                    </div>
                    <div className="content">
                      <h4>15</h4>
                      <span>Published Listings</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm">
                  <div className="pending-listing">
                    <div className="icon">
                      <i className="la la-history"></i>
                    </div>
                    <div className="content">
                      <h4>04</h4>
                      <span>Pending Listings</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm">
                  <div className="active-listing">
                    <div className="icon">
                      <i className="la la-line-chart"></i>
                    </div>
                    <div className="content">
                      <h4>02</h4>
                      <span>Active Promotions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
          <div className="col-lg-3 order-1">
            <div className="lg-dash-user-profile">
              <div className="profile-inner">
                <div className="thumb">
                  <img src="./static/images/dashboard/profile-thumb.jpg" className="img-fluid" alt=""/>
                </div>
                <span>Hello...!</span>
                <h4>Robert Smith</h4>
              </div>
              <div className="profile-buttons">
                <a href="#" className="edit-profile-btn">Edit Profile<i className="la la-edit"></i></a>
                <a href="#" className="logout-btn">Logout<i className="la la-sign-out"></i></a>
              </div>
            </div>
            <div className="lg-dash-side-nav">
                <Sidenav/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Dashboard
