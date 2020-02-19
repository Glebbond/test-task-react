import {combineReducers} from 'redux';
import reposList from './reposList';

const rootReducer = combineReducers({
  reposList,
});

export default rootReducer;