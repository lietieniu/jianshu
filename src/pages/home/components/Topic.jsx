import React, {PureComponent } from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
       list:state.getIn(['homeReducer','topicList'])
    }
}
 class Topic extends PureComponent {
    render() {
        let {list}=this.props
        return (
            <div>
               <TopicWrapper>
                {
                     list.map((item)=>{
                      return(
                       <TopicItem key={item.get('id')}>
                           <img
                           className='Topic-img'
                           src={item.get('imgSrc')} alt="" />
                          {item.get('title')}
                       </TopicItem>
                      )
                    }) 
                }
               </TopicWrapper>
            </div>
        )
    }
}
export default connect(mapStateToProps,null)(Topic)
