import React, { Component } from 'react'

export default class App extends Component {
  state = {
    msg: "写代码是一件快乐的事情"
  }
  //1,更新时的第一个阶段
  static getDerivedStateFromProps(){
    console.log('1,进入到getDerivedStateFromProps');
    return null;
  }
 //2.判断组件 是否更新？
 shouldComponentUpdate(){
   console.log('2,判断组件是否更新');
   return true;
 }
 //更新事件 自定
 update = (params) => {
   this.setState({
     msg:'今晚不加班'
   })
 }
 //组件 内置
 forceCmpUpdate = (params) => {
   //内置强制更新组件方法  跳过shouldComponentUpdate 判断是狗更新这个阶段
   this.forceUpdate()
 }
 
 render() {
  //3.更新

    console.log('3,执行render函数');
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.update}>更新</button>
        <button onClick={this.forceCmpUpdate}>强制更新</button>
      </div>
    )
  }
  //4，getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(){
    console.log('4,getSnapshotBeforeUpdate 渲染页面前');
  }
  //5，组件已经更新好了
  componentDidUpdate(){
    console.log('5,componentDidUpdate 渲染页面');
  }
}
