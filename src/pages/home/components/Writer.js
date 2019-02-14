import React from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem } from '../style'

const Writer = props => {
  return (
    <WriterWrapper>
      <h4>推荐作者</h4>
      <ul>
        {
          props.writer.map(item => (
            <WriterItem key={item.id}>
              <img src={item.avatar} alt={item.name}/>
              <div className='author'>
                <p className='name'>{item.name}</p>
                <p className='detail'>写了{item.write}k字 · {item.like}人喜欢</p>
              </div>
              <p className='watch'>+关注</p>
            </WriterItem>
          ))
        }
      </ul>
    </WriterWrapper>
  )
};

const mapState = state => ({
  writer: state.getIn(['home', 'writer']).toJS()
});

export default connect(mapState, null)(Writer)