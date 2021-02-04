import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 6},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     };

    render() { 
        return ( 
            <div>

                <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m2">Reset</button>

                {this.state.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        counter={counter}
                    />))}
            </div> );
    }

    handleDelete = (counterId) => {
             const counters = this.state.counters.filter(x => x.id !== counterId);
             this.setState({counters});
     };

     handleReset = () => {
         const counters = this.state.counters.map((x) => {
             x.value = 0; 
             return x;
            });
            this.setState({counters});
     };
}
 
export default Counters;