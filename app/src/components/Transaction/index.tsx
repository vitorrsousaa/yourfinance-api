import { useTheme } from 'styled-components/native';
import { View } from 'react-native';

import { Text } from '../Text';
import Icon from '../Icon';
import { Container, ContainerValue, Content } from './styles';
import { formatDate } from '../../utils/formatDate';

interface TransactionProps {
  description: string;
  category: 'income' | 'outcome';
  value: string;
  date: number;
}

const Transaction = ({
  description,
  category,
  value,
  date,
}: TransactionProps) => {
  const { colors } = useTheme();
  const categories = {
    income: 'Receitas',
    outcome: 'Despesas',
  };

  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <Icon modality="education" />
        <Content>
          <Text weight="700" color={colors.black[900]}>
            {categories[category]}
          </Text>
          <Text color={colors.black[500]}>{description}</Text>
          <Text color={colors.black[500]}>{formatDate(date)}</Text>
        </Content>
      </View>
      <ContainerValue category={category}>
        <Text color={colors.black[800]} weight="700">
          R$ {value}
        </Text>
      </ContainerValue>
    </Container>
  );
};

export default Transaction;
