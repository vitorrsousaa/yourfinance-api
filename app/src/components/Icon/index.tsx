import { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

interface IconProps extends TouchableOpacityProps {
  children: ReactElement;
}

const Icon = ({ children, ...rest }: IconProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default Icon;
