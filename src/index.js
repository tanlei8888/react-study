import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//引入阿里图标
import './font_1905781_1n8r35gvt1p/iconfont.css';
//引入组件
import App from './App';
import ProducDetail from './components/ProducDetail'
import TableBar from './components/tableBar'
//引入 react-redux 负责将store和组件连接起来
import { Provider } from 'react-redux'
//引入store仓库
import store from './store'
// import * as serviceWorker from './serviceWorker';
//引入淘宝移动端适配文件
import  'lib-flexible'
import { BrowserRouter as Router, Route} from "react-router-dom";

//将APP用Provider标签包裹起来
//将store通过属性方式传递到APP组件
ReactDOM.render(
  <Provider store={store}>
      <Router>
          <Route path='/' exact  component={ App }/>
          <Route path='/ProducDetail/:id' component={ ProducDetail }/>
          <TableBar></TableBar>
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
