import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 24px 24px 0;

  & > button {
    margin-right: 48px;
    padding: 8px;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.colors.title};

    & svg {
      font-size: 1.33rem;
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
