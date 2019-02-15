import * as actionTypes from './actionTypes'
import axios from 'axios'

export const changeDetail = id => {
  return dispatch => {
    axios.get(`/api/detail.json?id=${id}`).then(({data: {success, data}}) => {
      success && dispatch(getChangeDetailAction(data));
    });
  }
};

const getChangeDetailAction = data => {
  const { title, author, content } = data;
  return {
    type: actionTypes.CHANGE_DETAIL,
    title,
    author,
    content
  }
};