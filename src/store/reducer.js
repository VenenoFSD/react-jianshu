import { combineReducers } from "redux-immutable"
import { headerReducer } from '../common/header/store'

// reducer整合
const reducer = combineReducers({
  header: headerReducer
});

export default reducer

// 为什么要引入redux-immutable：原生store的state是一个普通对象，而其中的header等属性是immutable对象，为了统一，引入该模块将state转为一个immutable对象
// 组件中获取state中数据：state.get('header').get('input') 或 state.getIn(['header', 'input'])