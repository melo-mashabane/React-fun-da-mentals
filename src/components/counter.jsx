import React, { Component } from 'react';

class Counter
 extends Component {
    state = {
        count: 0,
        imageUrl: "https://iwalkpaths.co.uk/wordpress/wp-content/uploads/2019/10/iwalk_logo.jpeg"
    }

    render() { 
        return (
        <React.Fragment>
            <img src={this.state.imageUrl} alt="" />
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>
      );
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1>: count;
    }
}
 
export default Counter
;