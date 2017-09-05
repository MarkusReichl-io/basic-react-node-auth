import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signinUser = (user, history) => async dispatch => {
  try {
    const res = await axios.post('/api/signin', user);
    dispatch({ type: AUTH_USER });
    dispatch(loginUser(res.data.token, history));
  } catch (e) {
    dispatch(authError('res.data.error'));
  }
};

export const signupUser = (user, history) => async dispatch => {
  try {
    const res = await axios.post('/api/signup', user);
    dispatch({ type: AUTH_USER });
    dispatch(loginUser(res.data.token, history));
  } catch (e) {
    dispatch(authError('res.data.error'));
  }
};

export const loginUser = (token, history) => {
  localStorage.setItem('token', token);
  history.push('/createTrip');
};

export const signoutUser = () => async dispatch => {
  dispatch({ type: UNAUTH_USER });
  localStorage.removeItem('token');
};

export const authError = error => {
  return { type: AUTH_ERROR, payload: error };
};
