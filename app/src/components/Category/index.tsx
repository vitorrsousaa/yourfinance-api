import Icon from '../Icon';
import { Text } from '../Text';
import { Container } from './styles';

interface CategoryProps {
  type: 'payments' | 'withdrawn' | 'card';
}

const Category = ({ type }: CategoryProps) => {
  const title = {
    payments: 'Receitas',
    withdrawn: 'Despesas',
    card: 'Meus cartões',
  };

  return (
    <Container>
      <Icon type={type} />
      <Text size={12} weight="700" style={{ marginTop: 4 }}>
        {title[type]}
      </Text>
    </Container>
  );
};

export default Category;
