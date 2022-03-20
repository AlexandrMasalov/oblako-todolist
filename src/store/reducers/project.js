import * as types from '../types';

export default function projectReducer(state = {}, actions) {
  const { type, payload } = actions;

  switch (type) {
    case types.GIVE_PROJECT: {
      const { tasks } = payload;
      const newState = { ...state, tasks };
      return newState;
    }
    case types.ADD_NEW_CHECK: {
      console.log(payload);
      return state;
    }

    default: {
      return state;
    }
  }
}
