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
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Modality } from '../../types/Modality';
import ModalitiesService from '../../services/ModalitiesService';
import Ballon from '../../components/Ballon';
import LastTransactions from '../../components/LastTransacions';

type biggestModality = [
  {
    modality: string;
    amount: number;
  }
];

type amountByMonth = [
  {
    date: string;
    deposits: number;
    expenses: number;
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

  function getSummary(transactions: Transaction[]) {
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

    return summary;
  }

  const summary = getSummary(transactions);

  function getExpensesByModality(transactions: Transaction[]) {
    const addingExpenses = transactions.reduce<biggestModality>(
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
    );

    const ordenedBiggestExpenses = addingExpenses.sort((a, b) =>
      a.amount > b.amount ? -1 : 1
    );

    const biggestExpensesByModality = ordenedBiggestExpenses.slice(0, 5);

    return biggestExpensesByModality;
  }

  const biggestExpensesByModality = getExpensesByModality(transactions);

  function getAmountByMonth(transactions: Transaction[]) {
    const convertDate = transactions.map((transaction) => {
      const previousDate = new Date(transaction.createdAt);
      const timezoneOffset = previousDate.getTimezoneOffset() * 60 * 1000;
      const localDate = new Date(previousDate.getTime() + timezoneOffset);

      const date = new Date(localDate);

      const newDate = new Date(date.getFullYear(), date.getMonth(), 1);

      return {
        ...transaction,
        createdAt: newDate.toString(),
      };
    });

    const addingAmounts = convertDate.reduce<amountByMonth>(
      (acc: amountByMonth, transaction) => {
        const { amount, category, createdAt } = transaction;

        const dataExists = acc.find((item) => item.date === createdAt);

        if (dataExists) {
          if (category === 'Despesas') {
            dataExists.expenses += amount;
          } else {
            dataExists.deposits += amount;
          }
        } else {
          if (category === 'Despesas') {
            acc.push({ date: createdAt, expenses: amount, deposits: 0 });
          } else {
            acc.push({ date: createdAt, expenses: 0, deposits: amount });
          }
        }

        return acc;
      },
      [
        {
          date: '',
          deposits: 0,
          expenses: 0,
        },
      ]
    );

    const removeDateNull = addingAmounts.filter((amount) => amount.date !== '');

    const formatedAmounts = removeDateNull.map((amount) => {
      const { date, deposits, expenses } = amount;

      const dateInDate = new Date(date);

      const formatedDate = new Intl.DateTimeFormat('pt-br', {
        month: 'short',
        year: 'numeric',
      }).format(dateInDate);

      return {
        date: formatedDate,
        receita: deposits,
        despesa: expenses,
      };
    });

    const ordenedAmounts = formatedAmounts.sort((a, b) =>
      a.date > b.date ? -1 : 1
    );

    return ordenedAmounts;
  }

  const amountByMonth = getAmountByMonth(transactions);

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

        <section>
          <header>
            <h1>Fluxo Financeiro</h1>
            <button>
              <small>Últimos 6 meses</small>
              <img src={Arrow} alt="Arrow" />
            </button>
          </header>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={amountByMonth}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" fontSize="12px" />
              <YAxis
                tickFormatter={(value) =>
                  `R$ ${value.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`
                }
                fontSize="10px"
              />
              <CartesianGrid strokeDasharray="3 3" />

              <Area
                type="monotone"
                dataKey="receita"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="despesa"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
              <Tooltip formatter={(value: any) => formatAmount(value)} />
            </AreaChart>
          </ResponsiveContainer>
        </section>

        <div className="containerSections">
          <section>
            <header>
              <h1>Últimas transações</h1>
              <button>
                <small>Ver todas</small>
                <img src={Arrow} alt="Arrow" />
              </button>
            </header>
            {transactions.slice(0, 4).map((transaction) => (
              <LastTransactions
                key={transaction._id}
                category={transaction.category}
                icon={transaction.modality.icon}
                description={transaction.description}
                createdAt={transaction.createdAt}
                amount={transaction.amount}
              />
            ))}
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
              <PieChart width={360} height={290}>
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
                    <BiggestModalityContainer
                      key={`modality-${modalityExist?._id}`}
                    >
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
