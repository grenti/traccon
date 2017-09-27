import { connect } from 'react-redux';
import { toggleTrack } from '../../actions';
import TrackList from '../TrackList';

const getVisibleTracks = (tracks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tracks;
    case 'SHOW_COMPLETED':
      return tracks.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return tracks.filter(t => !t.completed);
    default:
      return [];
  }
};

const mapStateToProps = state => {
  return {
    tracks: getVisibleTracks(state.tracks, state.visbilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTrackClick: id => {
      dispatch(toggleTrack(id));
    }
  };
};

const VisibleTrackList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);

export default VisibleTrackList;
