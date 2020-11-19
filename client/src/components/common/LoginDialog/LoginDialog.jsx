import React, { useState } from 'react'
import Dialog from '../../ui/Dialog/Dialog'

function LoginDialog(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onNameChanged = e => setName(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    return (
        <div className="login-dialog">
            <Dialog
                handleClose={props.handleClose}
                size={'small'}
            >
                <div className={'login-dialog__content'}>
                    <form action="">
                        <div>
                            <label htmlFor="postTitle">Name:</label>
                            <input
                                type="text"
                                id="loginName"
                                name="loginName"
                                value={name}
                                onChange={onNameChanged}
                            />
                        </div>
                        <div>
                            <label htmlFor="postTitle">Email:</label>
                            <input
                                type="email"
                                id="loginEmail"
                                name="loginEmail"
                                value={email}
                                onChange={onEmailChanged}
                            />
                        </div>
                        <div>
                            <label htmlFor="postTitle">Password:</label>
                            <input
                                type="password"
                                id="loginPassword"
                                name="loginPassword"
                                value={password}
                                onChange={onPasswordChanged}
                            />
                        </div>
                    </form>
                </div>
            </Dialog>
        </div>
    )
}

export default LoginDialog
