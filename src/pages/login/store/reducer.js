import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  loginStatus: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_STATUS:
      return state.set('loginStatus', action.status);
    default:
      return state;
  }
}