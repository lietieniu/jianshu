import { SEARCH_FOCUS, SEARCH_ONBLUR,CHANGE_LIST,MOUSERENTER,MOUSELEAVE,CHANGEPAGE } from "./constants";
import { fromJS } from 'immutable';
//immutable对象
//immutable库---保证state不被修改
const defaultState = fromJS({ // fromJS方法将js对象转换为immutable对象
    focused: false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
})
export const Header = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            //immutable对象的set方法，会结合之前的immutable对象的值
            //和设置的值，返回一个全新的对象
            return state.set('focused', true)
        case SEARCH_ONBLUR:
            return state.set('focused', false)
        case CHANGE_LIST:
            return state.merge({
                list:action.data,
                focused:true,
                totalPage:action.totalPage
            })
        case MOUSERENTER:
            return state.set('mouseIn',true)
        case MOUSELEAVE:
            return state.set('mouseIn',false)
        case CHANGEPAGE:
            return state.set('page',action.page)
        default:
            return state;
    }
}