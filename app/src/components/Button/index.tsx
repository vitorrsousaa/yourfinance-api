import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  variant: 'primary' | 'secondary';
}

const Button = ({ children, disabled, variant }: ButtonProps) => {
  return (
    <Container disabled={disabled} variant={variant}>
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
