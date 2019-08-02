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

    state = {
        fetched: false
    }

    toggleFetched = () => {
        this.setState({
            fetched: this.state.fetched
        })
    }

    componentDidMount() {
        const { id, type} = this.props

        if (type === 'job' && this.state.fetched === false) {
            this.props.fetchJobStoryItem(id);
            this.toggleFetched()
        } 
        else if (type === 'new' && this.state.fetched === false) {
            this.props.fetchNewStoryItem(id);
            this.toggleFetched()
        } 
        else if (type === 'best' && this.state.fetched === false) {
            this.props.fetchBestStoryItem(id);
            this.toggleFetched()
        } 
        else if (type === 'ask' && this.state.fetched === false) {
            this.props.fetchAskStoryItem(id);
            this.toggleFetched()
        } 
        else if (type === 'show' && this.state.fetched === false) {
            this.props.fetchShowStoryItem(id);
            this.toggleFetched()
        } 
        else if (type === 'top' && this.state.fetched === false) {
            this.props.fetchTopStoryItem(id);
            this.toggleFetched()
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