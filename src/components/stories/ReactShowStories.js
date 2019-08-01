import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchShowStoryIds } from '../../actions';
import ReactStory from './details/ReactStory';
import ReactSpinner from '../loaders/ReactSpinner';

class ReactShowStories extends Component {

    componentDidMount() {
        this.props.fetchShowStoryIds()
    }

    render() {
        const { showStoryIds } = this.props
        const loaded = showStoryIds.length > 0 ? true: false
        return (
            <React.Fragment>
                { loaded ? showStoryIds.map(storyId => <ReactStory type="show" key={storyId} id={storyId}/>): 
                <ReactSpinner/>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showStoryIds: state.showStoryIds
    }
}

const mapActionsToProps = {
    fetchShowStoryIds
}

export default connect(mapStateToProps, mapActionsToProps)(ReactShowStories)

