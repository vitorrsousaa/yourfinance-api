import styled from 'styled-components';

export const StyledNavLink = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  border-radius: 0.25rem;
  padding: 0.5rem;

  small {
    font-weight: 500;
  }

  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.white[100] : theme.colors.black[300]};

  &:hover {
    background: ${({ theme }) => theme.colors.black[800]};
  }

  @media screen and (max-width: 600px) {
    padding: 0.375rem;

    small {
      display: none;
    }
  }
`;
