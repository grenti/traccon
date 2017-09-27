import React from 'react';
import { PropTypes } from 'prop-types'

Track.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

function Track({ onClick, completed, name }) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {name}
    </li>
  )
}

export default Track
