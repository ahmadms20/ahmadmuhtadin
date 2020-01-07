import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './Navbar.js';
import Jumbo from './Jumbotron.js';
import Form from './Form.js';
import Crd from './Card.js';



ReactDOM.render(<Example />, document.getElementById('root'));
ReactDOM.render(<Jumbo />, document.getElementById('root2'));
ReactDOM.render(<Form />, document.getElementById('root3'));
ReactDOM.render(<Crd />, document.getElementById('root4'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
