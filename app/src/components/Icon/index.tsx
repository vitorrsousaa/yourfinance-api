import { TouchableOpacityProps } from 'react-native';
import { Arrow } from '../../assets/icons/Arrow';
import { Text } from '../Text';
import { Container } from './styles';

interface IconProps extends TouchableOpacityProps {
  modality:
    | 'arrow'
    | 'income'
    | 'outcome'
    | 'card'
    | 'health'
    | 'habitation'
    | 'personalExpenses'
    | 'recreation'
    | 'education'
    | 'investments';
}

const Icon = ({ modality, ...rest }: IconProps) => {
  const modalities = {
    arrow: '',
    income: '💵',
    outcome: '💸',
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
      {modalities[modality].length > 0 ? (
        <Text size={32}>{modalities[modality]}</Text>
      ) : (
        <Arrow side="left" />
      )}
    </Container>
  );
};

export default Icon;
