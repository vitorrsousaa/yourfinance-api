import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  height: 56px;
  flex-direction: row;
`;

interface ContainerValueProps {
  category: 'income' | 'outcome';
}

export const ContainerValue = styled.View<ContainerValueProps>`
  padding: 4px 8px;
  border-radius: 8px;
  background: ${({ theme, category }) =>
    category === 'income' ? theme.colors.blue[300] : theme.colors.error[300]};
`;

export const Content = styled.View`
  margin-left: 8px;
`;
