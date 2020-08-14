import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledCard = styled.div`
  padding: 0 1%;
  width: 30.3%;
  margin-bottom: 2rem;
  position: relative;
  @media (max-width: ${({ theme }) => theme.rwd.table}) {
    width: 46%;
    padding: 0 2%;
  }
  @media (max-width: ${({ theme }) => theme.rwd.phone}) {
    width: 96%;
  }
`;
export const StyledVideoImg = styled.div`
  position: relative;
  background: ${({ theme, show }) => (show ? '' : theme.defaultTheme.gery)};
  height: ${({ show }) => (show ? 'auto' : '58.5%')};
  img {
    width: 100%;
  }
  p {
    margin: 0;
    position: absolute;
    bottom: 3px;
    right: 0;
    background: ${({ theme }) => theme.defaultTheme.opacityBlackBackground};
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 5px 0 0 0;
    color: white;
  }
`;
export const StyledTitle = styled(Link)`
  line-height: 1.3rem;
  display: -webkit-box;
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-weight: bold;
  margin: 3% 0 1.5%;
  &:hover {
    text-decoration: underline;
  }
`;
export const StyledChannelTitle = styled.p`
  margin: 0;
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const StyledWatchValue = styled.p`
  margin: 0.2rem 0 0;
  opacity: 0.7;
`;
export const StyledInfoContainer = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
`;
export const StyledVideoInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledChannelInfo = styled.div`
  max-width: 90%;
`;
