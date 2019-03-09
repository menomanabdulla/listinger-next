import React from 'react';
import Head from '../components/head';
import Dashboard from '../components/dashboard/dashboardTemplate';
import {Line} from 'react-chartjs-2';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
//css
import 'antd/dist/antd.css';
import '../style/dashboard.scss';

const data = (canvas) => {
  return{
    labels: ['1', '2', '3', '4','5','6','7'],
    datasets:[{
        fill: true,
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor:  [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
};
const options={
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

class DashboardFrame extends React.Component {
  render() {
    return (
        <div>
            <Head title="Dashboard"/>
            <Navigation imgSrc = {'/static/images/logo.png'} containerCls = {'static'} />
            <Dashboard>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="lg-dash-chart-area">
                            <div className="chart-head">
                                <span><i className="la la-area-chart"></i>Statistics</span>
                                <div className="chart-filter">
                                    <select>
                                        <option value="">Today</option>
                                        <option value="">This Week</option>
                                        <option value="">This Month</option>
                                        <option value="">One Year</option>
                                    </select>
                                    <i className="la la-angle-down"></i>
                                </div>
                            </div>
                            <div className="chart-body">
                                <Line data={data} options={options}/>
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

            
 