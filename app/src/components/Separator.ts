import styled from 'styled-components/native';

interface SeparatorProps {
  size?: number;
}

export const Separator = styled.View<SeparatorProps>`
  margin-top: ${({ size }) => (size ? `${size}px` : '24px')};
`;
