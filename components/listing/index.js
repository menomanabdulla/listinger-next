import React from 'react';
import ListingMap from './listing-map';
import ListingList from './listing-list';

const Listing = () =>(
    <div className="listing-wrap-block listing-fixed-map">
        <div className="lg-listing-search-map bg-gray">
            <div className="container-fluid no-gutters">
                <div className="row main-content">
                    <div className="col-12 col-xl-6">
                        <div className="row">
                            <ListingList/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="row">
                            <ListingMap/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)

export default Listing;