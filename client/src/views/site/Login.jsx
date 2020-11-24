import React from 'react'
import styles from './Login.module.css'

import LoginForm from '../../components/forms/LoginForm/LoginForm'

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <div className={styles.containerForm}>
                <LoginForm />
            </div>
        </div>
    )
}
