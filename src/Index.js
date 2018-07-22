import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import store from './redux/store'
import App from './App'

const history = createHistory()

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
</Provider>,
 document.getElementById('app'))