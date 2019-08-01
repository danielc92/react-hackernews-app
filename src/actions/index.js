import hackernewsApi from '../api';
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
    FETCH_JOB_IDS,
} from '../constants';

export const fetchTopStoryIds = () => async (dispatch, getState) => {

    const response = await hackernewsApi.get(`v0/topstories.json`)

    dispatch({
        type: FETCH_TOP_STORY_IDS,
        payload: response.data.slice(0, FETCH_LIMIT)
    })
}

export const fetchBestStoryIds = () => async (dispatch, getState) => {

    const response = await hackernewsApi.get(`v0/beststories.json`)

    dispatch({
        type: FETCH_BEST_STORY_IDS,
        payload: response.data.slice(0, FETCH_LIMIT)
    })
}

export const fetchNewStoryIds = () => async (dispatch, getState) => {

    const response = await hackernewsApi.get(`v0/newstories.json`)

    dispatch({
        type: FETCH_NEW_STORY_IDS,
        payload: response.data.slice(0, FETCH_LIMIT)
    })
}

export const fetchTopStoryItem = (id) => async (dispatch, getState) => {

    const response = await hackernewsApi.get(`v0/item/${id}.json`)

    dispatch({
        type: FETCH_TOP_STORY_ITEM,
        payload: {
            [id]: response.data
        }
    })
}

export const fetchBestStoryItem = (id) => async (dispatch, getState) => {

    const response = await hackernewsApi.get(`v0/item/${id}.json`)

    dispatch({
        type: FETCH_BEST_STORY_ITEM,
        payload: {
            [id]: response.data
        }
    })
}

export const fetchNewStoryItem = (id) => async (dispatch, getState) => {

    const response = await hackernewsApi.get(`v0/item/${id}.json`)

    dispatch({
        type: FETCH_NEW_STORY_ITEM,
        payload: {
            [id]: response.data
        }
    })
}

export const fetchCommentItem = (id) => async (dispatch, getState) => {
    const response = await hackernewsApi.get(`v0/item${id}.json`)

    dispatch({
        type: FETCH_COMMENT_ITEM,
        payload: {
            [id]: response.data
        }
    })
}