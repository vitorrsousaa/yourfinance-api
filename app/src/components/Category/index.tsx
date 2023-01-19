import Icon from '../Icon';
import { Text } from '../Text';
import { Container } from './styles';

interface CategoryProps {
  type: 'income' | 'outcome' | 'card';
}

const Category = ({ type }: CategoryProps) => {
  const title = {
    income: 'Receitas',
    outcome: 'Despesas',
    card: 'Meus cartões',
  };

  return (
    <Container>
      <Icon modality={type} />
      <Text size={12} weight="700" style={{ marginTop: 4 }}>
        {title[type]}
      </Text>
    </Container>
  );
};

export default Category;
