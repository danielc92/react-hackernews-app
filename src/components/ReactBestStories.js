import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBestStoryIds } from '../actions';
import ReactStory from './ReactStory';
import ReactSpinner from './ReactSpinner';

class ReactBestStories extends Component {

    componentDidMount() {
        this.props.fetchBestStoryIds()
    }

    render() {
        const { bestStoryIds } = this.props
        const loaded = bestStoryIds.length > 0 ? true: false
        return (
            <React.Fragment>
                { 
                    loaded ? 
                    bestStoryIds.map(storyId => <ReactStory type="best" key={storyId} id={storyId}/>): 
                    <ReactSpinner/>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bestStoryIds: state.bestStoryIds
    }
}

const mapActionsToProps = {
    fetchBestStoryIds
}

export default connect(mapStateToProps, mapActionsToProps)(ReactBestStories)

