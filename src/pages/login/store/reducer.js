import { fromJS } from "immutable";
import { CHANGELOGIN,LOGOUT } from "./constants";

const defaultState=fromJS(
    {
     login:false   
    }
)
export const loginReducer=(state=defaultState,action)=>{
    switch(action.type){
        case CHANGELOGIN:
            return state.merge(
                {
                    login:fromJS(action.login)
                }
            )
         case LOGOUT:
             return state.merge({
                login:fromJS(action.login)   
             })
    default:
        return state
    }
}