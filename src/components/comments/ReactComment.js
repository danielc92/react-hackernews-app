import React, { Component } from 'react'
import ReactComments from './ReactComments';
import { connect } from 'react-redux';
import { fetchCommentItem } from '../../actions';
import { Comment, Avatar } from 'antd';
import ReactCommentPlaceholder from '../loaders/ReactCommentPlaceholder';
import { calculateTimeDiffString } from '../../helpers';

class ReactComment extends Component {

    componentDidMount() {
        const { id } = this.props;
        this.props.fetchCommentItem(id)
    }

    render() {
        const data = this.props.comments[this.props.id]
        
        if (data) {
            var timeDiffString = calculateTimeDiffString(data.time)
        }

        return (
            <React.Fragment> 
                { 
                    data ? 
                    <Comment
                    shape="square"
                    style={{marginBottom: '.6rem', border: '1px solid #f3f3f3', padding: '.75rem 1.5rem'}}
                    avatar={<Avatar style={{ backgroundColor: '#339DFF' }} icon="user" />}
                    actions={[<p>{timeDiffString}</p>]}
                    author={ data.by }
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

const mapStateToProps = (state) => {
    return {
        comments: state.commentItems
    }
}

const mapActionsToProps = {
    fetchCommentItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactComment)
