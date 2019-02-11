import React, { Component } from 'react'
import { HeaderWrapper, HeaderContainer, Logo, Nav, NavLeft, NavRight, NavItem, SearchWrapper, NavSearch, Addition, Button } from "./style"

class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Logo href='/'/>
          <Nav>
            <NavLeft>
              <NavItem className='active'>首页</NavItem>
              <NavItem>下载App</NavItem>
              <SearchWrapper>
                <NavSearch/>
                <i className='iconfont search-icon'>&#xe62f;</i>
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
    )
  }
}

export default Header