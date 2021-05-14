import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & img {
    height: 42px;
    margin-right: 8px;
  }

  & strong,
  & i {
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.87rem;
  }

  & strong {
    font-weight: 500;
  }

  & i {
    color: ${({ theme }) => theme.colors.app};

    user-select: none;
  }
`;
