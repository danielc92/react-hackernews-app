import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAskStoryIds } from '../../actions';
import ReactStory from './details/ReactStory';
import ReactSpinner from '../loaders/ReactSpinner';

class ReactAskStories extends Component {

    componentDidMount() {
        this.props.fetchAskStoryIds()
    }

    render() {
        const { askStoryIds } = this.props
        const loaded = askStoryIds.length > 0 ? true: false
        return (
            <React.Fragment>
                { loaded ? askStoryIds.map(storyId => <ReactStory type="ask" key={storyId} id={storyId}/>): 
                <ReactSpinner/>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        askStoryIds: state.askStoryIds
    }
}

const mapActionsToProps = {
    fetchAskStoryIds
}

export default connect(mapStateToProps, mapActionsToProps)(ReactAskStories)

