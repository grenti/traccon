import React, { PropTypes } from 'react';

const Track = ({ onClick, completed, name }) => {
  (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none' }}
    >
      {name}
    </li>
  );
};

Track.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default Track;
