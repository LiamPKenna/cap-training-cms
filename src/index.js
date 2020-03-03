import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
// import { db } from './actions';

// db.ref('/lessons').once('value').then(snap => console.log(snap.val()));

// import links from './mockData/mockLinks';
// db.ref('/links').set(links);

const store = createStore(reducer, applyMiddleware(thunkMiddleware));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
