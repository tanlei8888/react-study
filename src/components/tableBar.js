import React, { Component } from 'react'
// import Index from '../index.module.css'
//导入路由
import {Link } from 'react-router-dom'
export default class tableBar extends Component {
    state = {
        tableBar:[
            {
                cid:'shouye',
                class:'iconfont icon-zhuye',
                title:'首页',
                link:'/'
            },{
                cid:'shequ',
                class:'iconfont icon-shequ',
                title:'社区',
                link:'/producDetail/:id'
            },{
                cid:'gouwuche',
                class:'iconfont icon-gouwuche',
                title:'购物车',
                link:''
            },{
                cid:'wode',
                class:'iconfont icon-wode',
                title:'我的',
                link:''
            },
        ],
        currentId:'shouye'
    }
    currentTab = (params) => {
        this.setState({
            currentId:params
        })
        // console.log(this.props)
    }
    render() {
        return (
            <div>
                {/* <Router> */}
                <div className='tableBar'>
                    {
                        this.state.tableBar.map((item,i)=>{
                            return (
                                <div key={item.cid} 
                                className='tableBarItem'
                                onClick={this.currentTab.bind(this,item.cid)}
                                >
                                    <Link to={item.link} className={this.state.currentId === item.cid?'active':''}>
                                    <i className={item.class}></i>
                                    <p>{item.title}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                {/* </Router> */}
                <style >
                    {
                        `
                        .active{
                            color: #ee394a !important;
                          }
                         .tableBar {
                            width: 100%;
                            position: fixed;
                            overflow: hidden;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            display: flex;
                            background-color: white;
                            color: #737373;
                            height: 1.77333333rem;
                            font-size:0.5rem;
                            border-top: 1px solid #e6e6e6;
                          }
                           .tableBar .tableBarItem {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            align-items: center;
                          }
                           .tableBar .tableBarItem a {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            align-items: center;
                            flex: 1;
                          }
                           .tableBar .tableBarItem a .iconfont {
                            font-size: 0.66666667rem;
                          }
                        `
                    }
                </style>
            </div>
        )
    }
}
