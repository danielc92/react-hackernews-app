import { combineReducers } from 'redux'
import { 
    FETCH_LIMIT, 
    FETCH_TOP_STORY_IDS, 
    FETCH_TOP_STORY_ITEM,
    FETCH_ASK_STORY_IDS,
    FETCH_ASK_STORY_ITEM,
    FETCH_NEW_STORY_IDS,
    FETCH_NEW_STORY_ITEM,
    FETCH_SHOW_STORY_IDS,
    FETCH_SHOW_STORY_ITEM,
    FETCH_BEST_STORY_IDS,
    FETCH_BEST_STORY_ITEM,
    FETCH_JOB_ITEM,
    FETCH_JOB_IDS, } from '../constants';

const topStoryIdsReducer = (state = [], action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_TOP_STORY_IDS:
            return payload;
        default: 
            return state;
    }
}

const topStoryItemsReducer = (state = {}, action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_TOP_STORY_ITEM:
            return {...state, ...payload};
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({

    topStoryIds: topStoryIdsReducer,
    topStoryItems: topStoryItemsReducer,
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