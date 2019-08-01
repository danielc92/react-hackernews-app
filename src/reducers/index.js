import { combineReducers } from 'redux'
import { FETCH_TOP_STORY_IDS } from '../constants';

const topStoryIdsReducer = (state = [], action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_TOP_STORY_IDS:
            return payload;
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({

    topStoryIds: topStoryIdsReducer,
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