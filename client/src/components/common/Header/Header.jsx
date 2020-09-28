import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Header.css'

import LoginDialog from '../LoginDialog/LoginDialog'
import {
    fetchNotifications,
    selectAllNotifications
} from '../../test/notifications/notificationsSlice'

export default function Header(props) {
    const dispatch = useDispatch()
    const notifications = useSelector(selectAllNotifications)
    const numUnreadNotifications = notifications.filter(n => !n.read).length
    // omit component contents
    let unreadNotificationsBadge

    if (numUnreadNotifications > 0) {
        unreadNotificationsBadge = (
            <span className="badge">{numUnreadNotifications}</span>
        )
    }

    const fetchNewNotifications = () => {
        dispatch(fetchNotifications())
    }
    const [showLoginDialog, setShowLoginDialog] = useState(false)

    const menuItems = props.items.map((item) => (
        <li className="menu__item" key={item.name}>
            {item.route ?
                <Link
                    to={item.href}
                    className="menu__link header-item"
                >
                    {item.name}
                </Link>
                :
                <a
                    className="menu__link header-item"
                    href={item.href}
                    target={item.target}
                >
                    {item.name}
                </a>
            }
        </li>
    ))

    const handleToggleLoginDialog = () => {
        setShowLoginDialog(!showLoginDialog)
    }

    return (
        <header className={"header"}>
            <a
                className="logo"
                href="/"
                aria-label={'BUDGET MAKER. Go to main page'}
            >
                <i className="logo__icon material-icons notranslate" translate="no">layers</i>
            </a>
            <div className={"header__right-content"}>
                <nav>
                    <ul className={"menu"}>
                        {menuItems}
                        <li className="menu__item">
                            <Link className="menu__link header-item" to="/notifications">
                                Notifications {unreadNotificationsBadge}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <button
                className="login-button header-item"
                onClick={handleToggleLoginDialog}
            >
                login
            </button>
            <button className="login-button header-item" onClick={fetchNewNotifications}>
                Refresh Notifications
            </button>
            {showLoginDialog &&
                <LoginDialog
                    handleClose={handleToggleLoginDialog}
                />
            }
        </header>
    )
}
