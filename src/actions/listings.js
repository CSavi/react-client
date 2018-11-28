import { resetListingForm } from './listingForm';

const API_URL = process.env.REACT_APP_API_URL;


// Action Creators; functions that go to our reducer
const setListings = listings => {
    return {
        type: 'GET_LISTINGS_SUCCESS',
        listings
    }
}

const addListing = listing => {
    return {
        type: 'CREATE_LISTING',
        listing
    }
}

const destroyListing = listing => {
    return {
        type: 'DELETE_LISTING',
        listing
    }
}

// Async Actions
export const getListings = () => {
    return dispatch => {
        return fetch(`${API_URL}/listings`)
            .then(resp => resp.json())
            .then(listings => dispatch(setListings(listings)))
            .catch(error => (error));
    }
}

export const createListing = listing => {
    
    return dispatch => {
        return fetch(`${API_URL}/listings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ listing: listing })
        })
            .then(resp => resp.json())
            .then(listing => {
                dispatch(addListing(listing))
                dispatch(resetListingForm())
            })
            .catch(error => (error));
    }
}

export const deleteListing = listing => {
    return dispatch => {
        return fetch(`${API_URL}/listings/${listing.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(dispatch(destroyListing(listing))
        )
        .catch(error => (error))
    }
}

           