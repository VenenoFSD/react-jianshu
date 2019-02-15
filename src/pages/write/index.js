import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends Component {

  render () {
    return this.props.loginStatus ? (
      <div>
        Article
      </div>
    ) : (
      <Redirect to='/login'/>
    );
  }

}

const mapState = state => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
});

export default connect(mapState, null)(Write)