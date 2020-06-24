import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// class Demo1 extends Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//   return <h1>{this.props.title}</h1>
//   }
// }
//函数式组件
function Demo1 (props){
  return (
  <h1>{props.title}</h1>
  )
}
export default class App extends Component {
  //声明state的两种方法
  constructor(props) {
    super(props);
    this.state = {
      msg:'天气正好',
      title:'今晚不加班'
    }
  }

  render() {
  return <div>
      {this.state.msg}
      {/* 父传子通过属性传参 */}
      <Demo1 title={this.state.title}></Demo1>
    </div>
  }
}