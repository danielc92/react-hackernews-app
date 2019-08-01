import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopStoryItem } from '../actions';
import ReactStoryDescription from './ReactStoryDescription';


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
            <React.Fragment>
            { 
                story ? 
                <ReactStoryDescription story={story}/> 
                : null 
            } 
            </React.Fragment>
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