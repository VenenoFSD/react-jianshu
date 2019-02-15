import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {

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
        { this.props.showScroll ? <BackToTop onClick={ this.handleScroll }/> : null }
      </HomeWrapper>
    );
  }

  componentDidMount () {
    this.props.getHomeData();
    this.bindScrollEvent();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeShow);
  }

  handleScroll () {
    window.scrollTo(0, 0);
  }

  bindScrollEvent () {
    window.addEventListener('scroll', this.debounce(this.props.changeShow, 200));
  }

  debounce (func, delay) {
    let timer = null;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  }

}

const mapState = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = dispatch => ({
  getHomeData () {
    dispatch(actionCreators.getHomeData());
  },
  changeShow () {
    dispatch(actionCreators.getTopShowAction(document.documentElement.scrollTop > 200));
  }
});

export default connect(mapState, mapDispatch)(Home)