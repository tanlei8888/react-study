import React,{Component} from 'react'
//类组件 类名首字母必须大写
export default class App extends Component{
  //声明state的两种方法
  constructor(props){
    super(props);
    this.state = {
       num:0
    }
  }
  handleClick=(e)=>{
    //通过对象改变  不过容易出现问题 建议使用函数
    this.setState({
      num:this.state.num + 1
    },()=>{ //回调函数
      // console.log(this.state.num);
    })
    //this.setState 的赋值是异步的 但是this.setState 允许设置一个回调函数获取到最新值
    // console.log(this.state.num);//0 因为异步
  }
  render(){
    return <h1 onClick={this.handleClick}>{this.state.num}</h1>
  }
}