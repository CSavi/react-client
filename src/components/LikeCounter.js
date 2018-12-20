import React, { Component } from 'react';
//import { connect } from 'react-redux';
import * as Listings from '../actions/listings'

class LikeCounter extends Component {
    // constructor(props){
    //         super(props);
    //             this.listing = props.listing;         
    // }

    state = {
        count: 0
    };

    handleOnClick = () => {
        this.setState((prevState, { count }) => ({
            count: prevState.count + 1
        }));
    };

    render() {
        return <button onClick={() => this.handleOnClick()}>{this.state.count}</button>
    }
}


export default LikeCounter;