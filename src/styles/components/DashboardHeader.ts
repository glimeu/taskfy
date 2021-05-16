import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 24px 24px 0;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 48px;
    padding: 8px;

    background: ${({ theme }) => theme.colors.backgroundTwo};
    border: none;
    border-radius: 4px;

    color: ${({ theme }) => theme.colors.title};

    transition: all 0.15s;

    & svg {
      font-size: 1.33rem;
    }

    &:hover {
      opacity: 0.85;
    }
  }

  & > strong {
    margin-right: 12px;

    color: ${({ theme }) => theme.colors.title};
    font-size: 1.33rem;
  }

  & > img {
    position: relative;

    width: 48px;
    height: 48px;

    border-radius: 50%;

    object-fit: contain;
  }
`;
