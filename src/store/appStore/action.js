import * as actionTypes from './actionTypes';
import { fetchGetVideo } from 'utility/app/apiClient';
export const actionCreators = {
  switchTheme: () => dispath => {
    dispath({ type: actionTypes.SWITCH_THEME });
  },
  searchVideo: () => async dispath => {
    dispath({ type: actionTypes.REQUEST_SEARCH_VIDEO });
    const responseData = await fetchGetVideo();
    if (responseData.response) {
      if (responseData.response.nextPageToken) {
        const nextPageResponeseData = await fetchGetVideo(
          responseData.response.nextPageToken
        );
        const videoData = nextPageResponeseData.response
          ? {
              ...nextPageResponeseData.response,
              items: [
                ...responseData.response.items,
                ...nextPageResponeseData.response.items
              ]
            }
          : responseData.response;
        dispath({
          type: actionTypes.RECEIVE_SEARCH_VIDEO,
          videoData
        });
      } else {
        dispath({
          type: actionTypes.RECEIVE_SEARCH_VIDEO,
          videoData: responseData.response
        });
      }
    } else {
      dispath({ type: actionTypes.RECEIVE_SEARCH_VIDEO_FAIL });
    }
  },
  getCollectFromLocal: collect => dispath => {
    dispath({ type: actionTypes.GET_COLLECT_FROM_LOCAL, collect });
  },
  addCollect: videoDatum => dispath => {
    dispath({ type: actionTypes.ADD_COLLECT, videoDatum });
  },
  removeCollect: videoId => dispath => {
    dispath({ type: actionTypes.REMOVE_COLLECT, videoId });
  }
};
