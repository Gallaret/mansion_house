import 'babel-polyfill';
import './css/site.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import { ApplicationState } from './store';
import configureStore from './configureStore';

const initialState = (window as any).initialReduxState as ApplicationState;
const history = syncHistoryWithStore(browserHistory, store);

var store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <Router history={ history } children={ routes } />
    </Provider>,
    document.getElementById("react-app")
);