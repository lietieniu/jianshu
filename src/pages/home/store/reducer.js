import {fromJS} from 'immutable'
import { CHANGEHOMEDATA,GETMORELIST,TOGGLE_SCROLL_TOP } from './constants'

const defaultState=fromJS({
   topicList:[],
   List:[],
   recommendList:[],
   nextPage:1,
   showScroll:false
})

export const homeReducer=(state=defaultState,action)=>{
  switch(action.type){
    case CHANGEHOMEDATA:
     return state.merge({
        topicList:fromJS(action.topicList),
        List:fromJS(action.List),
        recommendList:fromJS(action.recommendList)
     })
     case GETMORELIST:
        return state.merge(
           {
             'List':state.get('List').concat(fromJS(action.List)),
             nextPage:action.nextPage
           }
        )
     case TOGGLE_SCROLL_TOP:
        return state.set('showScroll',action.show)
      default:
        return state;
  }
}