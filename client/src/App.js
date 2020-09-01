import React from 'react';
import './App.css';

// import Clock from './components/Clock';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';
import Header from './components/common/Header/Header';
// import TestForm from './components/forms/TestForm/TestForm';
// import Calculator from './components/test/Calculator/Calculator'

const menu = [
  { href: '/', name: 'home', target: null },
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
      <ScrollToTop />
    </div>
  )
}

export default App
