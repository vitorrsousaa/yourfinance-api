import { useNavigation } from '@react-navigation/native';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { Separator } from '../../components/Separator';
import { Text } from '../../components/Text';
import { Container, ContainerLogo, ContainerInputs, Teste } from './styles';

const Login = () => {
  const { navigate } = useNavigation();

  function handleLoginUser() {
    console.log('Usuário logando');
  }

  function handleRegisterUser() {
    navigate('Register');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Teste behavior="padding">
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
            <Input
              placeholder="Seu email de acesso"
              type="email"
              category="email"
              error=""
            />

            <Input
              placeholder="Sua senha de acesso"
              category="password"
              error=""
            />
          </ContainerInputs>

          <Text>Esqueceu sua senha?</Text>
          <Button variant="primary" onPress={() => handleLoginUser()}>
            Fazer login
          </Button>
          <Text>
            Ainda não tem uma conta?{' '}
            <Text
              color="#395bfc"
              weight="700"
              onPress={() => handleRegisterUser()}
            >
              Registre-se
            </Text>
          </Text>
        </Container>
      </Teste>
    </TouchableWithoutFeedback>
  );
};

export default Login;
