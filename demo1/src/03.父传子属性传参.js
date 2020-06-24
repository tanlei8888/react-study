import React,{Component} from 'react'
import PropTypes from "prop-types"
//类组件 类名首字母必须大写
class HomeTop extends Component{
  render(){
  return <h1 className={this.props.className} style={{fontSize:this.props.size}}>{this.props.name}</h1>
  }
}
export default class App extends Component{
  //声明state的两种方法
  constructor(props){
    super(props);
    this.state={
      className:'renderClass',
      size:100
    }
  }
  render(){
    return <HomeTop name='baby'{...this.state}></HomeTop>
  }
}