import styled from 'styled-components';

export const HomeWrapper=styled.div
`overflow:hidden;
 width:960px;
 margin:0 auto;
`;
export const HomeLeft=styled.div
`float:left;
 width:625px;
 margin-left:15px;
 padding-top:30px;
  .banner-img{
      width:625px;
      height:270px;
  }

`;
export const HomeRight=styled.div
`float:right;
 width:240px;

`;
export const TopicWrapper=styled.div
` overflow:hidden;
padding:20px 0 10px 0;

 border-bottom:1px solid #dcdcdc;
 `
 export const TopicItem=styled.div
`float:left;
 height:32px;
 line-height:32px;
 font-size:14px;
 background:#f7f7f7;
 color:#000;
 border:1px solid #dcdcdc;
 border-radius:5px;
 padding-right:10px;
 margin-right:18px;
 margin-bottom:18px;
  .Topic-img{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }`
  //ListItem
  export const ListItem=styled.div
  `overflow:hidden;
   padding:20px 0;
   border-bottom:1px solid #dcdcdc;
  .pic{
      display:block; 
      width:125px;
      height:100px;
      float:right;
      border-radius:50px;
      margin-top:40px;
    

    }`
   //ListInfo
  export const ListInfo=styled.div
  `width:500px;
   float:left;
    .title{
     line-height:27px;
     font-size:16px;
     font-weight:bold;
     color:#333;
     text-indent:3px;
    }
     .content{
     line-height:24px;
     width:500px;
     margin-right:25px;
    }`
//RecommendWrapper
export const RecommendWrapper=styled.div
`width:280px;
 margin:30px 0;
`
export const RecommendItem=styled.div
`width:280px;
 height:50px;
 background:url(${(props)=>props.imgUrl});
 text-align:center;
 background-size:contain;
 .content{
   font-size:20px;
}`
export const WriterWrapper=styled.div
`width:300px;
 border:1px solid #dcdcdc;
 border-radius:3px;
 height:300px;
 line-height:300px;
 text-align:center;
`
//loadMore(阅读更多)
export const LoadMore=styled.div
`width:100%;
 height:40px;
 margin:30px 0;
 line-height:40px;
 border-radius:20px;
 text-align:center;
 background:#a5a5a5;
 color:#fff;
 cursor:pointer;
`
//BackTop回到顶部
export const BackTop=styled.div
`position:fixed;
 right:45px;
 bottom:50px;
 font-size:14px;
 width:70px;
 height:40px;
 line-height:40px;
 text-align:center;
 border:1px solid #ccc;
 border-radius:20px;
 color:blue;
 `
