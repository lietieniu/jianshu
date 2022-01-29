import React, { PureComponent } from 'react';

import {connect} from 'react-redux';
import { HomeWrapper,HomeLeft,HomeRight,BackTop } from './style';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { types } from './store/index';

const mapStateToProps = (state, ownProps) => {
   return {
      showScroll: state.getIn(['homeReducer','showScroll'])
   }
}

class Home extends PureComponent {
   handleScrollTop(){
      window.scrollTo(0,0)
   }
    render() {
       let {showScroll}=this.props;
      
      return (
            <div>
               <HomeWrapper>
                   <HomeLeft>
                      <img className='banner-img' src="https://www.jianshu.com/p/4a8939c48cd4" alt="" />
                       <Topic/>
                       <List/>
                    </HomeLeft>
                   <HomeRight>
                     <Recommend/>
                       <Writer/>
                    </HomeRight>
                 {
                    showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
                 }
               </HomeWrapper>
            </div>
        )
       }
      // 写法一:  componentDidMount=()=>{
      //   axios.get('./api/home.json')
      //   .then((res)=>{
      //      const data=res.data.data;
      //      const action={
      //       type:'change_home_data',
      //       topicList:data.topicList,
      //       List:data.List,
      //       recommendList:data.recommendList
      //      }
      //      this.props.changeHomeData(action)
      //     })
      //  }
      
      //写法二：
      componentDidMount(){
         let {changeHomeData}=this.props;
         changeHomeData();
         this.bindEvents()
       }
       componentWillUnmount(){
         let {changeScrollTopShow}=this.props
         window.removeEventListener('scroll',changeScrollTopShow)  
       }
       bindEvents(){
          let {changeScrollTopShow}=this.props
          window.addEventListener('scroll',changeScrollTopShow)
       }
  }
//   const mapDispatch=(dispatch)=>({
//     changeHomeData(action){
//       dispatch(action)
//     }
// })
  
export default connect(mapStateToProps,types)(Home)


