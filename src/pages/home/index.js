import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" className='banner-img'/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount () {
    this.props.getHomeData();
  }
}

const mapDispatch = dispatch => ({
  getHomeData () {
    dispatch(actionCreators.getHomeData());
  }
});

export default connect(null, mapDispatch)(Home)