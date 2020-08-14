import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.rwd.pcMaxContent};
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.rwd.table}) {
    max-width: ${({ theme }) => theme.rwd.tableMaxContent};
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.rwd.phone}) {
    max-width: ${({ theme }) => theme.rwd.phoneMaxContent};
  }
`;
