import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { HeaderWrapper,Logo,Nav,Navitem,Navsearch,
    Addtion,Button,SearchWrapper,
    Searchinfo,SearchinfoTitle,SearchinfoSwitch,SearchinfoItem} from './style';
import './style.css';
import {types} from './store/index';

const getListArea=(show)=>{
  if(show){
     return(
        <Searchinfo>
        <SearchinfoTitle>
         热门搜索:
          <SearchinfoSwitch>
              换一批
          </SearchinfoSwitch>
        </SearchinfoTitle>
      <div>
          <SearchinfoItem>教育</SearchinfoItem>
          <SearchinfoItem>教育</SearchinfoItem>
          <SearchinfoItem>教育</SearchinfoItem>
          <SearchinfoItem>教育</SearchinfoItem>
          <SearchinfoItem>教育</SearchinfoItem>
          <SearchinfoItem>教育</SearchinfoItem>
          <SearchinfoItem>教育</SearchinfoItem>
          <SearchinfoItem>教育</SearchinfoItem>
       </div>
    </Searchinfo>
     )
  }else{
      return null;
  }
}
class Header extends Component {
   render() {
       
        let {focused,searchFocus,searchBlur}=this.props
        return (
                <HeaderWrapper>
                    <Logo href='./'></Logo>
                    <Nav>
                        <Navitem className='left active'>首页</Navitem>
                        <Navitem className='left'>下载App</Navitem>
                        <Navitem className='right'>登录</Navitem>
                        <Navitem className='right'>
                        <i className='iconfont'>Aa</i>
                        </Navitem>
                        <SearchWrapper>
                          <CSSTransition
                           in={focused}
                           timeout={300}
                           classNames='slide'>
                            <Navsearch className={focused?"focused":""} onFocus={searchFocus}
                            onBlur={searchBlur}
                            >
                            </Navsearch>
                            </CSSTransition>
                            <span className={focused?"focused iconfont":"iconfont"}>&#xe6d9;</span>
                            {getListArea(focused)}
                        </SearchWrapper>
                    </Nav>
                    <Addtion>
                    <Button className='writting'>
                    <span className='iconfont'>&#xe604;</span>
                        写文章</Button>
                    <Button className='reg'>注册</Button>
                     
                    </Addtion>
                </HeaderWrapper>
               ) 
    }
};
const mapStateToProps = (state, ownProps) => {
    return {
       focused:state.get("Header").get("focused") 
    }
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//        handdleInputFoucs(){
//         const action={
//           type:"search_focus"
//         };
//         dispatch(action)
//        },
//        handdleInputBlur(){
//         const action={
//             type:"search_blur"
//           };
//           dispatch(action)
//        }
//     }
// }
export default connect(mapStateToProps,types)(Header)
