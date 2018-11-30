import React from 'react';
import { bindActionCreators } from 'redux';
import * as Listings from '../actions/listings'
import { connect } from 'react-redux';

const ListingCard = ({ listing, action }) => {
    return(
    <div key={listing.id} className="ListingCard">
        <h3>{listing.name}</h3>
        <p>Price: ${listing.price}</p>
        <img className="ListingImage" src={listing.img_url} alt={listing.name}/>
        <p>Street: {listing.street}</p>
        <p>City: {listing.city}</p>
        <p>State: {listing.state}</p>
        <p>Postal Code: {listing.postal_code}</p>
        <p>Description: {listing.description}</p>
        <p>Host: {listing.host}</p>

        {/* When clicked, dispatches an action telling store to delete specific listing */}
        <button className="listingDestroy" onClick={() => action.deleteListing(listing)}>Delete</button>
    </div>
    )}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators(Listings, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(ListingCard)