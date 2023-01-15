import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../components/Text';
import { Container, Header } from './styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <Text size={20} color="#FAFAFA">
          Olá,{' '}
          <Text weight="700" color="#FAFAFA" size={20}>
            Vitor
          </Text>
        </Text>
        <TouchableOpacity>
          <Text>clique aqui</Text>
        </TouchableOpacity>
      </Header>

      <View>
        <Text>Minha receita</Text>
        <Text>R$ 12.253,70 </Text>
      </View>

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
