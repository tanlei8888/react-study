import React, { Component } from 'react'
//引入react-redux中连接组件和store仓库的对象 connect 连接的意思
import { connect } from 'react-redux'
//导入样式
import Index from './index.module.css'
//导入头部组件
import Header from './components/Hearder'
//导入轮播图组件
import Swiper from './components/swiper'
//导入商品促销组件
import Produc from './components/Produc'

//导入action
import { getListAction , changeHeader} from './store/actionCreator'


class App extends Component {
  componentDidMount(){
    this.props.getBannerList()
    // this.props.headerChange()
  }
  render() {
    // console.log(this.props);
    return (<div className='App'>
      <div className={Index.jinxi}>
        {/* 头部开始 */}
        <Header jumpIndex={this.props.headerChange}/>
        {/* 头部结束 */}
        {/* 轮播图开始 */}
        <Swiper bannerList={this.props.bannerList}></Swiper>
        {/* 轮播图结束 */}
        {/* 导航栏开始 */}
        <div className={Index.jinxiNavs}>
            <div className={Index.Navsitem}>
              <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav01.png" alt=""/>
              <p>大聚惠</p>
            </div>
            <div className={Index.Navsitem}>
              <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav02.png" alt=""/>
              <p>海外购</p>
            </div>
            <div className={Index.Navsitem}>
              <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav03.png" alt=""/>
              <p>超市百货</p>
            </div>
            <div className={Index.Navsitem}>
              <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav04.png" alt=""/>
              <p>厂家直销</p>
            </div>
            <div className={Index.Navsitem}>
              <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/nav05.png" alt=""/>
              <p>美食娱乐</p>
            </div>
        </div>    
         {/* 导航栏结束 */}
         {/* 商品客户开始 */}
        <div className={Index.jinxiCustomer}>
            <h3>商城客户</h3>
            <div className={Index.jinxiCustomerList}>
              <div className={Index.jinxiCustomerItem}>
                  <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh0.jpg" alt=""/>
                  <p>海绵包包</p>
              </div>
              <div className={Index.jinxiCustomerItem}>
                  <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh3.png" alt=""/>
                  <p>韩国代购</p>
              </div>
              <div className={Index.jinxiCustomerItem}>
                  <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh4.png" alt=""/>
                  <p>ARC潮店</p>
              </div>
              <div className={Index.jinxiCustomerItem}>
                  <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/scyh1.png" alt=""/>
                  <p>欧力女装</p>
              </div>
              
            </div>
        </div>   
        {/* 商品促销开始 */}
        <Produc headerChange={this.props.headerChange} products={this.props.products}></Produc>
        {/* 商品促销结束 */}
      </div>
    </div>)
  }
}

//将store中的数据传递到APP组件的props中
const mapStateToProps = (state) => {
  return {
    bannerList:state.bannerList.banner,//轮播图数据
    products:state.products,//产品数据
    hearder:state.hearder
  }
}
//将行为action连接到store仓库中
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList:()=>{
      dispatch(getListAction())
    },
    headerChange:(params)=>{
      dispatch(changeHeader(params))
    },
    // jumpIndex:(params)=>{
    //   dispatch(changeHeader(params))
    // }
  }
}
//用connect将store中的数据通过props的方式传递到APP组件上
export default connect (mapStateToProps,mapDispatchToProps)(App)