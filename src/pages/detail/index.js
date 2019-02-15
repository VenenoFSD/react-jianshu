import React, { Component } from 'react'
import { DetailWrapper, Author, Title, Content, Watch } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component {

  render () {
    const { title, author: { name, avatar, time, words, read, comment, like }, content } = this.props;
    return (
      <DetailWrapper>
        <Title>{title}</Title>
        <Author>
          <img src={avatar} alt=""/>
          <div className="info">
            <p className="name">
              {name}
              <Watch>+关注</Watch>
            </p>
            <p className="author-detail">
              <span>{time}</span>
              <span>字数 {words}</span>
              <span>阅读 {read}</span>
              <span>评论 {comment}</span>
              <span>喜欢 {like}</span>
            </p>
          </div>
        </Author>
        <Content dangerouslySetInnerHTML={{__html: content}}/>
      </DetailWrapper>
    );
  }

  componentDidMount () {
    this.props.changeDetail(this.props.match.params.id);
  }

}

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  author: state.getIn(['detail', 'author']).toJS(),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = dispatch => ({
  changeDetail (id) {
    dispatch(actionCreators.changeDetail(id));
  }
});

export default connect(mapState, mapDispatch)(Detail)