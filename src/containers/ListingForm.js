import React, { Component } from 'react';
import { connect } from 'react-redux';
import listingFormData from '../reducers/listingFormData';
import { updateListingFormData } from '../actions/listingForm';
import { createListing } from '../actions/listings';

class ListingForm extends Component{
    
    handleOnChange = event => {
        const { name, value } = event.target;
        const currentListingFormData = Object.assign({}, this.props.listingFormData, {
            [name]: value
        })
        this.props.updateListingFormData(currentListingFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        console.log('A')
        this.props.createListing(this.props.listingFormData)
        console.log('B')
    }

   

    render() {
        const { name, price, img_url, street, city, state, postal_code, description, host } = this.props.listingFormData;

        return (
            <div>
                <h1>Add Listing To Inventory</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="name"
                            value={name}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="price"
                            value={price}
                        />
                    </div>
                    <div>
                        <label htmlFor="img_url">Image:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="img_url"
                            value={img_url}
                        />
                    </div>
                    <div>
                        <label htmlFor="street">Street:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="street"
                            value={street}
                        />
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="city"
                            value={city}
                        />
                    </div>
                    <div>
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="state"
                            value={state}
                        />
                    </div>
                    <div>
                        <label htmlFor="postal_code">Postal Code:</label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="postal_code"
                            value={postal_code}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="description"
                            value={description}
                        />
                    </div>
                    <div>
                        <label htmlFor="host">Host:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="host"
                            value={host}
                        />
                    </div><br></br>
                    <button type="submit">Add Listing</button>
                    <br></br>
                    <br></br>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listingFormData: state.listingFormData
    }
}

export default connect(mapStateToProps, { updateListingFormData, createListing })(ListingForm);

