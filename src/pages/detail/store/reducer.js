import { fromJS } from "immutable"
import * as actionsTypes from './actionTypes'

const defaultState = fromJS({
  title: '',
  author: {},
  content: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.CHANGE_DETAIL:
      return state.merge({
        title: fromJS(action.title),
        author: fromJS(action.author),
        content: fromJS(action.content)
      });
    default:
      return state
  }
}