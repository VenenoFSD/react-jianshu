import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writer: [],
  articlePage: 1,
  showScroll: false
});

const initHomeData = (state, action) => state.merge({
  topicList: fromJS(action.topicList),
  articleList: fromJS(action.articleList),
  recommendList: fromJS(action.recommendList),
  writer: fromJS(action.writer)
});

const getMoreList = (state, action) => state.merge({
  articleList: state.get('articleList').concat(fromJS(action.list)),
  articlePage: action.nextPage
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_HOME_DATA:
      return initHomeData(state, action);
    case actionTypes.GET_MORE_LIST:
      return getMoreList(state, action);
    case actionTypes.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}
