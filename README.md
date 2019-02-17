第一个 React demo - 通过一个简单的简书项目学习 React

# React-简书 学习小记

## React

### 目录结构设计

- `/src` => `/common` + `/pages` + `/store` + `/static`
- 组件目录 => `index.js` + `style.js` + `/store` + `/components` (子组件样式放在父组件样式文件中)
- `/store` => `actionCreators.js` + `actionTypes.js` + `reducer.js` + `index.js` (出口文件)

### 优化

- `PureComponent` (需配合 `immutable.js`)
- 异步组件：`react-loadable`

### 生产环境模拟 api

- 路径：`/public/api/.`
- 当访问 `localhost:3000/api/test.json` 时，会先查路由，若没有再去 `/public/api` 下看有没有 `test.json` 文件，有则返回文件内容

### 其他

- DOM绑定事件时若需要传递参数，写法为：`onClick={ () => { fn(...args) } }`
- 插入 HTML 代码：`dangerouslySetInnerHTML={{__html: ...}}`

## 管理 redux 的 store 数据安全：immutable.js

* 通过 `fromJS(jsValue)` 将 `reducer.js defaultState` 转为 `immutable` 对象
* 在 `reducer.js` 更新 `state` 前( `dispatch action` 前)，先将 `action` 中的新对象转为 `immutable` 对象
* 在组件获取 `state` 对象数据时，要先通过 `.toJS()` 转为原生对象
* 获取对象属性值: 
```javascript
// 获取单个
object.get('key')

// 获取多个
object.get('key1').get('key2') 
// 等同于 
object.getIn(['key1', 'key2'])
```
* 设置对象属性值：
```javascript
// 设置单个
object.set('key', value)

// 设置多个
object.set('key1', value1).set('key1', value1)
// 等同于 
object.merge({ 
  key1: value1, 
  key2: value2 
})
```

## 异步组件：react-loadable

- 组件目录下配置 `loadable.js`：
```javascript
import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: () => <p>loading...</p>
})

export default () => <LoadableComponent/>
```
- `App.js` 引入：
```javascript
import Detail from './pages/detail/loadable'
class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/detail/:id' exact component={ Detail }/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
```

## 更好的在 react 使用 redux：react-redux

- 组件中配置：
```javascript
// e.g. Home.js
import { connect } from 'react-redux'

const Home = props => {}
const mapStateToProps = state ({})
const mapDispatchToProps = state ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
```
- `mapStateToProps`：映射 `redux state` 到组件的 `props` 中，接收 `state` 为参数，返回一个对象：`{ propsName: state.name }`
- `mapDispatchToProps`：映射 `redux dispatch` 到组件的 `props` 中，接收 `dispatch` 为参数，返回一个对象：`{ fn () {...} }`

## reducer 拆分：redux-immutable

- `reducer` 整合：
```javascript
// /src/store/reducer.js
import { combineReducers } from 'redux-immutable'
import { headerReducer } from '../common/header/store'
import { homeReducer } from '../pages/home/store'

// reducer整合
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer
```

## 路由：react-router-dom

- Link：设置路由跳转
- Route：配置路由，可配置 `exact` 进行路由精确匹配
- `Link` (用到 `Link` 的组件)，`Route` 全部放在 `BrowserRouter` 下，且 `BrowserRouter` 只能有一个子节点(用一个 `div` 包裹)：
```html
<BrowserRouter>
  <div>
    <!-- Header 包含 Link -->
    <Header/>
    <Route path='/' exact component={ Home }/>
    <Route path='/detail/:id' exact component={ Detail }/>
    <Route path='/login' exact component={ Login }/>
    <Route path='/write' exact component={ Write }/>
  </div>
</BrowserRouter>
```
- 路由不同参数传递方式及参数获取：
```
<Route to='/detail/:id'/>   --->   url：/detail/1      --->   组件：props.match.params.id: 1
<Route to='/detail'/>       --->   url：/detail?id=1   --->   组件：props.location.search: '?id=1'
```
- 非 `Route` 子组件无法获取路由信息，在需要获取路由信息的组件中引入 `withRouter`：
```javascript
import { withRouter } from 'react-router-dom'
const Detail = props => {}
export default withRouter(Detail)
```
- 重定向到指定路由：`<Redirect to='/'/>`

## 样式组件化：styled-components

- 样式中图片资源需要引入再使用：
```javascript
import styled from 'styled-components'
import imgUrl from './xxx'

export const Wrapper = styled.div`
  background: url(${imgUrl})
`
```
- 组件传入属性值，`style.js` 中接收：
```javascript
// index.js
import { Wrapper } from './style.js';
<Wrapper imgUrl='xxx'/>
```
```javascript
// style.js
import styled from 'styled-components'
export const Wrapper = styled.div`
  background: url(${props => props.imgUrl})
`
```
- 设置全局样式：
```javascript
// style.js
import { createGlobalStyle  } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1;
  }
`
```

```javascript
// App.js
import { GlobalStyle } from './style'

class App extends Component {
  render () {
    return (
      <div>
        <GlobalStyle/>
        {/* 其他组件 */}
      </div>
    );
  }
}
```

## meta

- 解决 `axios` 请求图片 `url` 再加载报 `403` 错误：在 `/public/index.html` 中加入：
```html
<meta name="referrer" content="no-referrer"/>
```
