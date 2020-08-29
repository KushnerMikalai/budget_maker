import React from "react";
import logo from "../../../assets/img/budget.svg";
import "./Header.css";

function Header({ items }) {
    const menuItems = items.map((item) => (
        <li className={"menu__item"} key={item.name}>
            <a
                className={"menu__link"}
                href={item.href}
                target={item.target}
            >
                {item.name}
            </a>
        </li>
    ));

    const nameApp = "Budget Maker";

    return (
        <header className={"header"}>
            <a className={"logo"} href="/" aria-label={"Space Wallet. Go to main page"}>
                <img
                    className={"logo__img"}
                    src={logo}
                    aria-label={"Logo"}
                    alt={nameApp}
                />
                <span className={"logo__text"}>{nameApp}</span>
            </a>
            <div className={"header__rightContent"}>
                <nav>
                    <ul className={"menu"}>{menuItems}</ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
