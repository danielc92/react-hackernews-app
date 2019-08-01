import React, { Component } from 'react'
import { Descriptions, Button, Tag } from 'antd';
import ReactComments from './ReactComments';
const { Item } = Descriptions;


export default class ReactStoryDescription extends Component {
    render() {
        const { story } = this.props
        return (
            <div>
                <Descriptions

                bordered={false}
                title={story.title}>
                    <Item label="Author">{ story.by }</Item>
                    <Item label="Score">{ story.score }</Item>
                    <Item label="Replies">{ story.descendants }</Item>
                    <Item label="Created">{ new Date(story.time).toUTCString() }</Item>
                    <Item label="Type"><Tag color="green">{story.type}</Tag></Item>    
                    <Item label="External Link"><Button type="primary" href={story.url} target="_blank">External Link</Button></Item> 
                </Descriptions>   
                { story.kids ? <ReactComments kids={story.kids}/> : null}
            </div>
        )
    }
}
