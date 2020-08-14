import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as InfoIcon } from 'assets/img/info.svg';
import { StyledInfoContainer, StyledDescription } from './StyledInfoBox';
const InfoBox = ({ description }) => {
  const [isShow, setIsShow] = useState(false);
  const infoBoxRef = useRef();
  const iconRef = useRef();
  useEffect(() => {
    const handleClickOutside = e => {
      if (
        infoBoxRef.current &&
        iconRef.current &&
        !infoBoxRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target) &&
        isShow
      ) {
        setIsShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShow]);
  const handleIsShow = () => {
    setIsShow(prevState => !prevState);
  };
  return (
    <StyledInfoContainer>
      <InfoIcon onClick={handleIsShow} ref={iconRef} />
      <StyledDescription isShow={isShow} ref={infoBoxRef}>
        <div>{description}</div>
      </StyledDescription>
    </StyledInfoContainer>
  );
};

export default InfoBox;
