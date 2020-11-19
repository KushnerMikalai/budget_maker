import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const menu = [
    { href: '/', name: 'home', target: null, route: true },
    { href: '/login', name: 'login', target: null, route: true },
    { href: '/signup', name: 'signup', target: null, route: true },
    // { href: 'google.com', name: 'google', target: '_blunk' },
    // { href: 'https://github.com/KushnerMikalai', name: 'github', target: '_blunk' },
];

// const appMenu = [
//     { href: '/dashboard', name: 'dashboard', target: null, route: true },
// ]

export default function Header() {
    const menuItems = menu.map((item) => (
        <li className="menu__item" key={item.name}>
            {item.route ? (
                <Link
                    to={item.href}
                    className="menu__link header-item"
                >
                    {item.name}
                </Link>
            ) : (
                <a
                    className="menu__link header-item"
                    href={item.href}
                    target={item.target}
                >
                    {item.name}
                </a>
            )}
        </li>
    ));

    return (
        <header className={'header'}>
            <a
                className="logo"
                href="/"
                aria-label={'Go to main page'}
                title={'Budge maker'}
            >
                BM
            </a>
            <div className={'header__right-content'}>
                <nav>
                    <ul className={'menu'}>{menuItems}</ul>
                    <ul></ul>
                </nav>
            </div>
        </header>
    );
}
