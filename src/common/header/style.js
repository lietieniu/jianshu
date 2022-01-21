import styled from 'styled-components';
import Logopic from '../../statics/Logo.png'
//1.头部整体编写
export const HeaderWrapper = styled.div `
  position:relative
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;
//2.Logo图标--点击跳转到首页
export const Logo = styled.a `
 position:absolute;
 left:0;
 top:0;
 height:56px;
 width:100px;
 display:block;
 background:url(${Logopic});
 background-size:contain;
`
    //3.头部居中位置设计
export const Nav = styled.div `
box-sizing: border-box;
padding-right:25px;
 width:960px;
 height:56px;
 margin:0px auto;
 `
    //4.居中位置内部功能设计
export const Navitem = styled.div `
padding:0px 15px;
line-height:56px;
color:#333;
&.left{
    float:left
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#EA6F5A;
}`
    //6.搜索框精装修
export const SearchWrapper = styled.div `
 position:relative;
 float:left;
.iconfont{
   position:absolute;
   top:15px;
   right:10px;
   height:30px;
   width:30px;
   border-radius:15px;
   text-align:center;
   line-height:30px;
   background:pink;
    &.focused{
      background:#969696;
      color:#fff;
    }
 }
 
`
    //5.搜索框样式
export const Navsearch = styled.input.attrs({ placeholder: "搜索" })
` box-sizing: border-box;
  width:160px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  cplor:#333333;
  background:#eee;
  padding:0px 30px 0px 20px;
  margin-top:9px;
  margin-left:20px;
  font-size:13px;
  color:#777;
  &::placeholder{
     color:#999;
     font-size:14px;
  }
  &.focused{
    width:240px;
  }
  
  &.slide-enter{
    transition:all .3s ease-out
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
   transition:all .3s ease-out
  }
  &.slide-exit-active{
    width:160px;
  }
`

export const Addtion = styled.div `
  position:absolute;
  top:0;
  right:50px;
  height:56px;
`
export const Button = styled.div `
  float:right;
  border-radius:19px;
  border:1px solid rgba(236,97,73,.7);
  margin-right:20px;
  margin-top:15px;
  line-height:38px;
  padding:0px 20px;
  font-size:14px;
  &.reg{
      color:#ea6f5a;
      background:transparent;
  }
  &.writting{
     color:white;
     background:#ea6f5a;
  }
`