import React from "react";
//导入路由
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//as 重新命名的意思
//导入 组件
import App from './App'
import ProducDetail from './components/ProducDetail'
function AppRputer () {
    return (
        <Router>
            <Route path='/' exact  component={ App }/>
            <Route path='/ProducDetail/' component={ ProducDetail }/>
        </Router>
    )
}
export default AppRputer