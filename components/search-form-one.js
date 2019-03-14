import React from 'react';

const SearchFormOne = () =>(
    <form className="form-inline my-2 my-lg-0 header-form-one mr-auto d-none d-xl-flex">
        <div className="form-group">
            <div className="type-field-block">
                <input className="form-control type-field" type="search" placeholder="What are you looking for ?" aria-label="Search" />
            </div>
            <div className="location-field-block">
            <input className="form-control location-field" type="search" placeholder="Where ?" aria-label="Search" />
            <i className="la la-crosshairs"></i>
            </div>
        </div>
        <button className="btn btn-serach-one" type="submit">
            <i className="fa fa-search"></i>
        </button>
    </form>
);

export default SearchFormOne;