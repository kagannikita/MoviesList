import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer';
import { BrowserRouter } from 'react-router-dom'
import Main from './Main';
const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    ));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
