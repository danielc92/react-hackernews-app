import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ant design style sheet
import 'antd/dist/antd.css';

// redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = () => {
    return {
        testState: ['test-state']
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
    ));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))