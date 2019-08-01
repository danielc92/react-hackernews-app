import React, { Component } from 'react'
import { Descriptions, Button, Tag } from 'antd';
import ReactComments from '../../comments/ReactComments';
import { min } from 'moment';
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

        const { story } = this.props;
        
        return (
            <div>
                <Descriptions

                bordered={false}
                title={story.title}>
                    <Item>By: { story.by }</Item>
                    <Item label="Score">{ story.score }</Item>
                    <Item label="Replies">{ story.descendants }</Item>
                    <Item>Posted on: { new Date(story.time * 1000).toUTCString() }</Item>
                    <Item label="Type"><Tag color="green">{story.type}</Tag></Item>    
                    <Item><Button href={story.url} target="_blank">Visit Source</Button></Item> 
                    
                </Descriptions>  
                { 
                    this.state.showComments
                    ? 
                    <ReactComments kids={story.kids}/>
                    : 
                    <a onClick={this.toggleCommentState}>Load comments</a>
                }
            </div>
        )
    }
}
