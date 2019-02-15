import axios from 'axios'
import * as actionTypes from './actionTypes'

export const login = (account, password) => {
  return dispatch => {
    axios.get(`/api/login.json?acc=${account}&pwd=${password}`).then(({ data: {success, data} }) => {
      success && dispatch(getLoginAction(data));
    });
  }
};

export const getLogoutAction = () => ({
  type: actionTypes.CHANGE_LOGIN_STATUS,
  status: false
});

const getLoginAction = status => ({
  type: actionTypes.CHANGE_LOGIN_STATUS,
  status
});