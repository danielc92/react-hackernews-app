import React, { Component } from 'react'
import { Descriptions, Button, Tag } from 'antd';
import { calculateTimeDiffString } from '../../../helpers';
import ReactCommentPlaceholder from '../../loaders/ReactCommentPlaceholder';
import ReactComments from '../../comments/ReactComments';
const { Item } = Descriptions;


export default class ReactStoryDescription extends Component {

    state = {
        showComments: false
    }

    toggleCommentState = () => {
        console.log("Changing the comment state")
        this.setState({ showComments: !this.state.showComments })
    }

    render() {

        const { by, score, title, descendants, kids, time, type, url, text } = this.props.story;
        const { story } = this.props;
        if (time) {
            var timeDiff = calculateTimeDiffString(time);
        }

        return (
            <React.Fragment>
                {
                    title ? [
                    <Descriptions title={ title }>
                        <Item>By: <Tag color="purple">{ by }</Tag></Item>
                        <Item label="Score">{ score }</Item>
                        { descendants ? <Item label="Replies">{ descendants }</Item> : null }
                        <Item>Created: { timeDiff }</Item>
                        <Item label="Type"><Tag color="green">{ type }</Tag></Item>    
                        <Item label="Visit source"><a href={ url } target="_blank">click here</a></Item> 
                    </Descriptions>,
                    <div>
                    {
                        text ? 
                        <span dangerouslySetInnerHTML={{ __html: text}}></span> : 
                        null
                    }
                    </div>,
                    (
                        kids && this.state.showComments === false
                        ?  
                        <a onClick={this.toggleCommentState}>Load comments</a>
                        : 
                        null
                        
                    ),
                    ( 
                        this.state.showComments
                        ? 
                        <ReactComments kids={kids}/>
                        : 
                        null
                    )]
                        :
                        <ReactCommentPlaceholder/>
                    }

            </React.Fragment>
        )
    }
}
