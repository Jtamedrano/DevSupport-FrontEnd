import React from 'react';
import { useSelector } from 'react-redux';

export const getSelectors = () => {
  const state = useSelector(
    (state: { user: { isAuthenticated: boolean } }) => state,
  );

  return state;
};
