import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom'; //删除了Redirect重定向组件
import { LoginWrapper,LoginBox,Input, Button } from './style';
import * as types from './store/action';

const mapStateToProps = (state, ownProps) => {
    return {
        login:state.getIn(['loginReducer','login'])
    }
}
 class Login extends PureComponent {
    render() {
        let {toLogin,login}=this.props
       if(login){
        return <Navigate to='/'></Navigate>
       }else{
        return (
            <div>
               <LoginWrapper>
                   <LoginBox>
                      <Input placeholder='账号' ref={(input)=>{this.account=input}}></Input>
                      <Input placeholder='密码' type='password' ref={(input)=>{this.password=input}}></Input>
                       <Button onClick={()=>{toLogin(this.account,this.password)}}>登录</Button>
                   </LoginBox>
               </LoginWrapper>
            </div>
        )
       }
    }
}
export default connect(mapStateToProps,types)(Login)
