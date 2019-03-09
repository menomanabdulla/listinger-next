import React from 'react';
import { Provider } from 'react-redux';
import store from '../components/store';
import Head from '../components/head';
import Navigation from '../components/navigation';
import Listing from '../components/listing';

import '../style/_general.scss';
import '../style/listing.scss';
import '../style/pagination.scss';
import 'antd/dist/antd.css';


const CPListing = () =>(
  <div>
    <Head title="Listing Details"/>
    <Navigation imgSrc = {'/static/images/logo.png'} containerCls = {'static'} />
    <Provider store = { store }>
      <Listing/>
    </Provider>
  </div>
);

export default CPListing;