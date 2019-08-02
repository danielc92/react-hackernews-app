import React, { Component } from 'react'
import ReactComments from './ReactComments';
import { connect } from 'react-redux';
import { fetchCommentItem } from '../../actions';
import { Comment, Tag } from 'antd';
import ReactCommentPlaceholder from '../loaders/ReactCommentPlaceholder';
import { calculateTimeDiffString } from '../../helpers';

class ReactComment extends Component {

    componentDidMount() {
        const { id } = this.props;
        this.props.fetchCommentItem(id)
    }

    render() {
        const { data } = this.props;
        
        if (data) {
            var timeDiffString = calculateTimeDiffString(data.time)
        }

        return (
            <React.Fragment> 
                { 
                    data ? 
                    <Comment
                    style={{borderLeft: '1px solid #f3f3f3', padding: '.30rem 0rem'}}
                    datetime={<span>{ timeDiffString }</span>}
                    author={ <Tag color="purple">{ data.by }</Tag> }
                    content={
                        <p className="help" dangerouslySetInnerHTML={{__html: data.text }}></p>
                    }>
                        { data.kids ? <ReactComments kids={data.kids}/>: null}
                    </Comment>
                    :  
                    <ReactCommentPlaceholder/>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.commentItems[ownProps.id]
    }
}

const mapActionsToProps = {
    fetchCommentItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactComment)
