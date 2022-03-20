import { combineReducers } from 'redux';
import projectReducer from './project';

const reducerProject = {
  tasks: projectReducer,
};

const rootReducer = combineReducers(reducerProject);

export default rootReducer;
