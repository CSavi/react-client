import React, { Component } from 'react';

class LikeCounter extends Component {
    state = {
        count: 0
    };

    handleOnClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    // anything in render method is invoked upon page load
    render() {
        return <button onClick={this.handleOnClick}>{this.state.count}</button>
    }
}


export default LikeCounter;