export default (state=[], action) => {
    switch(action.type) {
        case 'GET_LISTINGS_SUCCESS':
            return action.listings;
        
        case 'CREATE_LISTING':
            return state.concat(action.listing);

        case 'DELETE_LISTING':
            // let listings = state.filter(listing => {
            //     return listing.id !== action.listing.id  
            // })  
            return state.filter(listing => listing.id !== action.listing)

        default:
            return state;
    }
}

