import React from 'react'
import styles from './NameForm.module.css'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Send name: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <div>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          >
            Hi, wdf?
          </textarea>
        </div>

        <input type="submit" value={'Send'} />
      </form>
    )
  }
}

export default NameForm