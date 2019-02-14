import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writer: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writer: fromJS(action.writer)
      });
    default:
      return state;
  }
}