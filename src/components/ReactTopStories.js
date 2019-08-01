import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTopStoryIds } from '../actions';
import ReactStory from './ReactStory';

class ReactTopStories extends Component {

    componentDidMount() {
        console.log(this.props.topStoryIds)
        this.props.fetchTopStoryIds()
    }

    render() {
        const { topStoryIds } = this.props
        const loaded = topStoryIds.length > 0 ? true: false
        return (
            <React.Fragment>
                { loaded ? topStoryIds.map(storyId => <ReactStory key={storyId} id={storyId}/>): <p>No stories have been loaded</p>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topStoryIds: state.topStoryIds
    }
}

const mapActionsToProps = {
    fetchTopStoryIds
}

export default connect(mapStateToProps, mapActionsToProps)(ReactTopStories)

