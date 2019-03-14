import React from 'react';
import Head from '../components/head';
import Dashboard from '../components/dashboard/dashboardTemplate';
import {Line} from 'react-chartjs-2';
import Navigation from '../components/navigation';
import SearchFormOne from '../components/search-form-one';
import Footer from '../components/footer';
//css
import 'antd/dist/antd.css';
import '../style/dashboard.scss';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'View',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(119,139,235,0.0)',
        borderColor: 'rgba(119,139,235,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(119,139,235,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 6,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(119,139,235,1)',
        pointHoverBorderColor: 'rgba(119,139,235,1)',
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [30, 28, 25, 28, 35, 37, 30]
      },{
        label: 'Favorite',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(230,103,103,00)',
        borderColor: 'rgba(230,103,103,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(230,103,103,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 6,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(230,103,103,1)',
        pointHoverBorderColor: 'rgba(230,103,103,1)',
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [20, 20, 20, 18, 20, 25, 20]
      },
      {
        label: 'Ratting',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(240,185,69,00)',
        borderColor: 'rgba(240,185,69,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(240,185,69,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 6,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(240,185,69,1)',
        pointHoverBorderColor: 'rgba(240,185,69,1)',
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [12, 14, 18, 14, 13, 12, 10]
      }
    ]
};
const options={
    scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], }
};

class DashboardFrame extends React.Component {
  render() {
    return (
        <div>
            <Head title="Dashboard"/>
            <Navigation
                imgSrc = {'/static/images/logo.png'}
                containerCls = {'static'}
                SearchForm= { <SearchFormOne /> } 
            />
            <Dashboard>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="lg-dash-chart-area">
                            <div className="chart-head">
                                <span><i className="la la-area-chart"></i>Statistics</span>
                                <div className="chart-filter">
                                    <select>
                                        <option value="">This Week</option>
                                        <option value="">Today</option>
                                        <option value="">This Month</option>
                                        <option value="">One Year</option>
                                    </select>
                                    <i className="la la-angle-down"></i>
                                </div>
                            </div>
                            <div className="chart-body">
                                <Line data={data}  options={options} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="lg-dash-notification">
                            <div className="dash-notification-head">
                                <span><i className="la la-info-circle"></i>Notifications</span>
                            </div>
                            <div className="dash-notification-body">
                                <a href="#">
                                    <span className="notification-text">Created New Ads Invoice</span>
                                    <span className="notification-time">3 Month ago</span>
                                </a>
                                <a href="#">
                                    <span className="notification-text">Created Subscription Invoice</span>
                                    <span className="notification-time">5 Days ago</span>
                                    </a>
                                    <a href="#">
                                    <span className="notification-text">Created New Ads Invoice</span>
                                    <span className="notification-time">3 Month ago</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Dashboard>
            <Footer />
        </div>
    );
 }
};
export default DashboardFrame;

