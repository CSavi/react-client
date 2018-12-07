import React from 'react';
import { connect } from 'react-redux';
import { getListings, deleteListing } from '../actions/listings';


const Listing = props => {
    
    return (
        <div>
            <span>Listing: {props.listing.text}</span>
            <button onClick={() =>
                props.deleteListing(props.listing.id)}>DELETE</button>
        </div>
    )
}
// class Listing extends Component {
    // componentDidMount(){
    //     this.props.getListings();
    // }


// const mapStateToProps = (state, listingProps) => {
//     let listing_id = this.listingProps.match.params.listing_id;
//     return {
//         listing: state.listings.find(listing => listing.id === listing_id)
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return({
        deleteListing: (listing) => {dispatch(deleteListing(listing))}, 
        getListings: () => {dispatch(getListings())}
    })
}

export default connect(null, mapDispatchToProps)(Listing);
