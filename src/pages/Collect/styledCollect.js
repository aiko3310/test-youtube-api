import styled from 'styled-components';
import { Container } from 'components';
import Pagination from 'rc-pagination';

export const StyledVideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const StyledTitle = styled.h2`
  padding-left: 1%;
`;
export const StyledContainer = styled(Container)`
  padding-bottom: 3rem;
`;
export const StyledPagination = styled(Pagination)`
  text-align: right;
  margin-top: 2.5rem;
`;
