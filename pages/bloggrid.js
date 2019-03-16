import React from 'react';
import Head from '../components/head';
import SearchFormOne from '../components/search-form-one';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
//css
import '../style/_general.scss';
import '../style/header.scss';
import '../style/blog.scss';
import '../style/call-to-action.scss';
const BlogGrid = () =>(
    <div>
        <Head title="News Grid | Listing"/>
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
                            <h2>News Grid</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">News Grid</li>
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
            <div className="col-lg-4 col-md-6">
                <div className="lg-post-grid">
                <a href="/blogdetails" className="post-thumb">
                    <img src="/static/images/blog/img-1.jpg" className="img-fluid" alt="" />
                </a>
                <div className="post-body">
                    <div className="post-content">
                    <div className="date">
                        <h5>24</h5>
                        <span>Aug</span>
                    </div>
                    <div className="content">
                        <h3><a href="/blogdetails">There are many variations of passages</a></h3>
                        <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which looks</p>
                    </div>
                    </div>
                    <div className="post-meta">
                    <a className="author" href="#"><i className="la la-user"></i>David Chandler</a>
                    <a className="comment" href="#"><i className="la la-comments"></i>42</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="lg-post-grid">
                <a href="/blogdetails" className="post-thumb">
                    <img src="/static/images/blog/img-2.jpg" className="img-fluid" alt="" />
                </a>
                <div className="post-body">
                    <div className="post-content">
                    <div className="date">
                        <h5>05</h5>
                        <span>Aug</span>
                    </div>
                    <div className="content">
                        <h3><a href="/blogdetails">But who has any right to find fault with a man who</a></h3>
                        <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which looks</p>
                    </div>
                    </div>
                    <div className="post-meta">
                    <a className="author" href="#"><i className="la la-user"></i>David Chandler</a>
                    <a className="comment" href="#"><i className="la la-comments"></i>42</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="lg-post-grid">
                <a href="/blogdetails" className="post-thumb">
                    <img src="/static/images/blog/img-4.jpg" className="img-fluid" alt="" />
                </a>
                <div className="post-body">
                    <div className="post-content">
                    <div className="date">
                        <h5>13</h5>
                        <span>Feb</span>
                    </div>
                    <div className="content">
                        <h3><a href="/blogdetails">Nor again is there anyone who loves or pursues </a></h3>
                        <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which looks</p>
                    </div>
                    </div>
                    <div className="post-meta">
                    <a className="author" href="#"><i className="la la-user"></i>David Chandler</a>
                    <a className="comment" href="#"><i className="la la-comments"></i>42</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="lg-post-grid">
                <a href="/blogdetails" className="post-thumb">
                    <img src="/static/images/blog/img-3.jpg" className="img-fluid" alt="" />
                </a>
                <div className="post-body">
                    <div className="post-content">
                    <div className="date">
                        <h5>26</h5>
                        <span>Mar</span>
                    </div>
                    <div className="content">
                        <h3><a href="/blogdetails">There are many variations of passages</a></h3>
                        <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which looks</p>
                    </div>
                    </div>
                    <div className="post-meta">
                    <a className="author" href="#"><i className="la la-user"></i>David Chandler</a>
                    <a className="comment" href="#"><i className="la la-comments"></i>42</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="lg-post-grid">
                <a href="/blogdetails" className="post-thumb">
                    <img src="/static/images/blog/img-5.jpg" className="img-fluid" alt="" />
                </a>
                <div className="post-body">
                    <div className="post-content">
                    <div className="date">
                        <h5>18</h5>
                        <span>Feb</span>
                    </div>
                    <div className="content">
                        <h3><a href="/blogdetails">There are many variations of passages</a></h3>
                        <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which looks</p>
                    </div>
                    </div>
                    <div className="post-meta">
                    <a className="author" href="#"><i className="la la-user"></i>David Chandler</a>
                    <a className="comment" href="#"><i className="la la-comments"></i>42</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="lg-post-grid">
                <a href="/blogdetails" className="post-thumb">
                    <img src="/static/images/blog/img-6.jpg" className="img-fluid" alt="" />
                </a>
                <div className="post-body">
                    <div className="post-content">
                    <div className="date">
                        <h5>23</h5>
                        <span>Jun</span>
                    </div>
                    <div className="content">
                        <h3><a href="/blogdetails">Nor again is there anyone who loves or pursues </a></h3>
                        <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which looks</p>
                    </div>
                    </div>
                    <div className="post-meta">
                    <a className="author" href="#"><i className="la la-user"></i>David Chandler</a>
                    <a className="comment" href="#"><i className="la la-comments"></i>42</a>
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
        <Footer />
    </div>
)

export default BlogGrid;