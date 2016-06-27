import React, { PropTypes } from 'react';
import Track from './Track';

const TrackList = ({ tracks, onTrackClick }) => (
  <ul>
    {tracks.map(track =>
      <Track
        key={track.id}
        {...track}
        onClick={() => onTrackClick(track.id)}
      />
    )}
  </ul>
);

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTrackClick: PropTypes.func.isRequired
};

export default TrackList;
