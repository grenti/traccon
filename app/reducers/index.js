import { combineReducers } from 'redux';
import tracks from './tracks';
import visibilityFilter from './visibilityFilter';

const tracconApp = combineReducers({
  visibilityFilter,
  tracks
});

export default tracconApp;
