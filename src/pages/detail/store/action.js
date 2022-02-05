import axios from "axios";
import { GETDETAIL } from "./constants";

const get_Detail=(data)=>{
  return {
      type:GETDETAIL,
      title:data.title,
      content:data.content
  }
}

export const getDetail=(id)=>{
  return (dispatch)=>{
      axios.get('/api/detail.json?id='+id)
      .then((res)=>{
        const data=res.data.data;
        dispatch(get_Detail(data)) 
      })
  }
}