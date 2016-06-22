import { ADD_TRACK, TOGGLE_TRACK } from '../constants/actionTypes';

const track = (state, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        id: action.id,
        name: action.name,
        completed: false
      };
    case TOGGLE_TRACK:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

const tracks = (state = [], action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [
        ...state,
        track(undefined, action)
      ];
    case TOGGLE_TRACK:
      return state.map(track => track(track, action));
    default:
      return state;
  }
};

export default tracks;
