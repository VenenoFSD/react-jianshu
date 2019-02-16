import { fromJS } from 'immutable'
import * as actionsTypes from './actionTypes'

const defaultState = fromJS({
  title: '',
  author: {},
  content: ''
});

const changeDetail = (state, action) => state.merge({
  title: fromJS(action.title),
  author: fromJS(action.author),
  content: fromJS(action.content)
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.CHANGE_DETAIL:
      return changeDetail(state, action);
    default:
      return state;
  }
}