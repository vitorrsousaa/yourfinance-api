import styled from 'styled-components';

export const StyledNavLink = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  border-radius: 4px;
  padding: 8px;

  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.white[100] : theme.colors.black[300]};

  &:hover {
    background: ${({ theme }) => theme.colors.black[700]};
  }
`;
