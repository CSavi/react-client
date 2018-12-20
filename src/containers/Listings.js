import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import ListingCard from '../components/ListingCard';
import ListingForm from './ListingForm';
//import SortButton from '../components/SortButton';
import { getListings } from '../actions/listings';
import './Listings.css';

// use class for lifecycle event
class Listings extends Component {

    componentDidMount() {
        this.props.getListings()
    }

    render() {
        const listingNew = this.props.listings.sort(function(a, b){ return b.count - a.count}).map(listing => <ListingCard key={listing.id} listing={listing} deleteListing={this.props.deleteListing}/>)
        // const sortedCities = this.props.listings.sort(function(a, b) {
        //     let nameA = a.city.toUpperCase();
        //     let nameB = b.city.toUpperCase();
        //     if (nameA < nameB) {
        //         return -1;
        //     }
        //     if (nameA > nameB) {
        //         return 1;
        //     }
        //     return 0;
        // })

        return (
            <div className="ListingContainer">
                <h1>Listings</h1>
                <button onClick={() => {this.sortedCities()}}></button>
                {listingNew}
                {/* <SortButton sortedCities={sortedCities} /> */}
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


// export default connect(mapStateToProps, { getListings, deleteListing })(Listings);
export default connect(mapStateToProps, { getListings })(Listings);

