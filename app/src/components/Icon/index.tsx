import { TouchableOpacityProps } from 'react-native';
import { Arrow } from '../../assets/icons/Arrow';
import { Text } from '../Text';
import { Container } from './styles';

interface IconProps extends TouchableOpacityProps {
  type:
    | 'arrow'
    | 'payments'
    | 'withdrawn'
    | 'card'
    | 'health'
    | 'habitation'
    | 'personalExpenses'
    | 'recreation'
    | 'education'
    | 'investments';
}

const Icon = ({ type, ...rest }: IconProps) => {
  const types = {
    arrow: '',
    payments: '💵',
    withdrawn: '💸',
    card: '💳',
    health: '❤',
    habitation: '🏘',
    personalExpenses: '🧍‍♂',
    recreation: '🛒',
    education: '📚',
    investments: '💰',
  };

  return (
    <Container {...rest}>
      {types[type].length > 0 ? (
        <Text size={32}>{types[type]}</Text>
      ) : (
        <Arrow side="left" />
      )}
    </Container>
  );
};

export default Icon;
