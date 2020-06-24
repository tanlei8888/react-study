import React,{Component} from 'react'
import PropTypes from "prop-types"
//类组件 类名首字母必须大写
class HomeTop extends Component{
  constructor(props){
    super(props)
  }
  render(){
  return <h1 className={this.props.className} style={{fontSize:this.props.size}}>{this.props.name}</h1>
  }
}
//可以设置组建的默认值  会被父传子的相同name属性覆盖
HomeTop.defaultProps = {
  name:'屋顶'
}
//设置组件传参的类型
HomeTop.propTypes = {
  className:PropTypes.string,
  size:PropTypes.number
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