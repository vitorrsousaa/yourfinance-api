import { TouchableOpacityProps } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  disabled?: boolean;
  variant: 'primary' | 'secondary';
}

const Button = ({ children, disabled, variant, ...rest }: ButtonProps) => {
  return (
    <Container disabled={disabled} variant={variant} {...rest}>
      <Text
        color={
          disabled
            ? variant === 'primary'
              ? '#fafafa'
              : '#cccccc'
            : variant === 'primary'
            ? '#fafafa'
            : '#395bfc'
        }
        weight="700"
      >
        {children}
      </Text>
    </Container>
  );
};

export default Button;
