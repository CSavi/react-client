import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListings, deleteListing } from '../actions/listings';
import ListingCard from '../components/ListingCard';

class Listing extends Component {
    componentDidMount(){
        this.props.getListings();
    }

    render() {
        let listing_id = this.props.match.params.listing_id;
        let listing = this.props.listing; 
        let listingConditional = () => {
            if (listing) {
                return <ListingCard listing={listing} key={listing.id} delete={this.props.deleteListing} showButtons="true"/>
            } else {
                return (
                    <div>
                        <p>Unidentified Listing</p>
                    </div>)
            }
        }
    

        return (
            <div>
                <h1>Listing: {this.props.listing_id}</h1>
                <div>
                    {listingConditional()}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, listingProps) => {
    let listing_id = this.listingProps.match.params.listing_id;
    return {
        listing: state.listings.find(listing => listing.id === listing_id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        deleteListing: (listing) => {dispatch(deleteListing(listing))}, 
        getListings: () => {dispatch(getListings())}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
