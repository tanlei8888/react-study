import React,{Component} from 'react'
//类组件
export default class App extends Component{
  //声明state的两种方法
  constructor(props){
    super(props);
    this.state = {
       num:0
    }
  }
  // state = {
  //   num:0
  // }
  //通过对象改变  不过容易出现问题
  handleClick=(e)=>{
  //   console.log(e)
  //   this.setState({
  //     num:this.state.num+1
  //   })
    //通过函数改变state的值 推荐方法 prestate里的值都是最新的
    this.setState((prestate,props)=>{
      console.log(prestate);
      console.log(props);
      return{
        num:prestate.num+1
      }
    })
  }
  render(){
    return <h1 onClick={this.handleClick}>{this.state.num}</h1>
  }
}