import axios from "axios";
import { CHANGEHOMEDATA,GETMORELIST,TOGGLE_SCROLL_TOP } from "./constants";

const change_Home_Data=(data)=>(
  //返回一个action 
   {
    type:CHANGEHOMEDATA,
    topicList:data.topicList,
    List:data.List,
    recommendList:data.recommendList
   }
)

//1.changeHomeData
export const changeHomeData=()=>{
 // return action
 return (dispatch)=>{
  axios.get('./api/home.json')
  .then((res)=>{
    const data=res.data.data;
    dispatch(change_Home_Data(data))
    
  })
  .catch(()=>{
    console.log(Error)
    })
 }
}

const get_More_List=(data,nextPage)=>({
   type:GETMORELIST,
   List:data,
   nextPage
})

export const getMoreList=(Page)=>{
  return (dispatch)=>{
    axios.get('./api/homeList.json?Page='+Page)
    .then((res)=>{
      const data=res.data.data;
      dispatch(get_More_List(data,Page+1))
    })
    .catch(()=>{
      console.log(Error)
    })
    }
}

const toggleTopShow=(show)=>(
  {
    type:TOGGLE_SCROLL_TOP,
    show
  }
)

//changeScrollTopShow
export const changeScrollTopShow=()=>{
return (dispatch)=>{
  if(document.documentElement.scrollTop>800){
    dispatch(toggleTopShow(true))
  }else{
    dispatch(toggleTopShow(false))
  }
}
}