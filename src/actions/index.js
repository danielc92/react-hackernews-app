import hackernewsApi from '../api';
import { FETCH_TOP_STORY_IDS, FETCH_LIMIT } from '../constants';

export const fetchTopStoryIds = () => async (dispatch, getState) => {

    const response = await hackernewsApi.get(`v0/topstories.json`)

    dispatch({
        type: FETCH_TOP_STORY_IDS,
        payload: response.data.slice(0, FETCH_LIMIT)
    })
}