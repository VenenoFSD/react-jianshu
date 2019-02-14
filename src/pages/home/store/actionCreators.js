import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getHomeData = () => {
  return dispatch => {
    axios.get('/api/home.json').then(({data: {success, data}}) => {
      success && dispatch(getHomeDataAction(data));
    });
  }
};

export const getMoreList = page => {
  return dispatch => {
    axios.get(`/api/homeList.json?page=${page}`).then(({data: {success, data}}) => {
      success && dispatch(getMoreListAction(data, page + 1));
    });
  }
};

export const getTopShowAction = show => ({
  type: actionTypes.TOGGLE_SCROLL_SHOW,
  show
});

const getHomeDataAction = data => {
  const { topicList, articleList, recommendList, writer } = data;
  return {
    type: actionTypes.INIT_HOME_DATA,
    topicList,
    articleList,
    recommendList,
    writer
  }
};

const getMoreListAction = (list, nextPage) => ({
  type: actionTypes.GET_MORE_LIST,
  list,
  nextPage
});