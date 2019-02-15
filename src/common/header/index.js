import React, { Component } from 'react'
import { HeaderWrapper, HeaderContainer, Logo, Nav, NavItem, SearchWrapper, NavSearch, HotSearch, HotTitle, Change, HotItem, Addition, Button } from "./style"
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

class Header extends Component {

  render () {
    const { showList, hotSearch, curPage, totalPage, loginStatus, handleInputFocus, handleMouseEnter, handleMouseLeave, handleChangePage, logout } = this.props;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Link to='/'>
            <Logo/>
          </Link>
          <Nav>
            <div>
              <Link to='/'>
                <NavItem className='active'>首页</NavItem>
              </Link>
              <NavItem>下载App</NavItem>
              <SearchWrapper>
                <NavSearch onFocus={ () => { handleInputFocus(hotSearch) } }/>
                <i className='iconfont search-icon'>&#xe62f;</i>
                <HotSearch
                  className={ showList ? 'hot-search show' : 'hot-search'}
                  onMouseEnter={ handleMouseEnter }
                  onMouseLeave={ handleMouseLeave }>
                  <HotTitle>
                    <span>热门搜索</span>
                    <Change onClick={ () => { handleChangePage(curPage, totalPage, this.changeIcon) } }>
                      <i className='iconfont' ref={icon => { this.changeIcon = icon }}>&#xe97d;</i>
                      换一批
                    </Change>
                  </HotTitle>
                  <ul>{ hotSearch.slice((curPage - 1) * 10, curPage * 10).map(item => <HotItem key={item}>{item}</HotItem>) }</ul>
                </HotSearch>
              </SearchWrapper>
            </div>
            <div>
              <NavItem>Aa</NavItem>
              { loginStatus ? <NavItem onClick={ logout }>退出</NavItem> : <Link to='/login'><NavItem>登录</NavItem></Link> }
            </div>
          </Nav>
          <Addition>
            <Button>注册</Button>
            <Link to='/write'>
              <Button className='article'>
                <i className='iconfont'>&#xe616;</i>
                写文章
              </Button>
            </Link>
          </Addition>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }

}

const mapStateToProps = state => ({
  curPage: state.getIn(['header', 'curPage']),
  totalPage: state.getIn(['header', 'totalPage']),
  showList: state.getIn(['header', 'showList']),
  hotSearch: state.getIn(['header', 'hotSearch']),
  loginStatus: state.getIn(['login', 'loginStatus'])
});

const mapDispatchToProps = dispatch => ({
  handleInputFocus (list) {
    !list.size && dispatch(actionCreators.getList());
  },
  handleMouseEnter () {
    dispatch(actionCreators.getMouseEnterAction());
  },
  handleMouseLeave () {
    dispatch(actionCreators.getMouseLeaveAction());
  },
  handleChangePage (curPage, totalPage, icon) {
    let angle = icon.style.transform.replace(/[^0-9]/ig, '');
    angle = angle ? parseInt(angle) + 720 : 720;
    icon.style.transform = `rotate(${angle}deg)`;
    curPage < totalPage ? dispatch(actionCreators.getChangePageAction(++curPage)) : dispatch(actionCreators.getChangePageAction(1));
  },
  logout () {
    dispatch(loginActionCreators.getLogoutAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
