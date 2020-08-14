import styled from 'styled-components';
export const StyledInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    background: ${({ theme }) => theme.color};
    &::after {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  background: ${({ theme }) => theme.color};
  display: block;
  border-radius: 50px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 42%;
    height: 85%;
    background: ${({ theme }) => theme.background};
    border-radius: 50%;
    transition: 0.3s;
  }
`;
