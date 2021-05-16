import styled, { css } from 'styled-components';

const InvalidContainer = css`
  & span {
    color: red;
  }
`;

export const Container = styled.label<{ error?: boolean }>`
  display: flex;
  flex-direction: column;

  margin-bottom: 12px;

  & strong {
    margin-bottom: 4px;

    font-size: 1.2rem;
  }

  & textarea {
    max-width: 400px;
    min-width: 400px;
    max-height: 275px;
    min-height: 275px;
    padding: 12px;

    background: ${({ theme }) => theme.colors.backgroundThree};
    border: 2px solid rgba(255, 255, 255, 0.17);
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.textOne};
    font-size: 1.2rem;

    transition: color 0.15s;

    &:focus {
      color: ${({ theme }) => theme.colors.title};
    }
  }

  & span {
    margin-top: 4px;

    font-size: 0.93rem;
  }

  ${({ error }) => (error ? InvalidContainer : undefined)}
`;
