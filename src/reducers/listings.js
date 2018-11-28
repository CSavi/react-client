export default (state=[], action) => {
    switch(action.type) {
        case 'GET_LISTINGS_SUCCESS':
            return action.listings;
        
        case 'CREATE_LISTING':
            return state.concat(action.listing);

        // case 'REMOVE_LISTING':
        //     return listing.id !== action.listing.id    
        default:
            return state;
    }
}

