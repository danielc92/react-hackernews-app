import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ant design style sheet
import 'antd/dist/antd.css';

// router
import { HashRouter } from 'react-router-dom';

// redux and redux middleware
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(<Provider store={store}><HashRouter><App/></HashRouter></Provider>, document.getElementById('root'))