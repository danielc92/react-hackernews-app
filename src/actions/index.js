import hackernewsApi from '../api';
import responsiveObserve from 'antd/lib/_util/responsiveObserve';

export const FETCH_TOP_STORY_IDS = 'FETCH_TOP_STORY_IDS';

export const fetchTopStoryIds = () => async (dispatch, getState) => {

    const response = await hackernewsApi.get(`v0/topstories.json`)

    dispatch({
        type: FETCH_TOP_STORY_IDS,
        payload: response.data
    })
}