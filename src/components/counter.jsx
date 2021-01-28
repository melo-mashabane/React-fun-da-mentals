import React, { Component } from 'react';

class Counter
 extends Component {
  
    state = { count: this.props.value};
    
    render() { 

        console.log('propies', this.props )

        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={ () => this.handleIncrement(product)}
                className="btn btn-secondary btn-sm">Increment
            </button>
        </div>
      );
    }

    // Experimental: Arrow function inherint the bind word instead of
    // using constructor and rebind every event handler manually.
    handleIncrement = product => {
        console.log(product);
        this.setState({count : this.state.count + 1});
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1>: count;
    }
}
 
export default Counter
;