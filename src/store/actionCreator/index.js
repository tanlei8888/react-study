//导入常量
import { GET_BANNER } from '../actionType'
import axios from '../../utils/axios'
const getBannerList = (data) => ({
      type:GET_BANNER,
      data  
  })

const getListAction = () => {
  return (dispatch)=>{
      axios.post('/getIndexLoopimg').then(res => {
        console.log(res)
        const data = res.data
        const action = getBannerList(data)
        dispatch(action)
    })
  }
}
//导出方法
export { getBannerList , getListAction }