import React from 'react';
import logo from '../../../logo.svg';
import styles from './Header.module.css';

function Header({ items }) {
  const menuItems = items.map((item) => {
    return <li key={item.name}>
      <a href={item.href} target={item.target}>{item.name}</a>
    </li>
  });

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <nav>
        <ul>{menuItems}</ul>
      </nav>
    </header>
  )
}

export default Header;