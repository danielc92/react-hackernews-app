import React, { Component } from 'react'
import { Descriptions, Button, Tag } from 'antd';
import ReactComments from '../../comments/ReactComments';
const { Item } = Descriptions;


export default class ReactStoryDescription extends Component {
    render() {
        const { story } = this.props
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
                { story.kids ? <ReactComments kids={story.kids}/> : null}
            </div>
        )
    }
}
