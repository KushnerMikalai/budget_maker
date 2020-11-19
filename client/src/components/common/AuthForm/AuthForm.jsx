import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { userSignIn, userSignUp, selectAuthError } from '../../../store/slices/userSlice';
import styles from './AuthForm.module.css';

export default function AuthForm() {
    const history = useHistory();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authError = useSelector(selectAuthError);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('test1@mail.com');
    const [password, setPassword] = useState('123456');
    const [isLoginForm, toggleForm] = useState(true);

    const onChangeInput = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };

    const onSignUp = async () => {
        await dispatch(userSignUp({ name, email, password }));
    };

    const onLogin = async () => {
        const res = await dispatch(userSignIn({ email, password }));
        console.log(res);
        if (res) {
            history.push('/dashboard');
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (isLoginForm) {
            await onLogin();
        } else {
            await onSignUp();
        }
    };

    const onToggleForm = (e) => {
        e.preventDefault();
        toggleForm(!isLoginForm);
    };

    const errorsList = Array.isArray(authError) ? (
        authError.map((error) => <p key={error.param + error.msg}>{t(`errors.${error.msg}`)}</p>)
    ) : (
        <p>{authError.msg}</p>
    );
    const buttonText = isLoginForm ? 'Sign In' : 'Sign Up';
    const changeFormText = isLoginForm ? 'Don’t have an account?' : 'Already have account?';
    const changeFormButton = isLoginForm ? 'Sign Up' : 'Sign In';

    return (
        <form action="">
            {!isLoginForm && (
                <div className={styles.formItem}>
                    <label className={styles.label} htmlFor="nameAuth">
                        Name:
                        <input
                            className={styles.input}
                            type="text"
                            id="nameAuth"
                            name="name"
                            value={name}
                            onChange={onChangeInput}
                        />
                    </label>
                </div>
            )}
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor="emailAuth">
                    Email:
                    <input
                        className={styles.input}
                        type="email"
                        id="emailAuth"
                        name="email"
                        value={email}
                        onChange={onChangeInput}
                    />
                </label>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor="passwordAuth">
                    Password:
                    <input
                        className={styles.input}
                        type="password"
                        id="passwordAuth"
                        name="password"
                        value={password}
                        onChange={onChangeInput}
                    />
                </label>
            </div>
            <button type="button" className={styles.button} onClick={onSubmit}>
                {buttonText}
            </button>
            <div className={styles.error}>{errorsList}</div>
            <div>
                <span>{changeFormText}</span>
                <button type="button" className={styles.link} onClick={onToggleForm}>
                    {changeFormButton}
                </button>
            </div>
        </form>
    );
}
