import { combineReducers } from 'redux'
import { 
    FETCH_LIMIT,
    FETCH_COMMENT_ITEM,
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

const bestStoryIdsReducer = (state = [], action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_BEST_STORY_IDS:
            return payload;
        default: 
            return state;
    }
}

const bestStoryItemsReducer = (state = {}, action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_BEST_STORY_ITEM:
            return {...state, ...payload};
        default: 
            return state;
    }
}

const newStoryIdsReducer = (state = [], action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_NEW_STORY_IDS:
            return payload;
        default: 
            return state;
    }
}

const newStoryItemsReducer = (state = {}, action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_NEW_STORY_ITEM:
            return {...state, ...payload};
        default: 
            return state;
    }
}

const commentStoryItemsReducer = (state = {}, action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_COMMENT_ITEM:
            return {...state, ...payload};
        default: 
            return state;
    }
}

const showStoryItemsReducer = (state = {}, action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_SHOW_STORY_ITEM:
            return {...state, ...payload};
        default: 
            return state;
    }
}

const showStoryIdsReducer = (state = [], action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_SHOW_STORY_IDS:
            return payload;
        default: 
            return state;
    }
}


const askStoryItemsReducer = (state = {}, action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_ASK_STORY_ITEM:
            return {...state, ...payload};
        default: 
            return state;
    }
}

const askStoryIdsReducer = (state = [], action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_ASK_STORY_IDS:
            return payload;
        default: 
            return state;
    }
}



export const rootReducer = combineReducers({

    topStoryIds: topStoryIdsReducer,
    topStoryItems: topStoryItemsReducer,
    newStoryIds: newStoryIdsReducer,
    newStoryItems: newStoryItemsReducer,
    bestStoryIds: bestStoryIdsReducer,
    bestStoryItems: bestStoryItemsReducer,
    commentItems: commentStoryItemsReducer,
    showStoryIds: showStoryIdsReducer,
    showStoryItems: showStoryItemsReducer,
    askStoryIds: askStoryIdsReducer,
    askStoryItems: askStoryItemsReducer,
    jobStoryIds: [],
    jobStoryItems: {},
    test: ['its', 'daniel', 'over', 'here']   
})