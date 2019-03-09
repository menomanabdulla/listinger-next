import {combineReducers} from 'redux';

import listingReducer from './listing-reducer'

const rootReducer = combineReducers({
    listing : listingReducer
});

export default rootReducer;