import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const getMouseEnterAction = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const getMouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const getChangePageAction = page => ({
  type: actionTypes.CHANGE_PAGE,
  page
});

export const getList = () => {
  return dispatch => {
    axios.get('/api/headerHot.json').then(({ data: { success, data } }) => {
      success && dispatch(getListAction(data));
    });
  }
};

// state转为immutable对象后，它的属性例如list数组也会被转为immutable数组，因此将action传给reducer处理前，先转为immutable数组
const getListAction = list => ({
  type: actionTypes.GET_HOT_SEARCH,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
});