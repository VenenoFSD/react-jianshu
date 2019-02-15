import React from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

const Topic = props => {
  return (
    <TopicWrapper>
      {
        props.topicList.map(item => (
          <TopicItem key={ item.id }>
            <img src={ item.imgUrl } alt={ item.title }/>
            <span>{ item.title }</span>
          </TopicItem>
        ))
      }
    </TopicWrapper>
  );
};

const mapState = state => ({
  topicList: state.getIn(['home', 'topicList']).toJS()
});

export default connect(mapState, null)(Topic)