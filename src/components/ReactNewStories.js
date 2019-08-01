import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNewStoryIds } from '../actions';
import ReactStory from './ReactStory';
import ReactSpinner from './ReactSpinner';

class ReactNewStories extends Component {

    componentDidMount() {
        this.props.fetchNewStoryIds()
    }

    render() {
        const { newStoryIds } = this.props
        const loaded = newStoryIds.length > 0 ? true: false
        return (
            <React.Fragment>
                { 
                    loaded 
                    ? 
                    newStoryIds.map(storyId => <ReactStory type='new' key={storyId} id={storyId}/>)
                    : 
                    <ReactSpinner/>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newStoryIds: state.newStoryIds
    }
}

const mapActionsToProps = {
    fetchNewStoryIds
}

export default connect(mapStateToProps, mapActionsToProps)(ReactNewStories)

