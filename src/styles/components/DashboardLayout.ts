import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 275px auto;
  grid-template-rows: max-content auto;
  grid-template-areas:
    'sb he'
    'sb ma';

  width: 100vw;
  height: 100vh;

  & > div:nth-child(1) {
    grid-area: sb;
  }

  & > div:nth-child(2) {
    grid-area: he;
  }

  & main {
    display: flex;

    margin: 24px;
    padding: 24px;

    background: ${({ theme }) => theme.colors.backgroundTwo};
    border-radius: 16px;
  }
`;
