import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 128px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1600px;
  margin: 0 64px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  & > div:first-child {
    display: flex;
    flex-direction: column;

    max-width: 35%;
    margin-right: 48px;

    & > span {
      margin-top: 8px;

      font-size: 1.2rem;
    }
  }

  & div:last-child {
    display: flex;

    & a:first-child {
      margin-right: 16px;
    }

    & img {
      height: 64px;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
  padding-top: 24px;

  border-top: 1px solid rgba(255, 255, 255, 0.17);

  & strong {
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.2rem;
  }

  & nav {
    display: flex;

    & a {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 8px;
      padding: 6px;

      color: ${({ theme }) => theme.colors.title};

      transition: all 0.15s;

      &:hover {
        opacity: 0.85;
      }
    }
  }
`;
