import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'store/appStore/action';
import { VideoCard, NoData } from 'components';
import {
  StyledVideoContainer,
  StyledTitle,
  StyledContainer,
  StyledPagination
} from './styledCollect';
const Collect = ({ getCollectFromLocal, collect }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('videoObj') && collect.length === 0) {
      getCollectFromLocal(
        Object.values(JSON.parse(localStorage.getItem('videoObj')))
      );
    }
  }, [collect.length, getCollectFromLocal]);
  const handlePagination = page => {
    setCurrentPage(page - 1);
  };
  const renderVideoData = () => {
    if (collect.length > 0) {
      const filterResult = collect.filter(
        (_, i) => i >= currentPage * 12 && i < (currentPage + 1) * 12
      );
      return (
        <StyledVideoContainer moreThenThree={collect.length > 2}>
          {filterResult.map(videoDatum => (
            <VideoCard key={videoDatum.id} videoDatum={videoDatum} />
          ))}
        </StyledVideoContainer>
      );
    }
    return <NoData />;
  };
  return (
    <StyledContainer>
      <StyledTitle>收藏列表</StyledTitle>
      {renderVideoData()}
      {collect.length > 0 && (
        <StyledPagination
          total={collect.length}
          current={currentPage + 1}
          onChange={handlePagination}
          pageSize={12}
        />
      )}
    </StyledContainer>
  );
};
export default connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Collect);
