import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getHomeData = () => {
  return dispatch => {
    axios.get('/api/home.json').then(({data: {success, data}}) => {
      success && dispatch(getHomeDataAction(data));
    });
  }
};

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