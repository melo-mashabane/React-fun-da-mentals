import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {

    const element = (
        <div>
            <h1>Hello, World</h1>
            <h2>Date is {new Date().toLocaleTimeString()}.</h2>
        </div>
        )
    
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);