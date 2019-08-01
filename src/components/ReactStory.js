import React, { Component } from 'react'

export default class ReactStory extends Component {
    render() {
        console.log(this.props.id)
    
        return (
            <div stlye={{border: '1px solid black', padding: '0.8rem'}}>
                {this.props.id}
            </div>
        )
    }
}
