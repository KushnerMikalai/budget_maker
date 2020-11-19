import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './assets/style/index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store/store';
import * as serviceWorker from './serviceWorker';
import {getCookie} from './utils/helpers/cookie';
import {setTokenClient} from './api/client';
import {
    getUserProfile,
    setLoadingProfile,
    setLoginStatus,
} from './store/slices/userSlice'

import './utils/lang/i18n';

const token = getCookie('session_id');
if (token) {
    setTokenClient(token);
    store.dispatch(getUserProfile());
} else {
    store.dispatch(setLoginStatus(false))
    store.dispatch(setLoadingProfile(false))
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
