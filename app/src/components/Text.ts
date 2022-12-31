import styled from 'styled-components/native';

interface TextProps {
  weight?: '300' | '400' | '500' | '700' | '800';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) =>
    weight ? `Manrope-${weight}` : 'Manrope-400'};
  color: ${({ color }) => color || '#2d2d2d'};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  opacity: ${({ opacity }) => opacity || 1};
`;
