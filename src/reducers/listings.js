export default (state=[], action) => {
    // action param decides what part of the store to change
    switch(action.type) {
        case 'GET_LISTINGS_SUCCESS':
            return action.listings;
        
        case 'CREATE_LISTING':
            return state.concat(action.listing);

        case 'UPDATE_LISTING':
            // if the listing that we are iterating over is the one we want to change, return the updated listing
            // if not, return that original listing
            return state.map(listing => {
                if (listing.id === action.listing.id) {
                    return action.listing
                } else {
                    return listing
                }
            })
            // return Object.assign({}, state, {
            //     count: state.listing.count + 1
            // })
            //{count: state.listing.count + 1}

        case 'DELETE_LISTING':
            return state.filter(listing => listing.id !== action.listing)

        default:
            return state;
    }
}

