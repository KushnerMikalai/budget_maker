import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './views/landing/main'

import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'
import Header from './components/common/Header/Header'
import FilterableProductTable from './components/test/ThinkingInReact/FilterableProductTable'
// import Clock from './components/Clock';
// import TestForm from './components/forms/TestForm/TestForm';
// import Calculator from './components/test/Calculator/Calculator'

const menu = [
    { href: '/', name: 'home', target: null, route: true },
    { href: '/table', name: 'table', target: null, route: true },
    { href: 'google.com', name: 'google', target: '_blunk' },
    { href: 'https://github.com/KushnerMikalai', name: 'github', target: '_blunk' },
]

function App() {
    return (
        <div className="App">
            <Header items={menu} />
            {/* <Calculator /> */}
            {/* <TestForm /> */}
            {/* <Clock /> */}
            <Switch>
                <Route path="/table">
                    <FilterableProductTable />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
            <ScrollToTop />
        </div>
    )
}

export default App
