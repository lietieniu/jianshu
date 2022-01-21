import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import { HeaderWrapper,Logo,Nav,Navitem,Navsearch,Addtion,Button,SearchWrapper} from './style';
import './style.css'
export default class Header extends Component {
    constructor(props){
      super(props);
     this.state={
         focused:false
     }
    }
    handdleClick1=()=>{
        this.setState({
            focused:true
        })
    }
    handdleClick2=()=>{
        this.setState({
            focused:false
        })
    }
    
    render() {
        let {handdleClick1,handdleClick2}=this;
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
                           in={this.state.focused}
                           timeout={300}
                           classNames='slide'>
                            <Navsearch className={this.state.focused?"focused":""} onFocus={handdleClick1} onBlur={handdleClick2}>

                            </Navsearch>
                            </CSSTransition>
                            <span className={this.state.focused?"focused iconfont":"iconfont"}>&#xe6d9;</span>
                          
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
}
