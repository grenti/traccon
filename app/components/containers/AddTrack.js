import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import addTrack from './../../actions'

class AddTrack extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  state = {
    track: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.track) {
      return
    }
    this.props.dispatch(addTrack(this.state.track))
    this.setState({ track: '' })
  }

  handleChange = e => {
    this.setState({ track: e.target.value })
  }

  render() {
    let input

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={node => { input = node }} onChange={this.handleChange} />
          <button type="submit">Add Track</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    track: state.track
  }
}

export default connect(mapStateToProps)(AddTrack)
