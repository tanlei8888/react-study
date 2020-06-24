import React, { Component } from 'react'

class Demo extends Component {
  /* 
   注销定时器、监听器、取消网络请求
 */
  componentWillUnmount() {
    console.log("组件卸载");
  }

  render() {
    return <h1>demo</h1>
  }
}

export default class App extends Component {
  state = {
    msg: "写代码是一件快乐的事情",
    show: true
  }
  
  //卸载组件
  deleteComponent = (params) => {
    this.setState({
      show:false
    })
  }
  render() {
    //3.更新

    console.log('3,执行render函数');
    return (
      <div>
        {
          this.state.show ? <Demo></Demo> : ''
        }
        <button onClick={this.deleteComponent}>卸载组件</button>
      </div>
    )
  }
  
}
