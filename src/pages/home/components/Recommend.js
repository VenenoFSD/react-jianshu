import React from 'react'
import { RecommendItem } from '../style'
import { connect } from 'react-redux'

const Recommend = props => {
  return (
    <ul>{ props.recommendList.map(item => <RecommendItem key={ item.id } imgUrl={ item.imgUrl }/>) }</ul>
  )
};

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList']).toJS()
});

export default connect(mapState, null)(Recommend)