import styled from 'styled-components/native';

export const Container = styled.View``;

export const ContainerHeader = styled.View`
  height: 100px;
  background: ${({ theme }) => theme.colors.blue[900]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px 0 32px;
`;

export const Header = styled.View`
  flex-direction: row;
`;
