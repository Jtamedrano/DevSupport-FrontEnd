import type { Action } from 'redux';

export const userReducer = (
  state = { isAuthenticated: true },
  action: Action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
