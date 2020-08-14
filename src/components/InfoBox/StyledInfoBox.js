import styled from 'styled-components';

export const StyledInfoContainer = styled.div`
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
export const StyledDescription = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  padding: 0 3%;
  @media (max-width: ${({ theme }) => theme.rwd.table}) {
    padding: 0 4%;
  }
  @media (max-width: ${({ theme }) => theme.rwd.phone}) {
    padding: 0 2%;
  }
  div {
    visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
    transition: all 0.3s;
    transition-property: visibility, background, box-shadow, height;
    padding: 5px 10px;
    overflow-y: auto;
    word-break: break-word;
    height: ${({ isShow }) => (isShow ? '200px' : '0')};
    background: ${({ theme }) => theme.background};
    box-shadow: 0 0 4px 0 ${({ theme }) => theme.color};
    white-space: pre-wrap;
    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    ::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #333333;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
`;
