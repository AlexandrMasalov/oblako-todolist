/* eslint-disable import/prefer-default-export */
import * as types from '../types';

export const addProject = () => ({
  type: types.ADD_PROJECT,
});

export const giveProject = (payload) => ({
  type: types.GIVE_PROJECT,
  payload,
});

export const newCheck = (payload) => ({
  type: types.NEW_CHECK,
  payload,
});
export const addNewCheck = (payload) => ({
  type: types.ADD_NEW_CHECK,
  payload,
});

export const newEvent = (payload) => ({
  type: types.NEW_EVENT,
  payload,
});
