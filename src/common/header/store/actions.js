import axios from 'axios';
import { fromJS } from 'immutable';
import { SEARCH_FOCUS, SEARCH_ONBLUR,CHANGE_LIST,MOUSERENTER,MOUSELEAVE,CHANGEPAGE } from "./constants";

export const searchFocus = (list) => {
    return {
        type: SEARCH_FOCUS
    }
}
export const searchBlur = () => {
    return {
        type: SEARCH_ONBLUR
    }
}

const changeList=(data)=>{
    return{
       type:CHANGE_LIST,
       data:fromJS(data),
       totalPage:Math.ceil(data.length/8),
       }
}
export const getList=()=>{
    return (dispatch)=>{
        axios.get('./api/headerList.json')
        .then((res)=>{
           const data=res.data.data;
           dispatch(changeList(data))
        })
        .catch(()=>{console.log('error')})
    }
}
export const handleMouseEnter=()=>{
    return{
        type:MOUSERENTER
    }
}
export const handleMouseLeave=()=>{
    return{
        type:MOUSELEAVE
    }
}
export const handleChangePage=(page,totalPage,spin)=>{
    //1.获得rotate的初始值(用replace将非数值替换取得字符串里面的值)
    let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
    //2.将字符串转换成数值(10进制转换成数字)
    if(originAngle){
      originAngle=parseInt(originAngle,10)
    }else{
        originAngle=0;
    }
     spin.style.transform='rotate('+(originAngle+360)+'deg)';
   return{
       type:CHANGEPAGE,
       page,
       totalPage
   }
}