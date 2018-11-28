import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import ListingCard from '../components/ListingCard';
import ListingForm from './ListingForm';
import { getListings } from '../actions/listings';
import './Listings.css';

// use class for lifecycle event
class Listings extends Component {

    componentDidMount() {
        this.props.getListings()
    }

    render() {
        const listingNew = this.props.listings.map(listing => <ListingCard key={listing.id} listing={listing}/>)
        return (
            <div className="ListingContainer">
            <h1>Listings</h1>
            {listingNew}
            <ListingForm />
        </div>
        )
    }
};

const mapStateToProps = (state) => {
    return ({
        listings: state.listings
    })
}

export default connect(mapStateToProps, { getListings })(Listings);


