import React from 'react';

const SearchFormTwo = () =>(
    <div className="browse-listing">
    <div className="row no-gutters">
        <div className="col-12">
            <form className="navbar-mulitsearch" action="#" method="GET">
                <input type="hidden" name="search" value="listing" />
                <div className="styled-input no-arrow">            
                    <input id="header_category_search" name="keyword" className="form-control" type="text" required="" />
                    <label>What are you looking for ?</label>
                    <span></span>
                    <button className="searchsubmit" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>        

            </form>
        </div>
        <div className="col-6">
            <h5 className="entry-title">BY Category</h5>
            <ul id="tax-categorie" className="taxonomy-list">
                <li><a href="#">Automotive</a></li>
                <li><a href="#">Califonia</a></li>
                <li><a href="#">Dhaka</a></li>
                <li><a href="#">india</a></li>
                <li><a href="#">Los Angeles</a></li> 
            </ul>
        </div>
        <div className="col-6">
            <div className="border">
                <h5 className="entry-title">BY Location</h5>
                <ul id="tax-region" className="taxonomy-list">
                    <li><a href="#">Califonia</a></li>
                    <li><a href="#">Dhaka</a></li>
                    <li><a href="#">india</a></li>
                    <li><a href="#">Los Angeles</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
);

export default SearchFormTwo;