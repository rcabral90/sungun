import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// actions.js

export const setLoginPending = (isLoginPending) => ({
    type: 'SET_LOGIN_PENDING',
    isLoginPending
})

export const setLoginSuccess = (isLoginSuccess) => ({
  type: 'SET_LOGIN_SUCCESS',
  isLoginSuccess
})

export const setLoginError = (loginError) => ({
  type: 'SET_LOGIN_ERROR',
  loginError
})

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export function callLogin (email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

// reducers.js
export const login = (state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_LOGIN_PENDING':
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case 'SET_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case 'SET_LOGIN_ERROR':
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}

export const reducers = combineReducers({ login });

// store.js
export function configureStore(initialState = {}) {  
  const store = createStore(reducers, initialState, applyMiddleware(thunk, logger));
  return store;
};

export const store = configureStore();  