import { Alert, Container } from './styles';
import { Text } from '../Text';
import { TouchableOpacityProps } from 'react-native';

interface NotificationProps extends TouchableOpacityProps {
  active?: boolean;
}

const Notifications = ({ active }: NotificationProps) => {
  return (
    <Container>
      <Text size={24}>🔔</Text>
      {active && <Alert />}
    </Container>
  );
};

export default Notifications;
