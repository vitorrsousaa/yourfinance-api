import styled from 'styled-components';

export const StyledOption = styled.select`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.black[200]};
  font-size: 0.75rem;
`;
