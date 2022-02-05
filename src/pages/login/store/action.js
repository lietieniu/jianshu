import axios from "axios";
import { CHANGELOGIN,LOGOUT } from "./constants";
//1.登录操作
const change_Login=(data)=>{
    return{
        type:CHANGELOGIN,
        login:true
    }
}

export const toLogin=(account,password)=>{
  return (dispatch)=>{
      axios.get('/api/login.json?account='+account.value+'&password'+password.value)
      .then((res)=>{
       const data=res.data.data;
       if(data){
         dispatch(change_Login())
       }else{
           alert("登录失败")
       }
      })
  }
}
//2.退出操作
export const logOut=()=>{
    return{
        type:LOGOUT,
        login:false,
    }
}