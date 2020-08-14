import { css, keyframes } from 'styled-components';
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const spinAnimation = css`
  ${spin} infinite 3s linear
`;
