import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import ListingCard from '../components/ListingCard';
import ListingForm from './ListingForm';
import { getListings } from '../actions/listings';
import { deleteListing } from '../actions/listings';
import './Listings.css';

// use class for lifecycle event
class Listings extends Component {

    componentDidMount() {
        this.props.getListings()
    }

    render() {                                                                                                  // change to listing.deleteListing?
        const listingNew = this.props.listings.map(listing => <ListingCard key={listing.id} listing={listing} deleteListing={this.props.deleteListing}/>)
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

// const mapDispatchToProps = dispatch => {
//     return {
//         deleteListing: listingText => dispatch({ type: 'DELETE_LISTING', payload: listingText })
//     }
// }


// export default connect(mapStateToProps, { getListings, deleteListing })(Listings);
export default connect(mapStateToProps, { getListings })(Listings);

