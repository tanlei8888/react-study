import React, { Component } from 'react';
// class 类组件
class Demo1 extends Component {
  constructor(props){
    super(props)
    //定时器传参给父组件
    setTimeout(() => { 
      // props接收到所有父组件传给自身的集合
      // console.log(this.props)
      this.props.onChangeColor("green")
    }, 2000);
  }
  chlidrenClick = (params) => {
    //通过点击事情传参给父组件
    this.props.onChangeColor("blue")
  }
  
  render(){
  return <h1 onClick={this.chlidrenClick}>{this.props.title}</h1>
  }
}

//函数式组件
// function Demo1 (props){
//   return (
//   <h1>{props.title}</h1>
//   )
// }
export default class App extends Component {
  //声明state的两种方法
  constructor(props) {
    super(props);
    this.state = {
      msg:'天气正好',
      title:'今晚不加班',
      color:'red'
    }
  }
  //监听事件触发函数
  changeColor = (params) => {
    console.log(params) //接收到子组件穿过来的参数
    this.setState({
      color:params
    })
  }
  
  render() {
  return <div style={{color:this.state.color}}>
      {this.state.msg}
      {/* 子传父通过事件传参 onChangeColor发生变法则触发父组件函数this.changeColor*/}
      <Demo1 onChangeColor={this.changeColor} title={this.state.title}></Demo1>
    </div>
  }
}