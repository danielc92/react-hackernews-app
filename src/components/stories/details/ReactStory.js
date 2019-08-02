import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    fetchTopStoryItem, 
    fetchAskStoryItem, 
    fetchShowStoryItem, 
    fetchJobStoryItem,
    fetchNewStoryItem, 
    fetchBestStoryItem } from '../../../actions';
import ReactStoryDescription from './ReactStoryDescription';



class ReactStory extends Component {

    componentDidMount() {
        const { id, type} = this.props
        switch (type) {
            case 'job':
                this.props.fetchJobStoryItem(id);
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
                return
        }
    }

    render() {
        const { story } = this.props;
        return (
            <div style={{ border: '1px solid #f3f3f3', padding: '1rem', marginBottom: '1rem'}}>
            { 
                story ? 
                <ReactStoryDescription story={story}/> 
                :
                null
            } 
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const { type , id} = ownProps;

    if (type === 'new') {
        return {
            story: { ...state.newStoryItems[id] }
        }
    } else if (type === 'top') {
        return {
            story: { ...state.topStoryItems[id] }
        }
    } else if (type === 'best') {
        return {
            story: { ...state.bestStoryItems[id] }
        }
    } else if (type === 'show') {
        return {
            story: { ...state.showStoryItems[id] }
        }
    } else if (type === 'job') {
        return {
            story: { ...state.jobStoryItems[id] }
        }
    } else if (type === 'ask') {
        return {
            story : { ...state.askStoryItems[id]}
        }
    }
}

const mapActionsToProps = {
    fetchTopStoryItem,
    fetchNewStoryItem,
    fetchBestStoryItem,
    fetchJobStoryItem,
    fetchAskStoryItem,
    fetchShowStoryItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactStory)