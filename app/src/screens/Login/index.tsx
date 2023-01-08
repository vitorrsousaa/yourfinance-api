import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { Text } from '../../components/Text';
import { RootStackParams } from '../../routes/stack.routes';
import {
  Container,
  ContainerLogo,
  ContainerInputs,
  ContainerKeyboard,
} from './styles';

const Login = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

  function handleLoginUser() {
    navigate('Home');
  }

  function handleRegisterUser() {
    navigate('Register');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ContainerKeyboard behavior="padding">
        {/* <Container> */}
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
        {/* </Container> */}
      </ContainerKeyboard>
    </TouchableWithoutFeedback>
  );
};

export default Login;
