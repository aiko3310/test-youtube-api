import React, { useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { Link } from 'react-router-dom';

import * as ROUTES from 'router';
import { InfoBox, CollectButton, Spinner } from 'components';
import {
  StyledCard,
  StyledVideoImg,
  StyledTitle,
  StyledChannelTitle,
  StyledWatchValue,
  StyledVideoInfoContainer,
  StyledChannelInfo
} from './StyledVideoCard';
momentDurationFormatSetup(moment);
const VideoCard = ({ videoDatum }) => {
  const [imgIsLoad, setImgIsLoad] = useState(false);
  const { snippet, statistics, contentDetails, id } = videoDatum;
  const { viewCount } = statistics;
  const { title, thumbnails, channelTitle, description } = snippet;
  const imgOnLoad = () => {
    setImgIsLoad(true);
  };
  const renderViewCount = () => {
    if (viewCount > 10000) {
      return `${Math.floor(viewCount / 100) / 100} 萬`;
    }
    return viewCount;
  };
  const videoTime = moment.duration(contentDetails.duration).format('hh:mm:ss');
  const path = `${ROUTES.PLAYER}/${id}`;
  return (
    <StyledCard>
      <StyledVideoImg show={imgIsLoad}>
        <Link to={path}>
          <Spinner />
          <img src={thumbnails.medium.url} alt={title} onLoad={imgOnLoad} />
        </Link>
        <p>{videoTime}</p>
        <CollectButton videoId={id} videoDatum={videoDatum} />
      </StyledVideoImg>
      <StyledTitle to={path}>{title}</StyledTitle>
      <StyledVideoInfoContainer>
        <StyledChannelInfo>
          <StyledChannelTitle>{channelTitle}</StyledChannelTitle>
          <StyledWatchValue>觀看數：{renderViewCount()}</StyledWatchValue>
        </StyledChannelInfo>
        <InfoBox description={description} />
      </StyledVideoInfoContainer>
    </StyledCard>
  );
};

export default VideoCard;
