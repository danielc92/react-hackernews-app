import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTopStoryIds } from '../actions';

export default class ReactTopStories extends Component {

    componentDidMount() {

    }

    render() {
        return (

        )
    }
}

const mapStateToProps = (state) => {
    return {
        topStoryIds: state.topStoryIds
    }
}

