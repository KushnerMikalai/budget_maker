import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Nav from './components/Header/AppNav';

const menu = [
  {href: '/', name: 'home', target: null},
  {href: 'google.com', name: 'google', target: '_blunk'},
  {href: 'https://github.com/KushnerMikalai', name: 'github', target: '_blunk'},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav items={menu}/>
      </header>
      <Clock />

      <div className="empty-container" />
      <ScrollToTop />
      {/*<label htmlFor="formelement">Your favourite form element?</label>*/}
      {/*<input list="formelements" id="formelement" name="formelement"/>*/}
      {/*<datalist id="formelements">*/}
      {/*  <option value="input"/>*/}
      {/*  <option value="button"/>*/}
      {/*  <option value="select"/>*/}
      {/*  <option value="datalist" />*/}
      {/*  <option value="legend" />*/}
      {/*</datalist>*/}
    </div>
  );
}

export default App;
