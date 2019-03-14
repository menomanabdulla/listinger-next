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
    <Head title="Dashboard | Message"/>
    <Navigation
        imgSrc = {'/static/images/logo.png'}
        containerCls = {'static'}
        SearchForm = { <SearchFormOne /> } 
    />
    <Dashboard>
      <div className="lg-dash-content-block">
          <div className="content-head">
              <span><i className="la la-envelope"></i>Messages</span>
          </div>
          <div className="content-body no-padding">
              <div className="lg-dash-message">
                  <div className="message-lists">
                  <form action="#" className="message-search">
                      <input type="text" placeholder="Search username" />
                      <button><i className="la la-search"></i></button>
                  </form>
                  <a href="#" className="message-single">
                      <div className="thumb">
                      <img src="/static/images/dashboard/user-1.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="body">
                      <h6 className="username">Laura Cormier</h6>
                      <span className="last-text">Hi, I’m sily...</span>
                      <span className="text-number">2</span>
                      </div>
                  </a>
                  <a href="#" className="message-single">
                      <div className="thumb">
                      <img src="/static/images/dashboard/user-2.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="body">
                      <h6 className="username">Paul Cox</h6>
                      <span className="last-text">Ok. Take Care</span>
                      <span className="send-time">2 min</span>
                      </div>
                  </a>
                  <a href="#" className="message-single active">
                      <div className="thumb">
                      <img src="/static/images/dashboard/user-3.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="body">
                      <h6 className="username">Carlos Dobson</h6>
                      <span className="last-text">Good Night</span>
                      <span className="send-time">6 min</span>
                      </div>
                  </a>
                  <a href="#" className="message-single">
                      <div className="thumb">
                      <img src="/static/images/dashboard/user-4.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="body">
                      <h6 className="username">Dahlia Divers</h6>
                      <span className="last-text">See you soon</span>
                      <span className="send-time">45 min</span>
                      </div>
                  </a>
                  </div>
                  <div className="message-box">
                  <div className="message-box-header">
                      <a href="#"><i className="la la-ellipsis-h"></i></a>
                      <h5>Carlos Dobson</h5>
                  </div>
                  <ul className="dashboard-conversation">
                      <li className="conversation in">
                      <div className="avater">
                          <img src="/static/images/dashboard/avater-1.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="message"><span>Can we go inside? I feel like my toes are starting to go numb.</span></div>
                      <span className="send-time">2.32 am</span>
                      </li>
                      <li className="conversation out">
                      <div className="avater">
                          <img src="/static/images/dashboard/avater-2.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="message"><span>Can we go inside? I feel like my toes are starting to go numb.</span></div>
                      <span className="send-time">2.32 am</span>
                      </li>
                      <li className="conversation in">
                      <div className="avater">
                          <img src="/static/images/dashboard/avater-1.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="message"><span>Hi, Luke! How are you? Can you please stop</span></div>
                      <span className="send-time">2.34 am</span>
                      </li>
                      <li className="conversation out">
                      <div className="avater">
                          <img src="/static/images/dashboard/avater-2.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="message"><span>Hi, Luke! How are you? Can you please stop and pick up extra paper for the computer ?</span></div>
                      <span className="send-time">2.34 am</span>
                      </li>
                      <li className="conversation in">
                      <div className="avater">
                          <img src="dashboard/images/avater-1.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="message file-send">
                          <div className="images">
                          <img src="/static/images/dashboard/avater-3.jpg" className="img-fluid" alt="" />
                          <img src="/static/images/dashboard/avater-4.jpg" className="img-fluid" alt="" />
                          <img src="/static/images/dashboard/avater-5.jpg" className="img-fluid" alt="" />
                          <span className="more">+12</span>
                          </div>
                      </div>
                      <span className="send-time">2.34 am</span>
                      </li>
                  </ul>
                  <div className="conversation-write-wrap">
                      <form action="#">
                      <label className="send-file">
                          <input type="file" /><i className="la la-paperclip"></i>
                      </label>
                      <label className="send-image">
                          <input type="file" /><i className="la la-image"></i>
                      </label>
                      <textarea placeholder="Type a message"></textarea>
                      <a href="#" className="emoji"><i className="la la-smile-o"></i></a>
                      <button className="send-message"><i className="la la-paper-plane"></i></button>
                      </form>
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
 