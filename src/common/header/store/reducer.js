import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

// immutable对象：不可变对象
// 访问该对象属性：.get('key')
const defaultState = fromJS({
  showList: false,
  hotSearch: [],
  curPage: 1,
  totalPage: 1
});

const getHotSearch = (state, action) => state.merge({
  hotSearch: action.list,
  totalPage: action.totalPage
});

// immutable对象.set('key', value)：结合两个参数返回一个新的immutable对象
// 多个set：state.merge({})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOT_SEARCH:
      return getHotSearch(state, action);
    case actionTypes.MOUSE_ENTER:
      return state.set('showList', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('showList', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('curPage', action.page);
    default:
      return state;
  }
}

// 为什么引入immutable.js：state不能被修改，为安全起见，将其转为immutable对象