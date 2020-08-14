import styled from 'styled-components';
import { spinAnimation } from 'utility';

export const StyledSpiner = styled.img`
  width: 50%;
  animation: ${spinAnimation};
  margin: 0 auto;
  display: block;
`;
