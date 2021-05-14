import styled, { css } from 'styled-components';

const PrimaryButton = css`
  background: ${({ theme }) => theme.colors.app};
  border-color: ${({ theme }) => theme.colors.app};

  color: ${({ theme }) => theme.colors.title};
`;

const DisabledButton = css`
  opacity: 0.5;
  cursor: not-allowed;

  &:hover {
    opacity: 0.5;
  }
`;

export const Container = styled.button<{ primary?: boolean }>`
  display: flex;
  align-items: center;

  padding: 8px 16px;

  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.title};
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.title};
  font-size: 1.2rem;

  transition: all 0.15s;

  &:hover {
    opacity: 0.85;
  }

  & svg {
    margin-right: 3px;
  }

  ${({ primary }) => (primary ? PrimaryButton : null)};
  ${({ disabled }) => (disabled ? DisabledButton : null)};
`;
