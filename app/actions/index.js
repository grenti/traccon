// import { ADD_TRACK, TOGGLE_TRACK, SET_VISIBILITY_FILTER } from '../constants/actionTypes';

let nextTrackId = 0;
export const addTrack = name => {
  return {
    type: 'ADD_TRACK',
    id: nextTrackId++,
    name
  };
};

export const toggleTrack = id => {
  return {
    type: 'TOGGLE_TRACK',
    id
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
