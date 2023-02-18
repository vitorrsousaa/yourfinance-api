import Arrow from '../../assets/icons/arrow.svg';
import { Container, Content, Summary } from './styles';
import { useAuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { Transaction, TransactionsData } from '../../types/Transaction';
import TransactionsService from '../../services/TransactionsService';
import Loader from '../../components/Loader';
import formatAmount from '../../utils/formatAmount';

const Home = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setIsLoading(true);

    async function loadTransactions() {
      const dataTransactions: TransactionsData =
        await TransactionsService.list();

      setTransactions(dataTransactions.transactions);

      setIsLoading(false);
    }

    loadTransactions();
  }, []);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.category === 'Receitas') {
        acc.income += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
    }
  );

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Sidebar />

      <Content>
        <Header />

        <main>
          <div>
            <h1>Página inicial</h1>
            <h2>{user.name}</h2>
            <small>Acompanhe todas as suas finanças</small>
          </div>
        </main>

        <Summary>
          <h1>Resumo da sua vida financeira</h1>
          <div className="containerSummary">
            <div>
              <h3>Minhas receitas</h3>
              <strong>
                {formatAmount(summary.income > 0 ? summary.income : 0)}
              </strong>
            </div>
            <div>
              <h3>Minhas despesas</h3>
              <strong>
                {formatAmount(summary.outcome > 0 ? summary.outcome : 0)}
              </strong>
            </div>
          </div>
        </Summary>

        <div className="containerSections">
          <section>
            <header>
              <h1>Últimas transações</h1>
              <button>
                <small>Ver todas</small>
                <img src={Arrow} alt="Arrow" />
              </button>
            </header>
          </section>

          <section>
            <header>
              <h1>Meus cartões</h1>
              <button>
                <small>Ver todas</small>
                <img src={Arrow} alt="Arrow" />
              </button>
            </header>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
