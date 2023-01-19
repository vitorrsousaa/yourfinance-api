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

export const ContainerCategory = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const ContainerTransactions = styled.View`
  padding: 0 32px;
`;

export const HeaderContainerTransactions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
