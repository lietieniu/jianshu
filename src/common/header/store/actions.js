import axios from 'axios';
import { fromJS } from 'immutable';
import { SEARCH_FOCUS, SEARCH_ONBLUR,CHANGE_LIST,MOUSERENTER,MOUSELEAVE,CHANGEPAGE } from "./constants";

export const searchFocus = () => {
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
export const handleChangePage=(page)=>{
    return{
        type:CHANGEPAGE,
        page
    }
}