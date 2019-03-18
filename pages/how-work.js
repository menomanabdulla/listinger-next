import React from 'react';
import Head from '../components/head';
import Navigation from '../components/navigation';
import SearchFormOne from '../components/search-form-one';
import Footer from '../components/footer';
//css
import '../style/how-it-work.scss';


const HowWork = () => (
    <div>
        <Head title="How-Work | Listing"/>
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
                            <h2>How it Work</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">How it Work</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="padding-tb110">
            <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 offset-xl-1 order-lg-2">
                <div className="working-process-thumb">
                    <img src="/static/images/how-it-work/thumb-1.png" className="img-fluid" alt="" />
                </div>
                </div>
                <div className="col-xl-6 col-lg-6 order-lg-1">
                <div className="right-content-md">
                    <div className="working-process-box">
                    <span>Step 1</span>
                    <h3>Create An Account</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. All the Lorem Ipsum generators.</p>
                    <a href="#" className="button primary-bg">Create Account</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="padding-bottom-110">
            <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6">
                    <div className="working-process-thumb">
                        <img src="/static/images/how-it-work/thumb-2.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 offset-xl-1">
                    <div className="right-content-md">
                        <div className="working-process-box">
                            <span>step 2</span>
                            <h3>Post Your Listing</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. All the Lorem Ipsum generators.</p>
                            <a href="#" className="button primary-bg">Add Listing</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="padding-bottom-110">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 offset-xl-1 order-lg-2">
                        <div className="working-process-thumb">
                            <img src="/static/images/how-it-work/thumb-3.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 order-lg-1">
                        <div className="right-content-md">
                            <div className="working-process-box">
                            <span>Step 3</span>
                            <h3>Promote Business</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. All the Lorem Ipsum generators.</p>
                            <a href="#" className="button primary-bg">Promote Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default HowWork;