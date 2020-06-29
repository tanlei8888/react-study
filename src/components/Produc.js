import React, { Component } from 'react'
import Index from '../index.module.css'
import { withRouter } from 'react-router-dom'
class Produc extends Component {
    jumpDetail = (pid) => {   
        this.props.history.push(`/ProducDetail/${pid}/`)
        this.props.headerChange({
            title:'产品详情',
            classname:[
                'iconfont icon-left',
                ''
            ]
        })
    }
    render() {
        return (
            <div>
                <div className={Index.jinxiProduc}>
                    <h3>精选促销</h3>
                    <ul className={Index.ProducList}>
                        {
                            this.props.products.map((item,i)=>{
                                return (
                                    <li key={item.pid} className={Index.ProducItem}
                                    onClick={this.jumpDetail.bind(this,item.pid)}
                                    >
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

export default withRouter(Produc)
