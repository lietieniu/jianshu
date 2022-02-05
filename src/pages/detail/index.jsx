import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {withRouter} from 'react-router-dom';
import {DetailWrapper,Header,Content} from './style';
import * as types from './store/action';

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.getIn(['detailReducer','title']),
        content:state.getIn(['detailReducer','content'])
    }
}
class Detail extends Component {
    render() {
     let {title,content}=this.props
        return (
            <div>
                <DetailWrapper>
                   <Header>
                       {title}
                    </Header>
                   <Content dangerouslySetInnerHTML={{__html:content}}></Content>
                </DetailWrapper>
            </div>
        )
    }
    componentDidMount(){
      let {getDetail}=this.props;
      //getDetail(this.props.match.params.id);
      getDetail()
    }
}
export default connect(mapStateToProps,types)(Detail)
