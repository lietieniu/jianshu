import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {RecommendWrapper,RecommendItem} from '../style'

const mapStateToProps = (state, ownProps) => {
    return {
        recommendList: state.getIn(['homeReducer','recommendList'])
    }
}

 class Recommend extends PureComponent {
    render() {
        let {recommendList}=this.props
        return (
            <div>
               <RecommendWrapper>
                  {
                      recommendList.map((item)=>{
                          return(
                           <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
                            <div className='content'>
                            {item.get('content')}
                            </div>
                           </RecommendItem>
                          )
                      })
                  }
                        
                  
               </RecommendWrapper>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Recommend)