import React from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
        >
            to top
        </button>
    )
}

export default ScrollToTop;
