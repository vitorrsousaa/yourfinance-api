import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Input from '../../components/Input';

import { Text } from '../../components/Text';
import {
  Container,
  ContainerFooter,
  ContainerInput,
  ContainerText,
  ContentText,
} from './styles';

const Register = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ContainerText>
          <Icon onPress={() => goBack()} type="arrow" />

          <ContentText>
            <Text weight="700" size={28}>
              Registre-se
            </Text>
            <Text>Crie sua conta</Text>
          </ContentText>
        </ContainerText>

        <ContainerInput>
          <Input placeholder="Seu nome completo" error="" category="person" />

          <Input
            placeholder="Seu e-mail de acesso"
            error=""
            category="email"
            type="email"
          />
          <Input
            placeholder="Sua senha de acesso"
            error=""
            category="password"
          />
          <Input
            placeholder="Confirmação de senha"
            error=""
            category="password"
          />
        </ContainerInput>

        <Button variant="primary">Criar conta</Button>
        <ContainerFooter>
          <Text>Já possui uma conta?</Text>
          <Text color="#395bfc" weight="700" onPress={() => goBack()}>
            {' '}
            Faça login
          </Text>
        </ContainerFooter>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
