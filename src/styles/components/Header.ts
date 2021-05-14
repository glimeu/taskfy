import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1600px;
  height: 80px;
  margin: 0 64px;

  & div:first-child {
    margin-right: 24px;
  }

  & nav {
    display: flex;

    margin-right: auto;
  }
`;

const NavItemActive = css`
  color: ${({ theme }) => theme.colors.app};

  &:hover {
    opacity: 1;
  }
`;

export const NavItem = styled.a<{ active?: boolean }>`
  margin-right: 24px;
  padding: 8px 12px;

  font-size: 1.2rem;

  &:hover {
    opacity: 0.85;
  }

  &:last-child {
    margin-right: 0;
  }

  ${({ active }) => active && NavItemActive};
`;

export const AuthContainer = styled.div`
  display: flex;

  & a:first-child {
    margin-right: 16px;
  }
`;
