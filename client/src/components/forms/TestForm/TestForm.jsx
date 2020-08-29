import React from 'react'
import './TestForm.css'

class TestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
            town: '',
            townsList: {
                la: 'Los Angeles',
                sd: 'San Diego',
                ph: 'Phoenix',
                slc: 'Salt Lake City',
                dn: 'Denver',
            },
        }
    }

    handleSimpleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        const { name, comment, town } = this.state;
        if (name && comment) {
            alert(`
                name: ${this.state.name}
                comment: ${this.state.comment}
                town: ${this.state.townsList[town]}
            `);
        } else {
            console.log('fuuu');
        }

        e.preventDefault()
    }

    optionList(list) {
        return Object.keys(list).map(key => <option key={key} value={key}>{list[key]}</option>)
    }

    render() {
        return (
            <form
                className='test-form'
                onSubmit={this.handleSubmit}
            >
                <div className='test-form__item'>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleSimpleChange}
                        />
                    </label>
                </div>
                <div className='test-form__item'>
                    <label>
                        Comment:
                        <textarea
                            name="comment"
                            value={this.state.comment}
                            onChange={this.handleSimpleChange}
                        />
                    </label>
                </div>
                <div className="test-form__item">
                    <label htmlFor="">
                        Town:
                        <select
                            value={this.state.town}
                            name="town"
                            onChange={this.handleSimpleChange}
                        >
                            {this.optionList(this.state.townsList)}
                        </select>
                    </label>
                </div>
                <input type="submit" value={"Send"} />
            </form>
        );
    }
}

export default TestForm;
