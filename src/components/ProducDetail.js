import React, { Component } from 'react'
// import Index from '../index.module.css'
import Header from './Hearder'
import store from '../store/index'
export default class ProducDetail extends Component {
    state = {
        product:{}
    }
    componentDidMount(){
        
        let product = store.getState().products.filter(item=>{
            // console.log(item.pid);
            // console.log(this.props.match.params.id);
            return item.pid === this.props.match.params.id
        })
        console.log(product);
        this.setState({
            product:product[0]
        })
    }
    jumpIndex = (params) => {
        console.log(this.props);
        this.props.history.push('/')
    }
    render() {
        console.log(this.state.product);
        console.log(this.props);
        return (
            <div>
                <Header jumpIndex={this.jumpIndex}></Header>
                <div className='producDetail'>
                   <img src={this.state.product.product_url} alt=""/>
                   <div className='producInfo'>
                        <p className='productName'>{this.state.product.product_name}</p>
                        <p className='productPrice'>{'¥' + this.state.product.product_price} </p>
                   </div>
                   {/* <div dangerouslySetInnerHTML={{__html:`${this.state.product.product_desc}`}} /> */}
                </div>
                <style>
                    {
                        `
                            .producDetail{

                            }
                            img{
                                width:100%;
                                height: 6.8rem;
                            }
                            .producInfo{
                                font-size:0.5rem;
                                height:2.13333rem;
                                padding: 0.26666667rem; 
                                background-color:#fff;
                            }
                            .productName{
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow:ellipsis;
                            }
                            .productPrice{
                                color:#ee394a;
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}
