import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../Layout';
export const StyledHeader = styled.header`
  position: sticky;
  background: ${({ theme }) => theme.background};
  transition: background 0.3s;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  margin-right: 1rem;
`;
export const StlyedContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    margin-left: 1%;
    margin-right: 1%;
    display: flex;
    align-items: center;
  }
`;
