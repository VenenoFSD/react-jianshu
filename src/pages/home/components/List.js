import React from 'react'
import { ListItem } from '../style'
import { connect } from 'react-redux'

const List = props => {
  return (
    <ul>
      {
        props.articleList.map(item => (
          <ListItem key={item.id}>
            <div className='info'>
              <h3 className='title'>{item.title}</h3>
              <p className='text'>{item.contain}</p>
            </div>
            <img src={item.imgUrl} alt={item.title} className='article-img'/>
          </ListItem>
        ))
      }
    </ul>
  );
};

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList']).toJS()
});

export default connect(mapState, null)(List)