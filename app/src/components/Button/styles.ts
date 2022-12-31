import styled from 'styled-components/native';

interface ContainerProps {
  disabled?: boolean;
  variant: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  background: ${({ variant, disabled }) =>
    disabled
      ? variant === 'primary'
        ? '#ccc'
        : '#fafafa'
      : variant === 'primary'
      ? '#395bfc'
      : '#fafafa'};

  border: ${({ variant, disabled }) =>
    disabled
      ? variant === 'primary'
        ? 'none'
        : '2px solid #CCCCCC'
      : variant === 'primary'
      ? 'none'
      : '2px solid #395BFC'};
`;
