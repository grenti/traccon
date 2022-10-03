import { combineReducers } from 'redux';
import tracks from './tracks';
import visibilityFilter from './visibilityFilter';

const tracconApp = combineReducers({
  tracks,
  visibilityFilter
});

export default tracconApp;
