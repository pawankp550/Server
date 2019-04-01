import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store = {store}>
        < App/>
    </Provider>,
    document.getElementById('root')
    );

    // console.log('stripe key', process.env.REACT_APP_STRIPE_KEY);
    // console.log('environment', process.env.NODE_ENV);
