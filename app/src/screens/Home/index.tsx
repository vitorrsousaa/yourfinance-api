import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Category from '../../components/Category';
import Notifications from '../../components/Notifications';
import { Text } from '../../components/Text';
import Transaction from '../../components/Transaction';

import { Arrow } from '../../assets/icons/Arrow';
import {
  Container,
  ContainerCategory,
  ContainerHeader,
  ContainerTransactions,
  Header,
  HeaderContainerTransactions,
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
        <Category type="income" />
        <Category type="outcome" />
        <Category type="card" />
      </ContainerCategory>

      <ContainerTransactions>
        <HeaderContainerTransactions>
          <Text>Últimas transações</Text>

          <TouchableOpacity>
            <Text>Ver todas</Text>
          </TouchableOpacity>
        </HeaderContainerTransactions>

        <Transaction
          description="Pagamento da Netflix"
          value="1254"
          category="income"
          date={Date.now()}
        />
        <Transaction
          description="Pagamento da Netflix"
          value="1254"
          category="outcome"
          date={Date.now() - 20}
        />
      </ContainerTransactions>
    </Container>
  );
};

export default Home;
