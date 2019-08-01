import { combineReducers } from 'react'
import { FETCH_TOP_STORY_IDS } from '../constants';

const topStoryIdsReducer = (state = [], action) => {
    const { payload, type } = action
    switch (type) {
        case:
            
        default: 
            return state
    }
}

const rootReducer = combineReducers({

    topStoryIds: [],
    topStoryItems: {},
    newStoryIds: [],
    newStoryItems: {},
    bestStoryIds: [],
    bestStoryItems: {},
    showStoryIds: [],
    showStoryItems: {},
    askStoryIds: [],
    askStoryItems: {},
    jobStoryIds: [],
    jobStoryItems: {},
    comments: {},

    test: ['its', 'daniel', 'over', 'here']   
})