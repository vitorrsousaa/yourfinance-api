import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Arrow } from '../../assets/icons/Arrow';
import Category from '../../components/Category';
import Icon from '../../components/Icon';
import Notifications from '../../components/Notifications';
import { Text } from '../../components/Text';
import {
  Container,
  ContainerCategory,
  ContainerHeader,
  Header,
} from './styles';

const Home = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ContainerHeader>
        <Header>
          <Text size={20} color={colors.white[100]} style={{ marginRight: 24 }}>
            Olá,{' '}
            <Text weight="700" color={colors.white[100]} size={20}>
              Vitor
            </Text>
          </Text>
          <TouchableOpacity>
            <Arrow color={colors.white[100]} side="down" />
          </TouchableOpacity>
        </Header>
        <Notifications active={true} />
      </ContainerHeader>

      <View>
        <Text size={14}>Minha receita</Text>
        <Text size={36} weight="700">
          R$ 12.253,70{' '}
        </Text>
      </View>

      <ContainerCategory>
        <Category type="payments" />
        <Category type="withdrawn" />
        <Category type="card" />
      </ContainerCategory>

      <View>
        <Text>Despesas</Text>
        <TouchableOpacity>
          <Text>clique aqui</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Receitas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Despesas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Meus cartões</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <Text>Últimas transações</Text>

          <TouchableOpacity>
            <Text>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <Text>Despesas</Text>
            <Text>Netflix</Text>
            <Text>12/05/2022</Text>
          </View>
          <Text>R$ 150,00</Text>
        </View>
      </View>
    </Container>
  );
};

export default Home;
