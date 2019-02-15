import React, { Component } from 'react'
import { LoginWrapper, LoginContainer, Input, Button } from './style'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  render () {
    const { loginStatus, login } = this.props;
    return loginStatus ? (
      <Redirect to='/'/>
    ) : (
      <LoginWrapper>
        <Link to='/'>
          <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
        </Link>
        <LoginContainer>
          <h4>登录</h4>
          <Input placeholder='请输入账号' ref={ ref => this.account = ref }/>
          <Input placeholder='请输入密码' type='password' ref={ ref => this.password = ref }/>
          <Button onClick={ () => { login(this.account.value, this.password.value) } }>登录</Button>
        </LoginContainer>
      </LoginWrapper>
    );
  }

}

const mapState = state => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
});

const mapDispatch = dispatch => ({
  login (account, password) {
    dispatch(actionCreators.login(account, password));
  }
});

export default connect(mapState, mapDispatch)(Login)