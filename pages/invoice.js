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
    <Head title="Dashboard | Invoice"/>
    <Navigation imgSrc = {'/static/images/logo.png'} containerCls = {'static'} />
    <Dashboard>
      <div className="lg-dash-content-block">
          <div className="content-head">
              <span><i className="la la-file-text"></i>Invoice</span>
          </div>
          <div className="content-body">
              <div className="invoice">
                  <table className="table">
                      <thead>
                          <tr>
                            <th className="order-number">Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td className="order-number">#5693214</td>
                            <td>22 Jan, 2019</td>
                            <td>Processing</td>
                            <td>$512.00</td>
                            <td className="action"><a href="#" title="Preview" data-tooltip="" className="action-btn preview"><i className="la la-eye"></i></a></td>
                          </tr>
                          <tr>
                            <td className="order-number">#4563258</td>
                            <td>15 Feb, 2019</td>
                            <td>Complete</td>
                            <td>$12.00</td>
                            <td className="action"><a href="#" title="Preview" data-tooltip="" className="action-btn preview"><i className="la la-eye"></i></a></td>
                          </tr>
                          <tr>
                            <td className="order-number">#5569214</td>
                            <td>12 Feb, 2019</td>
                            <td>Processing</td>
                            <td>$327.00</td>
                            <td className="action"><a href="#" title="Preview" data-tooltip="" className="action-btn preview"><i className="la la-eye"></i></a></td>
                          </tr>
                          <tr>
                            <td className="order-number">#5693214</td>
                            <td>05 Mar, 2019</td>
                            <td>Processing</td>
                            <td>$533.00</td>
                            <td className="action"><a href="#" title="Preview" data-tooltip="" className="action-btn preview"><i className="la la-eye"></i></a></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    </Dashboard>
    <Footer />
  </div>
)

export default DashboardFrame;
 