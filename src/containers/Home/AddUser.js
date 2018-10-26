import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../reducers/user'

class AddUser extends React.Component {
  state = {
    inputName: ''
  }
  onChnageInput = e => {
    this.setState({
      inputName: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault()
    const {inputName} = this.state
    this.props.dispatch(addUser(inputName))
    this.setState({
      inputName: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="userName" placeholder="Please input username"
          autoComplete="off"
          onChange={this.onChnageInput}
          value={this.state.inputName} />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default connect()(AddUser)