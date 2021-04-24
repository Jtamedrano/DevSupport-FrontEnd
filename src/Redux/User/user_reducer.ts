import type { Action } from 'redux';

export const userReducer = (
  state = { isAuthenticated: true },
  action: Action,
) => {
  switch (action.type) {
    case 'logout':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
