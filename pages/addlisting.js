import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Select } from 'antd';

import Head from '../components/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import SearchFormOne from '../components/search-form-one';

import 'antd/dist/antd.css';
import '../style/_general.scss';
import '../style/header.scss';
import '../style/add-listing.scss';


const Option = Select.Option;

const children = [];
const CatList = [
    'Automotive',
    'Beauty & Spa',
    'Cafe & Bar',
    'Hotel',
    'Real Estate',
    'Restaurant',
    'SHopping'
]
for (let i = 1; i < CatList.length; i++) {
  children.push(<Option key={i.toString(36) + i}>{`${CatList[i]}`}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}


const AddListing = () =>(
    <div>
        <Head title="Add Listing | Listing"/>
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
                            <h2>Add Listings</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Add Listing</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-add-listing bg-gray padding-tb120">
        <div className="container">
            <div className="row main-content">
                <div className="col-lg-3 sidebar">
                    <div className="sidebar__inner addlisting-sidebar">
                        <div className="lg-add-listing-navigation">
                            <h5 className="entry-title"><i className="la la-chevron-circle-down"></i>navigation</h5>
                            <ul className="navigation-list">
                                <li><a href="#listingtitle"><i className="la la-fire"></i>Listing Title</a></li>
                                <li><a href="#categories"><i className="la la-paper-plane-o"></i>Categories</a></li>
                                <li><a href="#location"><i className="la la-map-marker"></i>Location</a></li>
                                <li><a href="#contactdetails"><i className="la la-envelope-o"></i>Contact Details</a></li>
                                <li><a href="#description"><i className="la la-list-alt"></i>Description</a></li>
                                <li><a href="#businesshour"><i className="la la-clock-o"></i>Business Hours</a></li>
                                <li><a href="#pricerange"><i className="la la-money"></i>Price Range</a></li>
                                <li><a href="#social"><i className="la la-share-alt"></i>Social Networks</a></li>
                                <li><a href="#imagegallery"><i className="la la-image"></i>Image &amp; Gallery</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <form id="insertdataform" className="add-listing-form" method="POST" encType="multipart/form-data">
                        <Scrollspy items={ [
                            'listingtitle', 
                            'ategories', 
                            'location',
                            'contactdetails',
                            'description',
                            'pricerange',
                            'social',
                            'imagegallery'
                        ] } currentClassName="is-current">
                        <h5 className="entry-header"><i className="la la-plus-circle"></i>Add Listings</h5>
                        <div className="entry-content">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="errorMessage">
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div id="listingtitle" className="form-group row">
                                        <label htmlFor="listing_name" className="col-sm-2 col-form-label">Listing Name*</label>
                                        <div className="col-sm-10">
                                            <input id="listing_name" type="text" name="post_title"  className="form-control htmlForm-single-element"
                                                placeholder="Ex: Anderson Hotel" aria-required="true" required="" />
                                            <input id="listing_tagline" name="business_tagline"  type="text"
                                                className="form-control" placeholder="Business Tagline goes here"
                                                aria-required="true" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="listing_category" className="col-sm-2 col-form-label">Category</label>
                                        <div className="col-sm-10">
                                        <Select
                                            mode="multiple"
                                            style={{ width: '100%' }}
                                            placeholder="Please select"
                                            defaultValue={['Automotive', 'Beauty & Spa']}
                                            onChange={handleChange}
                                            >
                                            {children}
                                        </Select>
                                        </div>
                                    </div>
                                    <div id="location" className="form-group row">
                                        <label htmlFor="listing_address" className="col-sm-2 col-form-label">Location (Full
                                            Address)</label>
                                        <div className="col-sm-10">
                                            <input id="listing_address" name="location_text"  type="text" className="form-control"
                                                placeholder="Find your place in gogle map" aria-required="true" />

                                            <select id="listing_region" name="region" className="form-control">
                                                <option value="42">Califonia</option>
                                                <option value="43">Dhaka</option>
                                                <option value="45">india</option>
                                                <option value="46">Los Angeles</option>
                                                <option value="47">New Buston</option>
                                                <option value="48">New York</option>
                                            </select>
                                            <div className="row">
                                                <div className="col-6">
                                                    <input type="text" name="latitude"  className="form-control" id="lat"
                                                        placeholder="Latitude" />
                                                </div>
                                                <div className="col-6">
                                                    <input type="text" name="longitude"  className="form-control"
                                                        id="lng" placeholder="Longitude" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="contactdetails" className="form-group row">
                                        <label htmlFor="listing_phone_no" className="col-sm-2 col-form-label">Contact Details *</label>
                                        <div className="col-sm-10">
                                            <input id="listing_phone_no" type="text" className="form-control" name="contact_phone"
                                                 placeholder="Ex: +1-0000-000-000" aria-required="true" />
                                            <input id="listing_email" type="email" className="form-control" name="contact_email"
                                                 placeholder="Ex: info@example.com" aria-required="true"
                                                required="" />

                                            <input id="listing_website" name="website"  type="text" className="form-control"
                                                placeholder="Ex: www.example.com" aria-required="true" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="faq" className="col-sm-2 col-form-label">FAQ</label>
                                        <div className="col-sm-10">
                                            <div id="accordion-generator" className="accordion-generator">
                                                <div className="panel-group" id="accordion" role="tablist"
                                                    aria-multiselectable="true">
                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" role="tab" id="tab_1">
                                                            <span role="button" data-toggle="collapse" data-parent="#accordion"
                                                                data-target="#collapse_1" aria-expanded="true">
                                                                <input name="faq_title[]" type="text" className="form-control"
                                                                    placeholder="Question" aria-required="true" />
                                                            </span>
                                                        </div>
                                                        <div id="collapse_1" className="panel-collapse collapse show" role="tabpanel"
                                                            aria-labelledby="tab_1">
                                                            <div className="panel-body">
                                                                <textarea name="faq_content[]" rows="8" cols="30"
                                                                    placeholder="Answer" className="form-control"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button type="button" id="btn-add-accoridon" className="btn btn-faq"><i
                                                        className="fa fa-plus-circle" aria-hidden="true"></i>Add New</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="businesshour" className="form-group row">
                                        <label htmlFor="listing_timezone" className="col-sm-2 col-form-label">Time Zone</label>
                                        <div className="col-sm-10">
                                            <select id="listing_timezone" name="timezone" className="form-control">
                                                <option value="acdt">Australia/Adelaide</option>
                                                <option value="acdt">Australia/Broken_Hill</option>
                                                <option value="acdt">Australia/Darwin</option>
                                                <option value="acdt">Australia/North</option>
                                                <option value="acdt">Australia/South</option>
                                                <option value="acdt">Australia/Yancowinna</option>
                                                <option value="acst">America/Porto_Acre</option>
                                                <option value="acst">Australia/Adelaide</option>
                                                <option value="acst">America/Eirunepe</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="pricerange" className="form-group row">
                                        <label htmlFor="listing_price" className="col-sm-2 col-form-label">Price</label>
                                        <div className="col-sm-10">
                                            <select id="listing_price" name="pirce_status" className="form-control">
                                                <option >Select an Option</option>
                                                <option >Expensive</option>
                                                <option >Inexpensive</option>
                                                <option >Moderate</option>
                                            </select>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" name="price_from" 
                                                        placeholder="Price From" aria-required="true" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" name="price_to" 
                                                        placeholder="Price To" aria-required="true" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="social" className="form-group row">
                                        <label htmlFor="listing_facebook_url" className="col-sm-2 col-form-label">Social
                                            Profile</label>
                                        <div className="col-sm-10">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input id="listing_facebook_url" type="text" name="facebook_url"
                                                             className="form-control" placeholder="Facebook URL"
                                                            aria-required="true" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="listing_twitter_url" type="text" name="twitter_url"
                                                             className="form-control" placeholder="Twitter URL"
                                                            aria-required="true" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="listing_instagram_url" type="text" name="instagram_url"
                                                             className="form-control" placeholder="Instagram URL"
                                                            aria-required="true" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input id="listing_googleplus_url" type="text" name="google_plus_url"
                                                             className="form-control" placeholder="Google Plus URL"
                                                            aria-required="true" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="listing_youtube_url" type="text" name="youtube_url"
                                                             className="form-control" placeholder="YouTube URL"
                                                            aria-required="true" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="listing_linkedin_url" type="text" name="linkedin_url"
                                                             className="form-control" placeholder="Linkedin URL"
                                                            aria-required="true" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div id="imagegallery" className="form-group image-upload-process row">
                                        <label htmlFor="image-gallery" className="col-sm-2 col-form-label">Image &amp; Gallery
                                            *</label>
                                        <div className="col-sm-10">
                                         
                                            <div id="gallery_image">
                                               
                                                <input type="hidden" id="_wpnonce" name="_wpnonce" value="edcbdda288" /><input
                                                    type="hidden" name="_wp_http_referer" value="/wplistinger/add-listing/" />
                                                <div className="listinger_gallery_image_upload file-upload">
                                                    <div className="form-group htmlForm-group-file-type">
                                                        <label>Gallery Images</label>
                                                        <input name="listinger_gallery_image_file_input[]" type="file"
                                                            className="form-control-file listinger_gallery_image_file_input" />
                                                        <input type="hidden" className="alluploadedimage" name="alluploadedimage" />
                                                       
                                                        <div className="spinner">
                                                            <div className="double-bounce1"></div>
                                                            <div className="double-bounce2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="file-upload file-preview listinger_gallery_image_upload_preview">
                                                    <div className="listinger_uploaded_image_preview"></div>
                                                </div>
                                            </div>
                                           
                                            <div id="featured_image">
                                                <div className="file-upload listinger_gallery_image_upload">
                                                    <div className="form-group htmlForm-group-file-type">
                                                        <label>Featured Images</label>
                                                        <input name="listinger_featured_image_file_input[]" type="file"
                                                            className="form-control-file listinger_featured_image_file_input" />
                                                        <input type="hidden" className="alluploadedimage" name="alluploadedimage" />
                                                        
                                                        <div className="spinner">
                                                            <div className="double-bounce1"></div>
                                                            <div className="double-bounce2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="file-upload file-preview listinger_gallery_image_upload_preview">
                                                    <div className="listinger_uploaded_featured_image_preview"></div>
                                                </div>
                                            </div>
                                            <div id="company_logo">
                                                <div className="listinger_gallery_image_upload file-upload">
                                                    <div className="form-group htmlForm-group-file-type">
                                                        <label>Company Logo</label>
                                                        <input name="listinger_company_logo_file_input" type="file"
                                                            className="form-control-file listinger_company_logo_file_input" />
                                                        <input type="hidden" className="alluploadedimage" name="alluploadedimage" />
                                                        
                                                        <div className="spinner">
                                                            <div className="double-bounce1"></div>
                                                            <div className="double-bounce2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="file-upload file-preview listinger_gallery_image_upload_preview">
                                                    <div className="listinger_company_logo_preview"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="alert" className="col-sm-2 col-form-label invisible">Alert</label>
                                        <div className="col-sm-10">
                                            <div className="alert alert-success" role="alert">
                                                Enter your information to Sign up &amp; get approval notification </div>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="listing_user_name" className="col-sm-2 col-form-label">Sign Up</label>
                                        <div className="col-sm-10">
                                            <input id="listing_user_name" type="text" name="user_name" className="form-control"
                                                placeholder="Enter your full name here" aria-required="true" required="" />
                                            <input id="listing_user_email" type="email" name="user_email" className="form-control"
                                                placeholder="Enter your email here" aria-required="true" required="" />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="submit-listing" className="col-sm-2 col-form-label invisible">Submit</label>
                                        <div className="col-sm-10">
                                            <input type="hidden" id="post_nonce_field" name="post_nonce_field" value="9e05c88d3a" /><input
                                                type="hidden" name="_wp_http_referer" value="/wplistinger/add-listing/" />
                                            <button type="submit" name="list_form_submitted" className="btn btn-red">Save
                                                &amp; Preview</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        </Scrollspy>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer />
   </div>
);

export default AddListing;