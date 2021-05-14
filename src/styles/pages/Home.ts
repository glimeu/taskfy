import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;

  min-height: 100%;
  width: 100%;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1600px;
  margin: 0 64px;
`;

const Section = styled.section`
  display: flex;

  width: 100%;
  padding: 0 64px;
  margin-top: 64px;

  & > h2 {
    margin: 0 auto;

    color: ${({ theme }) => theme.colors.title};
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 2.93rem;
  }

  & > span {
    margin: 0 auto;
    margin-bottom: 48px;

    font-size: 1.2rem;
  }
`;

export const BannerSection = styled(Section)`
  align-items: center;
  justify-content: space-between;

  & main {
    display: flex;
    flex-direction: column;

    width: 50%;

    & h1 {
      max-width: 85%;

      color: ${({ theme }) => theme.colors.title};
      font-size: 4.27rem;
      font-weight: 600;
      line-height: 4.4rem;
    }

    & span {
      margin-top: 8px;

      font-size: 1.2rem;
    }

    & div {
      display: flex;

      margin-top: 24px;

      & a:first-child {
        margin-right: 16px;
      }
    }
  }

  & img {
    width: 45%;
  }
`;

export const PricingSection = styled(Section)`
  flex-direction: column;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 48px 24px;

    background: ${({ theme }) => theme.colors.backgroundTwo};
    border-radius: 12px;

    &:nth-child(1) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:nth-child(2) {
      padding: 96px 24px;

      background: ${({ theme }) => theme.colors.backgroundThree};
      box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.17);

      z-index: 1;
    }

    &:nth-child(3) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    & h4 {
      color: ${({ theme }) => theme.colors.title};
      font-weight: 500;
      font-size: 1.87rem;
    }

    & strong {
      display: flex;

      margin: 24px 0;

      color: ${({ theme }) => theme.colors.title};
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 2.87rem;

      & i {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.textOne};
      }

      & i:first-child {
        margin-right: 3px;
      }

      & i:last-child {
        margin-top: auto;
      }
    }

    & span {
      padding-top: 24px;
      margin-bottom: 48px;

      border-top: 1px solid rgba(0, 0, 0, 0.17);

      font-size: 1.2rem;
    }
  }
`;

export const HowItWorksSection = styled(Section)`
  flex-direction: column;
  align-items: center;

  & iframe {
    border-radius: 12px;
  }
`;

export const AboutAndContactSection = styled(Section)`
  flex-direction: column;

  & h2 {
    margin-bottom: 48px !important;
  }

  & > div > div,
  & > div > form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  & > div {
    display: flex;

    & div {
      margin-right: 64px;
    }
  }
`;
