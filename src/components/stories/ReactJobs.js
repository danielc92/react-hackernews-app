import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchJobStoryIds } from '../../actions';
import ReactStory from './details/ReactStory';
import ReactSpinner from '../loaders/ReactSpinner';

class ReactJobStories extends Component {

    componentDidMount() {
        this.props.fetchJobStoryIds()
    }

    render() {
        const { jobStoryIds } = this.props
        const loaded = jobStoryIds.length > 0 ? true: false
        return (
            <React.Fragment>
                { loaded ? jobStoryIds.map(storyId => <ReactStory type="job" key={storyId} id={storyId}/>): 
                <ReactSpinner/>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobStoryIds: state.jobStoryIds
    }
}

const mapActionsToProps = {
    fetchJobStoryIds
}

export default connect(mapStateToProps, mapActionsToProps)(ReactJobStories)

