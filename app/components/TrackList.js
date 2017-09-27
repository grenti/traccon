import React from 'react';
import { PropTypes } from 'prop-types'
import Track from './Track'

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTrackClick: PropTypes.func.isRequired
}

// TrackList.defaultProps = {
//   tracks: [{
//     id: 0,
//     completed: false,
//     name: ''
//   }],
//   onTrackClick: () => { }
// }

function TrackList({ tracks, onTrackClick }) {
  return (
    <ul>
      {tracks.map(track =>
        (<Track
          key={track.id}
          {...track}
          onClick={() => onTrackClick(track.id)}
        />)
      )}
    </ul>
  )
}

export default TrackList
