import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTopStoryIds } from '../actions';


class ReactTopStories extends Component {

    componentDidMount() {
        console.log(this.props.topStoryIds)
        this.props.fetchTopStoryIds()
    }

    render() {
        
        return (
            <div>top stories</div>
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

