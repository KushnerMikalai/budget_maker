import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './assets/style/index.scss'
import App from './App'
import store from './store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { fetchUsers } from './store/slices/usersSlice'

import './api/server'

store.dispatch(fetchUsers())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
