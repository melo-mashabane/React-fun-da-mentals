import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
Rendering a Component
**/

// function Welcome(props) {
// return <h1>Hiyyyyaaaah, {props.name}</h1>;
// }

// const element = <Welcome name = "Melo" />;
// ReactDOM.render(
//     element,
//     document.getElementById('root'));

/*
Composing a Component
**/

// function Welcome(props) {
// return <h1>Hiyyyyaaaah, {props.name}</h1>;
// }

// function App() {
//     return (
//         <div>
//             <Welcome name='Melo' />
//             <Welcome name='Kel' />
//             <Welcome name='Royler' />
//         </div>
//     );
// }

// ReactDOM.render(<App />,
//     document.getElementById('root'));

/*
Extracting a Component
**/

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className = "Comment">
            <div className = "UserInfo">
                <img
                 className = "Avatar"
                 src = {props.author.avatarUrl}
                 alt = {props.author.name}
                />

                <div className = "UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className = "Comment-text">{props.text}</div>
            <div className = "Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: "Maaan I trust you good with React!",
    author: {
        name: "Hello Kit Kat",
        avatarUrl: 'https://iwalkpaths.co.uk/wordpress/wp-content/uploads/2019/10/iwalk_logo.jpeg',
    },
};

ReactDOM.render(
    <Comment
     date = {comment.date}
     text = {comment.text}
     author = {comment.author}
    />,
    document.getElementById('root')
);

/*
Extracting a Component Pt.2
**/

function Avatar(props) {
    return (
        <img className = "Avatar"
            src = {props.user.avatarUrl}
            alt = {props.user.name}
        />
    );
}
