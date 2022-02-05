import { fromJS } from "immutable";
import { GETDETAIL } from "./constants";

const defaultState=fromJS(
    {
     title:'',
     content:''
    }
)

export const detailReducer=(state=defaultState,action)=>{
    switch(action.type){
      case GETDETAIL:
          return state.merge({
              title:fromJS(action.title),
              content:fromJS(action.content)
          })
        default:
            return state
    } 
}