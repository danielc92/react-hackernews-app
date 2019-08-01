import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopStoryItem, fetchNewStoryItem, fetchBestStoryItem } from '../../../actions';
import ReactStoryDescription from './ReactStoryDescription';


class ReactStory extends Component {

    componentDidMount() {

        const { id, type} = this.props
        console.log(type)
        switch (type) {
            case 'new':
                this.props.fetchNewStoryItem(id)
            case 'best':
                this.props.fetchBestStoryItem(id)
            case 'top':
                this.props.fetchTopStoryItem(id)
            default: 
                console.log('no case met')
        }
    }

    render() {

        const { id, stories } = this.props;
        const story = stories[id]
        return (
            <div style={{ border: '1px solid #f3f3f3', padding: '1rem', marginBottom: '1rem'}}>
            { 
                story ? 
                <ReactStoryDescription story={story}/> 
                : null 
            } 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stories: {
            ...state.topStoryItems, 
            ...state.bestStoryItems, 
            ...state.newStoryItems}
    }
}

const mapActionsToProps = {
    fetchTopStoryItem,
    fetchNewStoryItem,
    fetchBestStoryItem,
}

export default connect(mapStateToProps, mapActionsToProps)(ReactStory)