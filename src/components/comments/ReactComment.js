import React, { Component } from 'react'
import ReactComments from './ReactComments';
import { connect } from 'react-redux';
import { fetchCommentItem } from '../../actions';
import { Comment, Avatar } from 'antd';
import ReactCommentPlaceholder from '../loaders/ReactCommentPlaceholder';


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
            var time_diff_string  = diff < 60 ? `${diff} minutes ago.`: `${Math.floor(diff / 60)} hours ago.`
        }

        return (
            <React.Fragment>
                
                { 
                    data ? 
                    <Comment
                    shape="square"
                    style={{marginBottom: '.6rem', border: '1px solid #f3f3f3', padding: '.75rem 1.5rem'}}
                    avatar={<Avatar style={{ backgroundColor: '#535354' }} icon="user" />}
                    actions={[<p>{time_diff_string}</p>]}
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
