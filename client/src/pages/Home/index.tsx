import Arrow from '../../assets/icons/arrow.svg';
import {
  BiggestModalityContainer,
  Container,
  Content,
  Summary,
} from './styles';
import { useAuthContext } from '../../context/AuthContext';
import Header from '../../components/Header';
import { BaseSyntheticEvent, useEffect, useMemo, useState } from 'react';
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
import LastTransactions from '../../components/LastTransactions';
import transactionsMock from '../../mocks/transactions';
import { convertDateList, formatShortDate } from '../../utils/formatDate';
import { useTheme } from 'styled-components';

type biggestModality = [
  {
    modality: string;
    amount: number;
  }
];

type amountByMonth = [
  {
    date: string | Date;
    deposits: number;
    expenses: number;
  }
];

const COLORS = ['#0D2535', '#5388D8', '#F4BE37', '#FF8042'];

const options = [
  {
    value: 3,
    label: 'Últimos 3 meses',
  },
  {
    value: 6,
    label: 'Últimos 6 meses',
  },
  {
    value: 12,
    label: 'Últimos 12 meses',
  },
  {
    value: 24,
    label: 'Ver todas',
  },
];

const Home2 = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [modalities, setModalities] = useState<Modality[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(3);
  const [selectedExpenses, setSelectedExpenses] = useState(3);
  const [animationExpensesComplete, setAnimationExpensesComplete] =
    useState(false);

  const { colors } = useTheme();

  useEffect(() => {
    setIsLoading(true);

    async function loadTransactions() {
      const dataTransactions: TransactionsData =
        await TransactionsService.list();

      const dataModality = await ModalitiesService.list();

      setTransactions(dataTransactions.transactions);
      // setTransactions(transactionsMock);
      setModalities(dataModality);

      setIsLoading(false);
    }

    loadTransactions();
  }, []);

  function onAnimationEnd() {
    setAnimationExpensesComplete(true);
  }

  function getSummary(transactions: Transaction[]) {
    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.category === 'Receitas') {
          acc.deposits += transaction.amount;
        } else {
          if (transaction.modality.name === 'Cartões') {
            acc.credit += transaction.amount;
          } else {
            acc.expenses += transaction.amount;
          }
        }

        return acc;
      },
      {
        deposits: 0,
        expenses: 0,
        credit: 0,
      }
    );

    return summary;
  }

  function getExpensesByModality(transactions: Transaction[]) {
    const selectedTransactions = transactions.filter((transaction) => {
      const today = new Date();
      const lastMonth = new Date(
        today.getFullYear(),
        today.getMonth() - selectedExpenses,
        today.getDate()
      );

      const transactionDate = new Date(transaction.createdAt);

      return transactionDate >= lastMonth;
    });

    const addingExpenses = selectedTransactions.reduce<biggestModality>(
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

  function getAmountByMonth(transactions: Transaction[]) {
    const convertDate = convertDateList(transactions);

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

    const ordenedAmounts = removeDateNull.sort((a, b) =>
      new Date(a.date) > new Date(b.date) ? 1 : -1
    );

    const formatedAmounts = ordenedAmounts.map((amount) => {
      const { date, deposits, expenses } = amount;

      const dateInDate = new Date(date);

      return {
        date: dateInDate,
        receita: deposits,
        despesa: expenses,
      };
    });

    return formatedAmounts;
  }

  const summary = useMemo(() => getSummary(transactions), [transactions]);

  const biggestExpensesByModality = useMemo(
    () => getExpensesByModality(transactions),
    [transactions, selectedExpenses]
  );

  const amountByMonth = useMemo(
    () => getAmountByMonth(transactions),
    [transactions, selectedMonth]
  );

  function handleSelectedExpenses(event: BaseSyntheticEvent) {
    setSelectedExpenses(event.target.value);
  }

  function handleSelectedMonth(event: BaseSyntheticEvent) {
    setSelectedMonth(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} variant="large" />

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
              <h3>Receitas</h3>
              <strong>
                {formatAmount(summary.deposits > 0 ? summary.deposits : 0)}
              </strong>
            </div>
            <div>
              <h3>Despesas</h3>
              <strong>
                {formatAmount(summary.expenses > 0 ? summary.expenses : 0)}
              </strong>
            </div>
            <div>
              <h3>Cartões</h3>
              <strong>
                {formatAmount(summary.expenses > 0 ? summary.expenses : 0)}
              </strong>
            </div>
          </div>
        </Summary>

        <section>
          <header>
            <h1>Fluxo Financeiro</h1>

            <select value={selectedMonth} onChange={handleSelectedMonth}>
              {options.map((option) => (
                <option
                  value={option.value}
                  key={`${option.label}_${option.value}`}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </header>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={amountByMonth.filter((byMonth) => {
                const today = new Date();

                const lastMonth = new Date(
                  today.getFullYear(),
                  today.getMonth() - selectedMonth + 1,
                  1
                );

                const byMonthDate = new Date(byMonth.date);
                const byMonthTime = byMonthDate.getTime();
                const lastMonthTime = lastMonth.getTime();

                return byMonthTime >= lastMonthTime;
              })}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={colors.blue[900]}
                    stopOpacity={0.6}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.blue[700]}
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={colors.error[900]}
                    stopOpacity={0.6}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.error[700]}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                fontSize="12px"
                tickFormatter={(value) => formatShortDate(value)}
              />
              <YAxis
                tickFormatter={(value) => formatAmount(value)}
                fontSize="10px"
              />
              <CartesianGrid strokeDasharray="3 3" />

              <Area
                type="monotone"
                dataKey="receita"
                stroke={colors.blue[900]}
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="despesa"
                stroke={colors.error[900]}
                fillOpacity={1}
                fill="url(#colorPv)"
              />
              <Tooltip
                formatter={(value: any) => formatAmount(value)}
                labelFormatter={(label) => formatShortDate(label)}
              />
            </AreaChart>
          </ResponsiveContainer>
        </section>

        <div className="containerSections">
          <section>
            <header>
              <h1>Últimas transações</h1>
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
              <h1>Despesas por categorias</h1>
              <select
                value={selectedExpenses}
                onChange={handleSelectedExpenses}
              >
                {options.map((option) => (
                  <option
                    value={option.value}
                    key={`${option.label}_${option.value}`}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </header>
            <div className="containerPieChart">
              <ResponsiveContainer width="100%" height={290}>
                <PieChart width={360}>
                  <Pie
                    data={biggestExpensesByModality}
                    dataKey="amount"
                    nameKey="modality"
                    cx={150}
                    innerRadius={60}
                    fill="#82ca9d"
                    onAnimationEnd={onAnimationEnd}
                    animationDuration={2000}
                  >
                    {biggestExpensesByModality.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any, name) => {
                      const modality = modalities.find(
                        (modality) => modality._id === name
                      );

                      return [formatAmount(value), modality?.name];
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div
                className={`containerModalityPieChart ${
                  animationExpensesComplete && 'show'
                }`}
              >
                {animationExpensesComplete &&
                  biggestExpensesByModality.map((biggest) => {
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

export default Home2;
