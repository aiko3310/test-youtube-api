import * as actionTypes from './actionTypes';
const initialState = {
  islightTheme: false,
  videoData: {
    items: []
  },
  collect: [],
  searchIsLoading: true,
  searchVideoFail: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME: {
      return {
        ...state,
        islightTheme: !state.islightTheme
      };
    }
    case actionTypes.REQUEST_SEARCH_VIDEO: {
      return {
        ...state,
        videoData: initialState.videoData,
        searchVideoFail: false,
        searchIsLoading: true
      };
    }
    case actionTypes.RECEIVE_SEARCH_VIDEO: {
      return {
        ...state,
        videoData: action.videoData,
        searchIsLoading: false
      };
    }
    case actionTypes.RECEIVE_SEARCH_VIDEO_FAIL: {
      return {
        ...state,
        searchVideoFail: true,
        searchIsLoading: false
      };
    }
    case actionTypes.GET_COLLECT_FROM_LOCAL: {
      return {
        ...state,
        collect: action.collect
      };
    }

    case actionTypes.ADD_COLLECT: {
      return {
        ...state,
        collect: state.collect.concat(action.videoDatum)
      };
    }
    case actionTypes.REMOVE_COLLECT: {
      return {
        ...state,
        collect: state.collect.filter(datum => datum.id !== action.videoId)
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
