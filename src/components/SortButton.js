import React, { Component } from 'react';

class SortButton extends Component {

    // constructor(props) {
    //     super(props);
        
    //     this.state = {
            
    //     }
    // }

    handleOnClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handleOnClick}>{this.props.sortedCities}</button>
        )
        
    }

}

export default SortButton;