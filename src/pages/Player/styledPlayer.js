import styled from 'styled-components';
import { Container } from 'components';
export const StyledContainer = styled(Container)`
  width: 70%;
  @media (max-width: ${({ theme }) => theme.rwd.table}) {
    width: 90%;
  }
`;
export const StyledYoutubeContainer = styled.div`
  .youtubeContainer {
    justify-content: flex-start;
    align-items: center;
    padding: 1.5%;
    display: ${({ ready }) => (ready ? 'flex' : 'none')};
  }
  iframe {
    height: ${({ videoHeight }) => `${videoHeight}px`};
    margin: 0 auto;
    width: 100%;
  }
`;
export const StyledDescription = styled.div`
  padding: 0 1.5% 6rem;
  > div {
    white-space: pre-wrap;
  }
`;
