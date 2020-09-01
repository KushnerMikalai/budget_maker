import React from 'react'
import './Header.css'

import LoginDialog from '../LoginDialog/LoginDialog'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginDialog: false,
            shortNameApp: '<budget>'
        }
    }
    menuItems = this.props.items.map((item) => (
        <li className="menu__item" key={item.name}>
            <a
                className="menu__link header-item"
                href={item.href}
                target={item.target}
            >
                {item.name}
            </a>
        </li>
    ))

    handleToggleLoginDialog = () => {
        this.setState({
            showLoginDialog: !this.state.showLoginDialog
        })
    }
    render() {
        const {
            shortNameApp,
            showLoginDialog,
        } = this.state;
        return (
            <header className={"header"}>
                <a
                    className={"logo"}
                    href="/"
                    aria-label={`${shortNameApp}. Go to main page`}
                >
                    {shortNameApp}
                </a>
                <div className={"header__right-content"}>
                    <nav>
                        <ul className={"menu"}>{this.menuItems}</ul>
                    </nav>
                </div>
                <button
                    className="login-button header-item"
                    onClick={this.handleToggleLoginDialog}
                >
                    login
                </button>
                {showLoginDialog &&
                    <LoginDialog
                        handleClose={this.handleToggleLoginDialog}
                    />
                }
            </header>
        )
    }
}

export default Header;
