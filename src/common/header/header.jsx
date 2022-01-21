import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';

import { HeaderWrapper,Logo,Nav,Navitem,Navsearch,Addtion,Button,SearchWrapper} from './style';
import './style.css';

class Header extends Component {
   render() {
     
        let {focused,handdleInputFoucs, handdleInputBlur}=this.props
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
                           in={focused.focused}
                           timeout={300}
                           classNames='slide'>
                            <Navsearch className={focused.focused?"focused":""} onFocus={handdleInputFoucs}
                            onBlur={handdleInputBlur}
                            >
                            </Navsearch>
                            </CSSTransition>
                            <span className={focused.focused?"focused iconfont":"iconfont"}>&#xe6d9;</span>
                          
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
       focused:state.Header 
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       handdleInputFoucs(){
        const action={
          type:"search_focus"
        };
        dispatch(action)
       },
       handdleInputBlur(){
        const action={
            type:"search_blur"
          };
          dispatch(action)
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
