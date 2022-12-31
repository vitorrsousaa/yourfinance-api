import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';

import Input from '../../components/Input';
import { Text } from '../../components/Text';
import { Container, ContainerLogo, ContainerInputs } from './styles';

const Login = () => {
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

        <Input placeholder="Sua senha de acesso" category="password" error="" />
      </ContainerInputs>

      <Text>Esqueceu sua senha?</Text>
      <Button variant="primary">Fazer login</Button>
      <Text>
        Ainda não tem uma conta?{' '}
        <Text color="#395bfc" weight="700">
          Registre-se
        </Text>
      </Text>
    </Container>
  );
};

export default Login;
