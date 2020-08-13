import React from 'react';
import Clock from './components/Clock';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/common/Header/Header';
import NameForm from './components/NameForm/NameForm';

const menu = [
  { href: '/', name: 'home', target: null },
  { href: 'google.com', name: 'google', target: '_blunk' },
  { href: 'https://github.com/KushnerMikalai', name: 'github', target: '_blunk' },
]

function App() {
  return (
    <div className="App">
      <Header items={menu} />
      <NameForm />
      <Clock />
      <div className="row">pok</div>
      <ScrollToTop />
    </div>
  );
}

export default App;
