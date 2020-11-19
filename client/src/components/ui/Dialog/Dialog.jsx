import React from 'react'
import './Dialog.css'

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    titleContent = this.props.title ? <div className="dialog__header">{this.props.title}</div> : null;

    closeIcon =
        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
            <path fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" vectorEffect="non-scaling-stroke" d="M2 2l14 14M16 2L2 16"/>
        </svg>

    clickEsc = (e) => {
        const evt = e || window.event;
        if (evt.keyCode === 27) {
            this.props.handleClose();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.clickEsc, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.clickEsc, false);
    }

    render() {
        return (
            <div className="dialog">
                <div className="dialog__wrap">
                    <div
                        className="dialog__background"
                        onClick={this.props.handleClose}
                    />
                    <div className={`dialog__content ${this.props.size}`}>
                        <button
                            className="dialog__close"
                            type="button"
                            onClick={this.props.handleClose}
                        >
                            {this.closeIcon}
                        </button>
                        {this.titleContent}
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog
