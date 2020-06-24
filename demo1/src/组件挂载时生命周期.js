import React, { Component } from 'react'

export default class App extends Component {
  //1，进入到constructor
  constructor(props){
    super(props);
    console.log('1,进入到constructor');
    this.state = {
      msg: ''
    }
  }
  //2,让state的值和Porps的值保持一致 getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps,prevState){
    console.log('2,进入到getDerivedStateFromProps');
    return null;
  }
  //4，元素已经挂载 DOM 时
  componentDidMount(){
    console.log('4,componentDidMount');
  }
  render() {
    console.log('3,执行render函数');
    return (
      <div>
        <h1>写代码是一件快乐的事情</h1>
      </div>
    )
  }
}
