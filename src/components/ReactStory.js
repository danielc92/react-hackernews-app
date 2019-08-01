import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopStoryItem } from '../actions';


class ReactStory extends Component {

    componentDidMount() {
        const {id} = this.props
        if (id) {
            this.props.fetchTopStoryItem(id)
        }
    }

    render() {

        const { id, stories } = this.props;
        const story = stories[id]
        return (
            <div stlye={{border: '1px solid black', padding: '0.8rem'}}>
            { story ? story.title : null } 
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.topStoryItems
    }
}

const mapActionsToProps = {
    fetchTopStoryItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactStory)