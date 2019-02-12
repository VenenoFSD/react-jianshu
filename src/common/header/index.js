import React, { Component } from 'react'
import { HeaderWrapper, HeaderContainer, Logo, Nav, NavLeft, NavRight, NavItem, SearchWrapper, NavSearch, HotSearch, HotTitle, HotItem, Addition, Button } from "./style"
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component {

  render () {
    const { showList, hotSearch, curPage, totalPage, handleInputFocus, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Logo href='/'/>
          <Nav>
            <NavLeft>
              <NavItem className='active'>首页</NavItem>
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
                    <span className='change' onClick={ () => { handleChangePage(curPage, totalPage) } }>换一批</span>
                  </HotTitle>
                  <ul>{ hotSearch.slice((curPage - 1) * 10, curPage * 10).map(item => <HotItem key={item}>{item}</HotItem>) }</ul>
                </HotSearch>
              </SearchWrapper>
            </NavLeft>
            <NavRight>
              <NavItem>Aa</NavItem>
              <NavItem>登录</NavItem>
            </NavRight>
          </Nav>
          <Addition>
            <Button>注册</Button>
            <Button className='article'>
              <i className='iconfont'>&#xe616;</i>
              写文章
            </Button>
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
  hotSearch: state.getIn(['header', 'hotSearch'])
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
  handleChangePage (curPage, totalPage) {
    curPage < totalPage ? dispatch(actionCreators.getChangePageAction(++curPage)) : dispatch(actionCreators.getChangePageAction(1));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
