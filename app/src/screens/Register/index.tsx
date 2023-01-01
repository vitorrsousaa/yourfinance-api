import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Separator } from '../../components/Separator';
import { Text } from '../../components/Text';
import {
  Container,
  ContainerFooter,
  ContainerInput,
  ContainerText,
} from './styles';

const Register = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>arrow</Text>
      </TouchableOpacity>
      <ContainerText>
        <Text weight="700" size={28}>
          Registre-se
        </Text>
        <Text>Crie sua conta</Text>
      </ContainerText>

      <ContainerInput>
        <Separator size={32} />
        <Input placeholder="Seu nome completo" error="" category="person" />
        <Separator size={32} />
        <Input
          placeholder="Seu e-mail de acesso"
          error=""
          category="email"
          type="email"
        />
        <Separator size={32} />
        <Input placeholder="Sua senha de acesso" error="" category="password" />
        <Separator size={32} />
        <Input
          placeholder="Confirmação de senha"
          error=""
          category="password"
        />
        <Separator size={32} />
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
  );
};

export default Register;
