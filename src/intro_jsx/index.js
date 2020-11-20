import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const name = 'Melo dev';
const element_old = <h1>Yo! {name}</h1>

function formatName(user) {
    return user.firstName + ' ' +
    user.lastname;
}

const userName = {
    firstName: 'Ike',
    lastname: 'Simmons'
};

const element = (
    <h1>
        Heloo, {formatName(userName)}
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
)
;