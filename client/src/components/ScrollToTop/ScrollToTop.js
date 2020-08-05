import React from 'react';
import styles from './ScrollToTop.module.css';

function ScrollToTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <button className={styles.button} onClick={scrollToTop}>to top</button>
  )
}

export default ScrollToTop;