import React from 'react';
import Head from '../components/head';
import Navigation from '../components/navigation';
import SearchFormOne from '../components/search-form-one';
import Footer from '../components/footer';
//css
import '../style/_general.scss';
import '../style/header.scss';
import '../style/blog.scss';
import '../style/call-to-action.scss';
const BlogList = () =>(
    <div>
      <Head title="BlogList | Listing"/>
      <Navigation
          imgSrc = {'/static/images/logo.png'}
          containerCls = {'static'}
          SearchForm = { <SearchFormOne /> } 
      />
      <div className="page-header page-header-bg">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="page-header-inner">
                          <h2>News List</h2>
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">News List</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="padding-tb110 lg-inner-page">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="lg-post-list">
                <div className="row">
                  <div className="col-lg-2 d-none d-lg-block d-xl-block">
                    <div className="post-meta">
                      <span className="date">24<span>Aug, 19</span></span>
                      <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                      <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <div className="post-content">
                      <div className="post-thumb">
                        <a href="/blogdetails"><img src="/static/images/blog/img-7.jpg" className="img-fluid" alt=""/></a>
                      </div>
                      <div className="post-body">
                        <h3><a href="/blogdetails">There are many variations of passages</a></h3>
                        <div className="post-meta">
                          <span className="date">24 Aug, 19</span>
                          <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                          <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                        </div>
                        <p>It is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who</p>
                        <a href="/blogdetails" className="lg-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg-post-list">
                <div className="row">
                  <div className="col-lg-2 d-none d-lg-block d-xl-block">
                    <div className="post-meta">
                      <span className="date">22<span>Aug, 19</span></span>
                      <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                      <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <div className="post-content">
                      <div className="post-thumb">
                        <a href="/blogdetails"><img src="/static/images/blog/img-8.jpg" className="img-fluid" alt=""/></a>
                      </div>
                      <div className="post-body">
                        <h3><a href="/blogdetails">But who has any right to find  fault with a man who</a></h3>
                        <div className="post-meta">
                          <span className="date">24 Aug, 19</span>
                          <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                          <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                        </div>
                        <p>It is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who</p>
                        <a href="/blogdetails" className="lg-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg-post-list">
                <div className="row">
                  <div className="col-lg-2 d-none d-lg-block d-xl-block">
                    <div className="post-meta">
                      <span className="date">20<span>Aug, 19</span></span>
                      <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                      <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <div className="post-content">
                      <div className="post-thumb">
                        <a href="/blogdetails"><img src="/static/images/blog/img-9.jpg" className="img-fluid" alt=""/></a>
                      </div>
                      <div className="post-body">
                        <h3><a href="/blogdetails">Nor again is there anyone who loves or pursues </a></h3>
                        <div className="post-meta">
                          <span className="date">20 Aug, 19</span>
                          <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                          <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                        </div>
                        <p>It is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who</p>
                        <a href="/blogdetails" className="lg-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg-post-list">
                <div className="row">
                  <div className="col-lg-2 d-none d-lg-block d-xl-block">
                    <div className="post-meta">
                      <span className="date">10<span>Aug, 19</span></span>
                      <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                      <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <div className="post-content">
                      <div className="post-thumb">
                        <a href="/blogdetails"><img src="/static/images/blog/img-10.jpg" className="img-fluid" alt=""/></a>
                      </div>
                      <div className="post-body">
                        <h3><a href="/blogdetails">Which toil and pain can procure him some great</a></h3>
                        <div className="post-meta">
                          <span className="date">24 Aug, 19</span>
                          <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                          <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                        </div>
                        <p>It is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who</p>
                        <a href="/blogdetails" className="lg-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg-post-list">
                <div className="row">
                  <div className="col-lg-2 d-none d-lg-block d-xl-block">
                    <div className="post-meta">
                      <span className="date">10<span>Aug, 19</span></span>
                      <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                      <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <div className="post-content">
                      <div className="post-thumb">
                        <a href="/blogdetails"><img src="/static/images/blog/img-11.jpg" className="img-fluid" alt=""/></a>
                      </div>
                      <div className="post-body">
                        <h3><a href="/blogdetails">There are many variations of passages</a></h3>
                        <div className="post-meta">
                          <span className="date">10 Aug, 19</span>
                          <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                          <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                        </div>
                        <p>It is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who</p>
                        <a href="/blogdetails" className="lg-button">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <nav className="navigation pagination mar-30">
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
          <div className="padding-top-120 lg-inner-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="lg-call-to-action">
                    <h2>Subscribe <span> Our Newsletter</span></h2>
                    <div className="newsletter-form">
                      <form action="#">
                        <input type="email" placeholder="Email Address..." />
                        <button>Subscribe Now</button>
                        <p><span>*</span> We don’t send spam so don’t worry.</p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
)

export default BlogList;