import styled from 'styled-components';

export const StyledNavLink = styled.div<{ isActive: boolean }>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.white[100] : theme.colors.black[300]};

  width: 100%;
  border-radius: 4px;
  padding: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.black[700]};
  }
`;
