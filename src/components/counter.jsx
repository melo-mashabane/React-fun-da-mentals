import React, { Component } from 'react';

class Counter
 extends Component {

    state = {
        count: 0,
        imageUrl: "https://iwalkpaths.co.uk/wordpress/wp-content/uploads/2019/10/iwalk_logo.jpeg",
        // Swap them around to test.
        // tags: ["tag1", "tag2", "tag3"]
        tags: []
    };

    render() { 
        return (
        <React.Fragment>
            <img src={this.state.imageUrl} alt="" />
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={ () => this.handleIncrement({id: 1})}
                className="btn btn-secondary btn-sm">Increment
            </button>
            <div>
                {this.state.tags.length === 0 && "Please create new tag!"}
                {this.renderTags()}
            </div>
        </React.Fragment>
      );
    }

    // Experimental: Arrow function inherint the bind word instead of
    // using constructor and rebind every event handler manually.
    handleIncrement = product => {
        console.log(product);
        this.setState({count : this.state.count + 1});
    };

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

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