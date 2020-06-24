import React, { Component } from 'react'
export default class App extends Component {
  //声明state的两种方法
  constructor(props) {
    super(props);
    this.state = {
      value: '写代码真的很快乐',
      checked:[],
      radio:""
    }
    this.inputRef = React.createRef()
  }
  handelChange(parmas){
    // console.log(parmas.currentTarget.value)
    this.setState({
      value:parmas.currentTarget.value,
      // radio:parmas.currentTarget.checked,
      // checked:parmas.currentTarget.checked
    })
  }
  handelClick(parmas){
    this.inputRef.current.focus()
  }
  render() {
    return <div>
      <input type='txte' ref={this.inputRef} onChange={this.handelChange.bind(this)} value={this.state.value}></input>
      {/* <div>
        <input type='radio' onChange={this.handelChange.bind(this)} value={this.state.radio} ></input>
      </div> */}
      {/* <div>
        <input type='checkbox'  onChange={this.handelChange.bind(this)} value={this.state.checked}></input>
      </div> */}
      <button onClick={this.handelClick.bind(this)}>按钮</button>
    </div>
  }
}