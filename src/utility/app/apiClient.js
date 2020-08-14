import { fetchGet } from '../apiClientBase';

export const fetchGetVideo = nextPageToken => {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails${
    nextPageToken ? '&pageToken=' + nextPageToken : ''
  }&chart=mostPopular&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API}`;
  return fetchGet(url);
};
export const fetchGetVideoById = videoId => {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${
    process.env.REACT_APP_YOUTUBE_API
  }`;
  return fetchGet(url);
};
