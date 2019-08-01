import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopStoryItem, fetchAskStoryItem, fetchShowStoryItem, fetchNewStoryItem, fetchBestStoryItem } from '../../../actions';
import ReactStoryDescription from './ReactStoryDescription';
import ReactCommentPlaceholder from '../../loaders/ReactCommentPlaceholder';


class ReactStory extends Component {

    componentDidMount() {
        const { id, type} = this.props
        switch (type) {
            case 'show':
                this.props.fetchShowStoryItem(id);
            case 'ask':
                this.props.fetchAskStoryItem(id);
            case 'new':
                this.props.fetchNewStoryItem(id);
            case 'best':
                this.props.fetchBestStoryItem(id);
            case 'top':
                this.props.fetchTopStoryItem(id);
            default: 
                console.log(`No case met for id ${id}`);
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
                :
                <ReactCommentPlaceholder/> 
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
            ...state.newStoryItems,
            ...state.showStoryItems,
            ...state.askStoryItems}
    }
}

const mapActionsToProps = {
    fetchTopStoryItem,
    fetchNewStoryItem,
    fetchBestStoryItem,
    fetchAskStoryItem,
    fetchShowStoryItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactStory)