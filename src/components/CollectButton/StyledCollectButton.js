import styled from 'styled-components';

export const StyledButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.defaultTheme.opacityBlackBackground};
  padding-left: 3px;
  border-radius: 0 0 0 13px;
  cursor: pointer;
  svg {
    width: 24px;
    height: 100%;
    color: white;
    transition: all 0.3s;
    transition-property: color;

    &:first-of-type {
      visibility: ${({ show }) => (show ? 'hidden' : 'visible')};
      &:active {
        color: ${({ theme }) => theme.defaultTheme.heartRed};
      }
    }
    &:last-of-type {
      visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
      position: absolute;
      top: -1px;
      right: 0;
      color: ${({ theme }) => theme.defaultTheme.heartRed};
      &:active {
        color: white;
      }
    }
  }
`;
