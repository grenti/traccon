import { combineReducers } from 'redux';
import { ADD_TRACK, TOGGLE_TRACK, SET_VISIBILITY_FILTER, VisibilityFilters } from './actionTypes';

function tracks(state = [], action) {
  switch (action.type) {
    case ADD_TRACK:
      return [
        ...state.tracks,
        {
          name: action.name,
          completed: false
        }
      ];
    case TOGGLE_TRACK:
      return state.tracks.map((track, index) => {
        if (index === action.index) {
          return Object.assign({}, track, { completed: !track.completed });
        }
        return track;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const tracconApp = combineReducers({
  visibilityFilter,
  tracks
});

export default tracconApp;
