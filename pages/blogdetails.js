import React from 'react';
import Head from '../components/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import SearchFormOne from '../components/search-form-one';
//css
import '../style/_general.scss';
import '../style/blog.scss';
const BlogDetails = () =>(
    <div>
        <Head title="News Details"/>
        <Navigation
            imgSrc = {'/static/images/logo.png'}
            containerCls = {'static'}
            SearchForm = { <SearchFormOne /> } 
        />
        <div className="padding-tb110 padding-b80 lg-inner-page">
            <div className="container">
                <div className="row">
                <div className="col-lg-2 d-none d-lg-block d-xl-block">
                    <div className="post-details-meta">
                        <span className="date">24<span>Aug, 19</span></span>
                        <span className="author"><a href="#"><i className="la la-user"></i>David Chandler</a></span>
                        <span className="author"><a href="#"><i className="la la-comments"></i>42 Comments</a></span>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="lg-post-details">
                        <div className="post-thumb">
                            <img src="/static/images/blog/post-thumb.jpg" className="img-fluid" alt="" />
                        </div>
                        <h2>But who has any right to find  fault with a man who</h2>
                        <p>
                            It is pleasure, but because those who do not know how to pursue pleasure rationally 
                            encounter consequences that are extremely painful. Nor again is there anyone who because it is pleasure, 
                            but because those who do not know how to pursue pleasure rationally encounter consequences that are 
                            extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, 
                            because it is pain, but because occasionally circumstances occur in which toil and pain can procure 
                            him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.
                        </p>
                        <p>
                            Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi 
                            sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus <br/>omnis 
                            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum 
                            necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum 
                            hic tenetur a sapie
                        </p>
                        <blockquote>
                            “Curabitur porta quam sit amet est semper congue. The web design industry has been 
                            undergoing tremendous changes to meet the demand. which is the same as saying through shrinking from toil and pain”
                        </blockquote>
                        <p>
                            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
                            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
                            quo minus id quod maxime placeat facere possimus.
                        </p>
                        <div className="images">
                            <img src="/static/images/blog/1.jpg" className="img-fluid" alt="" />
                            <img src="/static/images/blog/2.jpg" className="img-fluid" alt="" />
                        </div>
                        <ul>
                            <li>But because those who do not know how to pursue pleasure</li>
                            <li>Nor again is there anyone who loves or pursues</li>
                            <li>Except to obtain some advantage from it?</li>
                            <li>who avoids a pain that produces no resultant pleasure.</li>
                        </ul>
                        <p>
                            Who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally 
                            circumstances occur in which toil and pain can procure him some great pleasure to take a trivial example  
                            pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who 
                            loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally a trivial example.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="post-meta-block">
                <div className="container">
                <div className="row">
                <div className="col">
                    <div className="lg-post-infos">
                    <div className="post-author">
                        <div className="avatar">
                        <img src="/static/images/blog/author.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="name">
                        <p>Post By</p>
                        <h5><a href="#">Rovert Carlos</a></h5>
                        </div>
                    </div>
                    <div className="post-tag">
                        <h6>Post Tag</h6>
                        <div className="tags">
                        <a href="#">Listing</a>
                        <a href="#">Hotel</a>
                        <a href="#">Resturent</a>
                        </div>
                    </div>
                    <div className="post-share">
                        <h6>Post Share</h6>
                        <div className="social-buttons">
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                        <a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a>
                        <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="lg-inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="post-comment-block">
                            <div className="comment-area">
                                <h4>03 Comments</h4>
                                <ul className="comments">
                                    <li className="comment">
                                    <div className="comment-wrap">
                                        <div className="comment-info">
                                        <div className="commenter-thumb">
                                            <img src="/static/images/blog/author2.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="commenter-info">
                                            <span className="commenter-name">Rovert Ethel</span>
                                            <span className="date">28 Feb 2019</span>
                                        </div>
                                        <div className="reply">
                                            <button type="button" className="reply-button" data-toggle="modal" data-target="#modal-skill25">Reply</button>
                                            <div className="modal fade" id="modal-skill25" tabIndex="-1" role="dialog" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                    <div className="modal-body">
                                                        <div className="comment-respond">
                                                            <h4>Write A Comment</h4>
                                                            <form action="#">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                        <input type="text" placeholder="Name" className="form-control" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                        <input type="email" placeholder="Email address" className="form-control" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <textarea placeholder="Comment" className="form-control"></textarea>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <div className="custom-control custom-checkbox">
                                                                                <div className="custom-checkbox-wrap">
                                                                                    <input type="checkbox" className="custom-control-input" id="customCheck4" name="example1" />
                                                                                    <label className="custom-control-label" htmlFor="customCheck4">Notify me of follow-up comments by email</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button className="btn btn-default">Submit</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="comment-body">
                                        <p>
                                            But because those who do not know how to pursue pleasure rationally encounter consequences 
                                            that are extremely painful. Nor again is there anyone who loves or pursues or desires to 
                                            obtain pain of itself because. placeat facere possimus, omnis voluptas assumenda est.
                                        </p>
                                    </div>
                                </div>
                                <ul className="comments child-comment">
                                    <li className="comment">
                                    <div className="comment-wrap">
                                        <div className="comment-info">
                                        <div className="commenter-thumb">
                                            <img src="/static/images/blog/author3.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="commenter-info">
                                            <span className="commenter-name">Ethel N. Myers</span>
                                            <span className="date">28 Dec 2019</span>
                                        </div>
                                        <div className="reply">
                                            <button type="button" className="reply-button" data-toggle="modal" data-target="#modal-skill26">Reply</button>
                                            <div className="modal fade" id="modal-skill26" tabIndex="-1" role="dialog" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                <div className="modal-body">
                                                    <div className="comment-respond">
                                                    <h4>Write A Comment</h4>
                                                    <form action="#">
                                                        <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                            <input type="text" placeholder="Name" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                            <input type="email" placeholder="Email address" className="form-control" />
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <textarea placeholder="Comment" className="form-control"></textarea>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <div className="custom-checkbox-wrap">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck5" name="example1" />
                                                                            <label className="custom-control-label" htmlFor="customCheck5">Notify me of follow-up comments by email</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-default">Submit</button>
                                                    </form>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="comment-body">
                                            <p>
                                                But because those who do not know how to pursue pleasure rationally encounter 
                                                consequences that are extremely painful. Nor again is there anyone.
                                            </p>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                                </li>
                                <li className="comment">
                                <div className="comment-wrap">
                                    <div className="comment-info">
                                    <div className="commenter-thumb">
                                        <img src="/static/images/blog/author4.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="commenter-info">
                                        <span className="commenter-name">Myers Flory</span>
                                        <span className="date">28 Dec 2019</span>
                                    </div>
                                    <div className="reply">
                                        <button type="button" className="reply-button" data-toggle="modal" data-target="#modal-skill27">Reply</button>
                                        <div className="modal fade" id="modal-skill27" tabIndex="-1" role="dialog" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="comment-respond">
                                                <h4>Write A Comment</h4>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                            <input type="text" placeholder="Name" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                            <input type="email" placeholder="Email address" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <textarea placeholder="Comment" className="form-control"></textarea>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="custom-control custom-checkbox">
                                                                    <div className="custom-checkbox-wrap">
                                                                        <input type="checkbox" className="custom-control-input" id="customCheck6" name="example1" />
                                                                        <label className="custom-control-label" htmlFor="customCheck6">Notify me of follow-up comments by email</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-default">Submit</button>
                                                </form>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="comment-body">
                                    <p>
                                        But because those who do not know how to pursue pleasure rationally encounter consequences that 
                                        are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain 
                                        pain of itself because. placeat facere possimus, omnis voluptas assumenda est.
                                    </p>
                                    </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                        <div className="comment-respond">
                            <h4>Leave A Comment</h4>
                            <form action="#" className="comment-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" placeholder="Name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input type="email" placeholder="Email address" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea placeholder="Comment" className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
)

export default BlogDetails;