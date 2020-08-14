import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'store/appStore/action';
import { Spinner, VideoCard, SearchFail, NoData } from 'components';
import {
  StyledVideoContainer,
  StyledTitle,
  StyledContainer,
  StyledPagination
} from './styledApp';
const App = ({
  searchVideo,
  videoData,
  searchVideoFail,
  searchIsLoading,
  getCollectFromLocal,
  collect
}) => {
  const { items, pageInfo } = videoData;
  const [firstSearch, setFirstSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    if (localStorage.getItem('videoObj') && collect.length === 0) {
      getCollectFromLocal(
        Object.values(JSON.parse(localStorage.getItem('videoObj')))
      );
    }
  }, [collect.length, getCollectFromLocal]);
  useEffect(() => {
    if (items.length === 0 && !searchVideoFail && !firstSearch) {
      searchVideo({});
      setFirstSearch(true);
    }
  }, [firstSearch, items.length, searchVideoFail, searchVideo]);
  const handlePagination = page => {
    setCurrentPage(page - 1);
  };
  const renderVideoData = () => {
    if (!searchIsLoading) {
      if (videoData.items.length > 0) {
        const filterResult = videoData.items.filter(
          (_, i) => i >= currentPage * 12 && i < (currentPage + 1) * 12
        );
        return (
          <StyledVideoContainer>
            {filterResult.map(videoDatum => (
              <VideoCard key={videoDatum.id} videoDatum={videoDatum} />
            ))}
          </StyledVideoContainer>
        );
      } else if (searchVideoFail) {
        return <SearchFail />;
      }
      return <NoData />;
    }
    return <Spinner />;
  };
  return (
    <StyledContainer>
      <StyledTitle>影片列表</StyledTitle>
      {renderVideoData()}
      {pageInfo && (
        <StyledPagination
          total={items.length}
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
)(App);
