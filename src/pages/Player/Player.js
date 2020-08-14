import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { useLocation } from 'react-router-dom';
import { fetchGetVideoById } from 'utility/app/apiClient';
import { Spinner, NoData } from 'components';
import {
  StyledContainer,
  StyledDescription,
  StyledYoutubeContainer
} from './styledPlayer';

const Player = () => {
  const youTubeRef = useRef();
  const [ready, setReady] = useState(false);
  const [infoReady, setInfoReady] = useState(false);
  const [info, setInfo] = useState(null);
  const [videoHeight, setVideoHeight] = useState(0);
  const localtionObj = useLocation();
  const videoId = localtionObj.pathname.replace('/player/', '');
  useEffect(() => {
    fetchGetVideoById(videoId).then(res => {
      if (res.response) {
        setInfo(res.response.items[0].snippet);
      }
      setInfoReady(true);
    });
  }, [videoId]);
  useEffect(() => {
    const setYoutubeHeight = () => {
      if (youTubeRef.current) {
        setVideoHeight(youTubeRef.current.getBoundingClientRect().width / 2);
      }
    };
    setYoutubeHeight();
    window.addEventListener('resize', setYoutubeHeight);
    return () => {
      window.removeEventListener('resize', setVideoHeight);
    };
  }, []);
  const onReady = () => {
    setReady(true);
  };
  const renderDescription = () => {
    if (ready && infoReady) {
      if (info) {
        const { title } = info;
        return (
          <StyledDescription>
            <h2>{title}</h2>
            <div>{info.description}</div>
          </StyledDescription>
        );
      }
      return <NoData />;
    }
    return <Spinner />;
  };
  return (
    <StyledContainer>
      <StyledYoutubeContainer
        ref={youTubeRef}
        videoHeight={videoHeight}
        ready={ready && info}
      >
        <YouTube
          containerClassName='youtubeContainer'
          videoId={videoId}
          onReady={onReady}
        />
      </StyledYoutubeContainer>
      {renderDescription()}
    </StyledContainer>
  );
};

export default Player;
