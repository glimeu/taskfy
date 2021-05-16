import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  & form {
    display: flex;
    flex-direction: column;

    min-width: 375px;
    padding: 24px;

    background: ${({ theme }) => theme.colors.backgroundTwo};
    border-radius: 12px;

    & div:nth-child(1) {
      margin: 0 auto;
      margin-bottom: 48px;
    }

    & div.actions {
      display: flex;

      margin: 0 auto;
      margin-bottom: 12px;

      & button {
        margin-left: 12px;
      }
    }

    & > a {
      transition: opacity 0.15s;

      &:hover {
        text-decoration: underline;
        opacity: 0.95;
      }
    }
  }
`;
