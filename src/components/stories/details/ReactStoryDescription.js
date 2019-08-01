import React, { Component } from 'react'
import { Descriptions, Button, Tag } from 'antd';
import { calculateTimeDiffString } from '../../../helpers';
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

        const { by, score, title, descendants, kids, time, type, url } = this.props.story;
        
        if (time) {
            var timeDiff = calculateTimeDiffString(time);
        }

        return (
            <div>
                <Descriptions

                bordered={false}
                title={ title }>
                    <Item>By: { by }</Item>
                    <Item label="Score">{ score }</Item>
                    <Item label="Replies">{ descendants }</Item>
                    <Item>Created: { timeDiff }</Item>
                    <Item label="Type"><Tag color="green">{ type }</Tag></Item>    
                    <Item><Button href={ url } target="_blank">Visit Source</Button></Item> 
                    
                </Descriptions>  
                {
                    kids && this.state.showComments === false
                    ?  
                    <a onClick={this.toggleCommentState}>Load comments</a>
                    : 
                    null
                    
                }
                { 
                    this.state.showComments
                    ? 
                    <ReactComments kids={kids}/>
                    : 
                    null
                }
            </div>
        )
    }
}
