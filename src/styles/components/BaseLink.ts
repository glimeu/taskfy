import styled, { css } from 'styled-components';

const PrimaryBaseLink = css`
  background: ${({ theme }) => theme.colors.app};
  border-color: ${({ theme }) => theme.colors.app};

  color: ${({ theme }) => theme.colors.title};
`;

const TextBaseLink = css`
  background: transparent;
  border-color: transparent;

  color: ${({ theme }) => theme.colors.title};
`;

const DisabledBaseLink = css`
  opacity: 0.5;
  cursor: not-allowed;

  &:hover {
    opacity: 0.5;
  }
`;

interface BaseLinkProps {
  primary?: boolean;
  disabled?: boolean;
  text?: boolean;
}

export const Container = styled.a<BaseLinkProps>`
  display: flex;
  align-items: center;

  padding: 8px 16px;

  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.title};
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.title};
  font-size: 1.2rem;

  transition: all 0.15s;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  & svg {
    margin-right: 3px;
  }

  ${({ text }) => (text ? TextBaseLink : null)};
  ${({ primary }) => (primary ? PrimaryBaseLink : null)};
  ${({ disabled }) => (disabled ? DisabledBaseLink : null)};
`;
