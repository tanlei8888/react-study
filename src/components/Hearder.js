import React, { Component } from 'react'
import store from '../store/index'
export default class Hearder extends Component {
    state = {
        hearder:store.getState().hearder,
        changeHeader:{
            title:'京西商城',
            classname:[
                'iconfont icon-caidan',
                'iconfont icon-icon-test'
            ]
        }
    }
    changeHeader = () => {
        // console.log(this.props)
        this.props.jumpIndex(this.state.changeHeader)
    }
    render() {
        // console.log(this.props);
        // console.log(this.state.hearder);
        return (
            <div>
                <div className='jinxiHeader'>
                    <div className='headerCaidan' onClick={this.changeHeader}>
                        <i className={this.state.hearder.classname[0]}
                        ></i>
                    </div>
                    <div className='headerTitle'>
                        {this.state.hearder.title}
                    </div>
                    <div className='headerSerach'>
                        <i className={this.state.hearder.classname[1]}></i>
                    </div>
                </div>
                <div className='HeaderContainer'></div>
                <style>
                    {
                        `
                        .jinxiHeader {
                            position: fixed;
                            top: 0;
                            width: 100%;
                            z-index: 101;
                            background-color: #ee394a;
                            color: #fff;
                            display: flex;
                            height: 1.33333333rem;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 0.2rem;
                            font-size: 0.69333333rem;
                          }
                          .HeaderContainer{
                            height: 1.33333333rem;
                          }
                        `
                    }
                </style>
            </div>
        )
    }
}
