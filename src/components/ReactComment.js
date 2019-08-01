import React, { Component } from 'react'
import ReactComments from './ReactComments';
import { connect } from 'react-redux';
import { fetchCommentItem } from '../actions';
import { Comment } from 'antd';

class ReactComment extends Component {

    componentDidMount() {
        const { id } = this.props;
        console.log('rendering first time comment')
        this.props.fetchCommentItem(id)
    }

    render() {
        const data = this.props.comments[this.props.id]
        
        if (data) {
            let earlier_time = data.time;
            let now_time = new Date().getTime()/1000;
            var diff = Math.floor((now_time - earlier_time) / 60)
        }

        return (
            <React.Fragment>
                
                { 
                    data ? 
                    <Comment
                    style={{marginBottom: '.6rem', border: '1px solid #f3f3f3'}}
                    actions={[
                    <p>{ diff < 60 ? `${diff} minutes ago.`: `${Math.floor(diff / 60)} hours ago.`}</p>]}
                    author={ data.by }
                    content={
                        <p className="help" dangerouslySetInnerHTML={{__html: data.text }}></p>
                    }>
                        { data.kids ? <ReactComments kids={data.kids}/>: null}
                    </Comment>
                    :  null
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
