import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTopStoryIds } from '../../actions';
import ReactStory from './details/ReactStory';
import ReactSpinner from '../loaders/ReactSpinner';

class ReactTopStories extends Component {

    componentDidMount() {
        this.props.fetchTopStoryIds()
    }

    render() {
        const { topStoryIds } = this.props
        const loaded = topStoryIds.length > 0 ? true: false
        return (
            <React.Fragment>
                { loaded ? topStoryIds.map(storyId => <ReactStory type="top" key={storyId} id={storyId}/>): 
                <ReactSpinner/>}
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

