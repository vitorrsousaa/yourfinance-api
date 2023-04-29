import { TCategory } from '../../../../entities/category/TCategory';
import { TTransaction } from '../../../../entities/transaction/TTransaction';
import TransactionRepository from '../../../Transaction/repositories/implementation/TransactionRepository';

interface TMonthlySum {
  date: string;
  income: number;
  outcome: number;
}

function convertDateList(transactions: (TTransaction & {
  Category: TCategory
})[]) {
  const convertDate = transactions.map((transaction) => {
    const previousDate = new Date(transaction.date);
    const timezoneOffset = previousDate.getTimezoneOffset() * 60 * 1000;
    const localDate = new Date(previousDate.getTime() + timezoneOffset);

    const date = new Date(localDate);

    const newDate = new Date(date.getFullYear(), date.getMonth(), 1);

    return {
      ...transaction,
      date: newDate.toString(),
    };
  });

  return convertDate;
}

export default async function SumTotalAmountByMonth(userId: string) {
  const transactions = await TransactionRepository.findAllTransactionsByUser(userId);
  const convertDate = convertDateList(transactions!);

  const addingAmounts = convertDate.reduce(
    (acc, transaction) => {
      const { amount, Category, date } = transaction;

      const dataExists = acc.find((item) => item.date === String(date));

      if (dataExists) {
        if ((Category as TCategory).name === 'Despesas') {
          dataExists.outcome += amount;
        } else {
          dataExists.income += amount;
        }
      } else {
        if ((Category as TCategory).name === 'Despesas') {
          acc.push({ date: String(date), outcome: amount, income: 0 });
        } else {
          acc.push({ date: String(date), outcome: 0, income: amount });
        }
      }

      return acc;
    },
    [
      {
        date: '',
        income: 0,
        outcome: 0,
      },
    ]
  );

  const removeDateNull = addingAmounts.filter((amount) => amount.date !== '');

  const ordenedAmounts = removeDateNull.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? 1 : -1
  );

  const formatedAmounts = ordenedAmounts.map((amount) => {
    const { date, income, outcome } = amount;

    const dateInDate = new Date(date);

    return {
      date: dateInDate,
      income,
      outcome,
    };
  });

  const sumByMonth = formatedAmounts.reduce((accumulator: {[key: string]: TMonthlySum}, { date, income, outcome }) => {
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    const monthYear = `${month}/${year}`;

    if (!accumulator[monthYear]) {
      accumulator[monthYear] = {
        date: monthYear,
        income: income,
        outcome: outcome
      };
    } else {
      accumulator[monthYear].income += income;
      accumulator[monthYear].outcome += outcome;
    }

    return accumulator;
  }, {});

  const monthlySummaryArray = Object.values(sumByMonth).map(({ date, income, outcome }) => ({
    date,
    income,
    outcome,
  }));

  return monthlySummaryArray;
}
