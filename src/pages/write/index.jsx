import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom'; //删除了Redirect重定向组件


const mapStateToProps = (state, ownProps) => {
    return {
        login:state.getIn(['loginReducer','login'])
    }
}
 class Write extends PureComponent {
    render() {
        let {login}=this.props
       if(login){
         return (
             <div>write组件</div>
         )
       }else{
        alert("请先登录");
        return <Navigate to='/'></Navigate>
       }
    }
}
export default connect(mapStateToProps,null)(Write)
