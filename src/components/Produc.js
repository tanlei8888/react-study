import React, { Component } from 'react'
import Index from '../index.module.css'
import axios from '../utils/axios'

export default class Produc extends Component {
    state = {
        wares:[]
    }
    componentDidMount(){
        axios.post('/getProducts').then(res=>{
            console.log(res);
            this.setState({
                wares:res.data.wdata
            })
        })
    }
    render() {
        return (
            <div>
                <div className={Index.jinxiProduc}>
                    <h3>精选促销</h3>
                    <ul className={Index.ProducList}>
                        {
                            this.state.wares.map((item,i)=>{
                                return (
                                    <li key={item.pid} className={Index.ProducItem}>
                                        <img src={item.product_url} alt=""/>
                                        <p>{item.product_name}</p>
                                        <p className={Index.price}>{'¥' + item.product_price}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
