import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'store/appStore/action';
import { ReactComponent as HeartRegularIcon } from 'assets/img/heart-regular.svg';
import { ReactComponent as HeartSolidIcon } from 'assets/img/heart-solid.svg';
import { StyledButton } from './StyledCollectButton';
const CollectButton = ({ videoId, videoDatum, addCollect, removeCollect }) => {
  const [collected, setIsCollected] = useState(false);
  const getLocalVideoObj = useCallback(() => {
    if (localStorage.getItem('videoObj')) {
      return JSON.parse(localStorage.getItem('videoObj'));
    }
    return false;
  }, []);
  useEffect(() => {
    if (getLocalVideoObj()) {
      setIsCollected(Boolean(getLocalVideoObj()[videoId]));
    }
  }, [getLocalVideoObj, videoId]);

  const handleCollect = () => {
    if (getLocalVideoObj()) {
      localStorage.setItem(
        'videoObj',
        JSON.stringify({ ...getLocalVideoObj(), [videoId]: videoDatum })
      );
    } else {
      localStorage.setItem(
        'videoObj',
        JSON.stringify({ [videoId]: videoDatum })
      );
    }
    addCollect(videoDatum);
    setIsCollected(true);
  };
  const handleRemoveCollect = () => {
    const newLocalVideoObj = getLocalVideoObj();
    delete newLocalVideoObj[videoId];
    localStorage.setItem('videoObj', JSON.stringify(newLocalVideoObj));
    removeCollect(videoId);
    setIsCollected(false);
  };
  return (
    <StyledButton show={collected}>
      <HeartRegularIcon onClick={handleCollect} />
      <HeartSolidIcon onClick={handleRemoveCollect} />
    </StyledButton>
  );
};

export default connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(CollectButton);
