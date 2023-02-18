import Arrow from '../../assets/icons/arrow.svg';
import {
  BiggestModalityContainer,
  Container,
  Content,
  Summary,
} from './styles';
import { useAuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { Transaction, TransactionsData } from '../../types/Transaction';
import TransactionsService from '../../services/TransactionsService';
import Loader from '../../components/Loader';
import formatAmount from '../../utils/formatAmount';
import { Cell, Pie, PieChart } from 'recharts';
import { Modality } from '../../types/Modality';
import ModalitiesService from '../../services/ModalitiesService';
import Ballon from '../../components/Ballon';

type biggestModality = [
  {
    modality: string;
    amount: number;
  }
];

const COLORS = ['#0D2535', '#5388D8', '#F4BE37', '#FF8042'];

const Home = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [modalities, setModalities] = useState<Modality[]>([]);

  useEffect(() => {
    setIsLoading(true);

    async function loadTransactions() {
      const dataTransactions: TransactionsData =
        await TransactionsService.list();

      const dataModality = await ModalitiesService.list();

      setTransactions(dataTransactions.transactions);
      setModalities(dataModality);

      setIsLoading(false);
    }

    loadTransactions();
  }, []);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.category === 'Receitas') {
        acc.deposits += transaction.amount;
      } else {
        acc.expenses += transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      expenses: 0,
    }
  );

  const biggestExpensesByModality = transactions
    .reduce<biggestModality>(
      (acc: biggestModality, transaction) => {
        const { modality, amount, category } = transaction;

        if (category === 'Despesas') {
          const existingModality = acc.find(
            (item) => item.modality === modality._id
          );

          if (existingModality) {
            existingModality.amount += amount;
          } else {
            acc.push({ modality: modality._id, amount });
          }

          return acc;
        }

        return acc;
      },
      [{ modality: '', amount: 0 }]
    )
    .sort((a, b) => (a.amount > b.amount ? -1 : 1))
    .slice(0, 5);

  console.log(modalities);

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
                {formatAmount(summary.deposits > 0 ? summary.deposits : 0)}
              </strong>
            </div>
            <div>
              <h3>Minhas despesas</h3>
              <strong>
                {formatAmount(summary.expenses > 0 ? summary.expenses : 0)}
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
              <h1>Maiores despesas</h1>
              <button>
                <small>Ver todas</small>
                <img src={Arrow} alt="Arrow" />
              </button>
            </header>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <PieChart width={360} height={300}>
                <Pie
                  data={biggestExpensesByModality}
                  dataKey="amount"
                  cx={150}
                  innerRadius={60}
                  // paddingAngle={3}
                  fill="#82ca9d"
                >
                  {biggestExpensesByModality.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div style={{ width: '100%', height: '100%' }}>
                {biggestExpensesByModality.map((biggest) => {
                  const modalityExist = modalities.find(
                    (modality) => modality._id === biggest.modality
                  );

                  return (
                    <BiggestModalityContainer key={modalityExist?._id}>
                      <Ballon>{modalityExist?.icon}</Ballon>
                      <h6>{modalityExist?.name}</h6>
                    </BiggestModalityContainer>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
