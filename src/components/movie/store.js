import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterApp from './reducers';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
    combineReducers({
        global: counterApp,
        routing: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__()
);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store = {store}>
        <Router history={history}>
            <Route path ='/' component={MainComponent}>
            </Route>
        </Router>
    </Provider>
);