import React, { PureComponent } from 'react';
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { types } from '../store/index';


const mapStateToProps = (state, ownProps) => {
    return {
        List: state.getIn(['homeReducer','List']),
        nextPage:state.getIn(['homeReducer','nextPage']) 
    }
}

class List extends PureComponent {
    render() {
        let {List,getMoreList,nextPage}=this.props
        return (
            <div>
             {
                  List.map((item,index)=>{
                  return(
                   <Link exact='true' key={item} to='./detail'>
                      <ListItem key={index}>
                       <img className='pic' src={item.get('imgSrc')} alt="" />
                       <ListInfo>
                           <h3 className='title'>{item.get('title')}</h3>
                           <div className='content'>{item.get('content')}</div>
                       </ListInfo>
                    </ListItem>  
                   </Link>
                  )
                })
             }
             <LoadMore onClick={()=>{getMoreList(nextPage)}}>阅读更多</LoadMore>
             </div>
        )
    }
}
export default connect(mapStateToProps,types)(List)