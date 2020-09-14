import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

// import Clock from './components/Clock';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'
import Header from './components/common/Header/Header'
// import TestForm from './components/forms/TestForm/TestForm';
// import Calculator from './components/test/Calculator/Calculator'
import FilterableProductTable from './components/test/ThinkingInReact/FilterableProductTable'

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
            {/* <div className="row">pok</div> */}
            <Switch>
                <Route path="/table">
                    <FilterableProductTable />
                </Route>
                <Route path="/">
                    main
                </Route>
            </Switch>
            <ScrollToTop />
        </div>
    )
}

export default App
