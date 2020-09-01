import React from 'react'
import Dialog from '../../ui/Dialog/Dialog'

class LoginDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="login-dialog">
                <Dialog
                    handleClose={this.props.handleClose}
                    title="Login"
                >
                    <p>content login dialog</p>
                </Dialog>
            </div>
        )
    }
}

export default LoginDialog
