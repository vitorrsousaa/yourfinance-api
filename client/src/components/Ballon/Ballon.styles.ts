import styled from 'styled-components';

export const BaseBallon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.75rem;
  height: 2.75rem;
  background: ${({ theme }) => theme.colors.white[100]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100%;
`;
