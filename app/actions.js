import { ADD_TRACK, TOGGLE_TRACK, SET_VISIBILITY_FILTER } from './actionTypes';

export function addTrack(name) {
  return { type: ADD_TRACK, name };
}

export function toggleTrack(id) {
  return { type: TOGGLE_TRACK, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
