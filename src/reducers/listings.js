export default (state=[], action) => {
    switch(action.type) {
        case 'GET_LISTINGS_SUCCESS':
            return action.listings;
        
        case 'CREATE_LISTING':

        // const listing = {
        //     id: Math.random()*10000000000000000,
        //     text: action.payload.text
        // }
            return state.concat(action.listing);

        case 'DELETE_LISTING':
            let listings = state.filter(listing => {
                return listing.id !== action.listing.id  
            })  

        default:
            return state;
    }
}

