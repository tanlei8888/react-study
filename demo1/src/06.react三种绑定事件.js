import React, { Component } from 'react'
export default class App extends Component {
  //声明state的两种方法
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
    // 第三种
    this.handelClick = this.handelClick.bind(this,10)
  }
  //第一种绑定事件 传参方式 onClick={this.handelClick.bind(this, 10)} 标签内改变this
  // handelClick(params) {
  //   this.setState({
  //     num: this.state.num + params
  //   })
  // }
 
  //第二种绑定事件方式 箭头函数改变this
  // handelClick = (params) => {
  //   this.setState({
  //         num: this.state.num + params
  //       })
  // }
  
  // 第三种
  handelClick(params){
      this.setState({
          num: this.state.num + params
        })
    }
  render() {
    return <div>
      {this.state.num}
      {/* //第一种 标签内改变利用bind函数改变this指向*/}
      {/* <button onClick={this.handelClick.bind(this, 10)}>按钮</button> */}
      {/* 第二种 箭头函数*/}
      {/* <button onClick={this.handelClick}>按钮</button> */}
      {/* 第三种 constructor constructor构造器中利用bind改变this指向*/}
      <button onClick={this.handelClick}>按钮</button>
    </div>
  }
}