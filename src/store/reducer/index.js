//导入Type常量
import { GET_BANNER } from '../actionType'


const defaultState = {
   bannerList:{
       banner:[]
   }
}

//创建并暴露一个对外函数 返回state
export default (state = defaultState,action)=>{
    //当action被派发时(dispatch),会触发
    if(action.type === GET_BANNER){
        //进行深复制
        let newData = Object.assign({},state)
        newData.bannerList.banner = action.data.wdata
        console.log(newData.bannerList);
        return newData
    }
    return state
}