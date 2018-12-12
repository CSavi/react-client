export default (state=[], action) => {
    // action param decides what part of the store to change
    switch(action.type) {
        case 'GET_LISTINGS_SUCCESS':
            return action.listings;
        
        case 'CREATE_LISTING':
            return state.concat(action.listing);
        

        case 'DELETE_LISTING':
            return state.filter(listing => listing.id !== action.listing)

        default:
            return state;
    }
}

