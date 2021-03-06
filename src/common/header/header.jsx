import React, { PureComponent } from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderWrapper,Logo,Nav,Navitem,Navsearch,
    Addtion,Button,SearchWrapper,
    Searchinfo,SearchinfoTitle,SearchinfoSwitch,SearchinfoItem} from './style';
import './style.css';
import {types} from './store/index';




class Header extends PureComponent {
  
     getListArea=(show)=>{
         let {list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage,}=this.props;
        //  const pageList=[];
        //  const newList=list.toJS();
        //  for(let i=(page-1)*8;i<page*8;i++){
        //   pageList.push(
        //       <SearchinfoItem key={i}>{newList[i]}</SearchinfoItem>
        //   )
        //  }
        const newList=list.toJS();
        const pageList=[];
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
                        handleChangePage(page+1,totalPage,this.spinIcon)
                    }else{
                        handleChangePage(1,totalPage,this.spinIcon)
                    }
                  }}>
                <span ref={(icon)=>{this.spinIcon=icon}} //获得组件对应标记真实DOM节点
                 className="iconfont spin">&#xe675;</span>
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
        let {searchFocus,searchBlur,getList,focused,mouseIn,list,login,logOut}=this.props;
        let {getListArea}=this
        return (
                <HeaderWrapper>
                <Link to='./' exact='true'>
                    <Logo></Logo>
                </Link>
                    <Nav>
                        <Link to='/'><Navitem className='left active'>首页</Navitem></Link>
                        <Navitem className='left'>下载App</Navitem>
                        {login?<Navitem className='right'>退出</Navitem>:
                        <Link to='/login' exact='true'><Navitem className='right'>登录</Navitem>
                        </Link>}
                        <Navitem className='right'>
                        <i className='iconfont'>Aa</i>
                        </Navitem>
                        <SearchWrapper>
                          <CSSTransition
                           in={focused}
                           timeout={300}
                           classNames='slide'>
                            <Navsearch className={focused?"focused":""}
                            onFocus={()=>{if(list.size>0){getList()}else{searchFocus()}}}
                            
                            onFocus={getList}
                            onBlur={searchBlur}>
                            </Navsearch>
                            </CSSTransition>
                            <span className={focused?"focused iconfont zoom":"iconfont zoom"}>&#xe6d9;</span>
                            {getListArea(focused||mouseIn)}
                        </SearchWrapper>
                    </Nav>
                    <Addtion>
                    <Link to='/write'><Button className='writting'><span className='iconfont'>&#xe604;</span>写文章</Button></Link>
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
       totalPage:state.getIn(['Header','totalPage']),
       page:state.getIn(['Header','page']),
       mouseIn:state.getIn(['Header','mouseIn']),
       login:state.getIn(['loginReducer','login'])
      
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
