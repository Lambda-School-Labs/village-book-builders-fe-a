// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import { combineReducers } from 'redux';
import headmasterReducer from './headmasterReducer.js';
import authReducer from './authReducer';
import teacherReducer from './teacherReducer';
import programReducer from './programReducer';
import menteeReducer from './menteeReducer';
import resourceReducer from './resourceReducer';
import mentorReducer from './mentorReducer';

export default combineReducers({
  headmasterReducer,
  authReducer,
  teacherReducer,
  programReducer,
  menteeReducer,
  resourceReducer,
  mentorReducer,
});
