import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import store from './store'
import Header from './common/header'
import { BrowserRouter , Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <Header/>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}/>
            <Route path='/detail' exact component={Detail}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
