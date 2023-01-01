import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { Separator } from '../../components/Separator';
import { Text } from '../../components/Text';
import { Container, ContainerLogo, ContainerInputs } from './styles';

const Login = () => {
  const { navigate } = useNavigation();

  function handleLoginUser() {
    console.log('Usuário logando');
  }

  function handleRegisterUser() {
    navigate('Register');
  }

  return (
    <Container>
      <ContainerLogo>
        <Text>Bem-vindo(a) ao</Text>
        <Text size={32} weight="800">
          EASY
          <Text size={32} weight="300">
            FINANCE
          </Text>
        </Text>
      </ContainerLogo>

      <ContainerInputs>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Input
            placeholder="Seu email de acesso"
            type="email"
            category="email"
            error=""
          />
        </TouchableWithoutFeedback>
        <Separator />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Input
            placeholder="Sua senha de acesso"
            category="password"
            error=""
          />
        </TouchableWithoutFeedback>
      </ContainerInputs>

      <Text>Esqueceu sua senha?</Text>
      <Button variant="primary" onPress={() => handleLoginUser()}>
        Fazer login
      </Button>
      <Text>
        Ainda não tem uma conta?{' '}
        <Text color="#395bfc" weight="700" onPress={() => handleRegisterUser()}>
          Registre-se
        </Text>
      </Text>
    </Container>
  );
};

export default Login;
