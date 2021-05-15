import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;
  padding-right: 0;

  & > div:first-child {
    margin: 0 auto;
    margin-bottom: 64px;
  }

  & nav {
    display: flex;
    flex-direction: column;

    margin-bottom: 48px;

    & a {
      display: flex;
      align-items: center;

      margin-bottom: 4px;
      padding: 12px 16px;

      border-radius: 8px;

      color: ${({ theme }) => theme.colors.title};
      font-size: 1.2rem;

      transition: background 0.1s;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.07);
      }

      &.active {
        background: rgba(255, 255, 255, 0.07);

        color: ${({ theme }) => theme.colors.app};
      }

      & svg {
        margin-right: 8px;

        font-size: 1.33rem;
      }
    }
  }

  & > a {
    width: max-content;
    margin-top: auto;
  }
`;
