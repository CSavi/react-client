import React from 'react';

const ListingCard = ({ listing }) => {
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
        
        {/* <span>{listing.text}</span> */}
        {/* <button className="listingDestroy" onClick={() => listing.deleteListing(listing)}>Delete</button> */}
    </div>
    )}

export default ListingCard;