

import listingData from '../data';
const initialState = {
    listingData,
    filterListing: listingData
}
function listingReducer (state = initialState,action){
    switch(action.type){
        case 'spa':{
            return {
                ...state,
                filterListing: state.listingData.filter( item => item.typeClass === 'spa')
            }
        }
        case 'bar':{
            return {
                ...state,
                filterListing: state.listingData.filter( item => item.typeClass === 'bar')
            }
        }
        case 'restaurants':{
            return {
                ...state,
                filterListing: state.listingData.filter( item => item.typeClass === 'restaurants')
            }
        }
        case 'hotel':{
            return {
                ...state,
                filterListing: state.listingData.filter( item => item.typeClass === 'hotel')
            }
        }
        case 'cart':{
            return {
                ...state,
                filterListing: state.listingData.filter( item => item.typeClass === 'cart')
            }
        }
        case 'allcatagories':{
            return {
                ...state,
                filterListing: state.listingData
            }
        }
        default: return state
    }
}

export default listingReducer;