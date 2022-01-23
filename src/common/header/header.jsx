import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { HeaderWrapper,Logo,Nav,Navitem,Navsearch,
    Addtion,Button,SearchWrapper,
    Searchinfo,SearchinfoTitle,SearchinfoSwitch,SearchinfoItem} from './style';
import './style.css';
import {types} from './store/index';


class Header extends Component {
  
     getListArea=(show)=>{
         let {list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage,}=this.props;
         const pageList=[];
         const newList=list.toJS();
         for(let i=(page-1)*8;i<page*8;i++){
          pageList.push(
              <SearchinfoItem key={i}>{newList[i]}</SearchinfoItem>
          )
         }
       if(show){
           return(
              <Searchinfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
              <SearchinfoTitle>
               热门搜索:
                <SearchinfoSwitch onClick={()=>{
                    if(page<totalPage){
                        handleChangePage(page+1)
                    }else{
                        handleChangePage(1)
                    }
                  }}>
                    换一批
                </SearchinfoSwitch>
              </SearchinfoTitle>
            <div>
               {pageList}
             </div>
          </Searchinfo>
           )
        }else{
            return null;
        }
      }
   
    render() {
        let {searchFocus,searchBlur,getList,focused,mouseIn}=this.props;
        let {getListArea}=this
        
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
                            <Navsearch className={focused?"focused":""} onFocus={searchFocus,getList}
                            onBlur={searchBlur}
                            >
                            </Navsearch>
                            </CSSTransition>
                            <span className={focused?"focused iconfont":"iconfont"}>&#xe6d9;</span>
                            {getListArea(focused||mouseIn)}
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
       focused:state.get("Header").get("focused"),
       list:state.get('Header').get('list'),
       page:state.getIn(['Header','page']),
       mouseIn:state.getIn(['Header','mouseIn']),
       totalPage:state.getIn(['Header','totalPage'])
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
