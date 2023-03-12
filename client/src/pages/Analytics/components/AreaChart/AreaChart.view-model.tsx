import { BaseSyntheticEvent, useMemo, useState } from 'react';
import { Transaction } from '../../../../types/Transaction';
import { convertDateList } from '../../../../utils/formatDate';

export interface AreaChartViewModelProps {
  selectedMonth: number;
  handleChangeMonth: (event: BaseSyntheticEvent) => void;
  amountByMonth: { date: string | Date; receita: number; despesa: number }[];
}

export function AreaChartViewModel(transactions: Transaction[]) {
  const [selectedMonth, setSelectedMonth] = useState(3);

  function getAmountByMonth(transactions: Transaction[]) {
    const convertDate = convertDateList(transactions);

    const addingAmounts = convertDate.reduce(
      (acc, transaction) => {
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

    const formatedAmountByFiltered = formatedAmounts.filter((byMonth) => {
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
    });

    return formatedAmountByFiltered;
  }

  function handleChangeMonth(event: BaseSyntheticEvent) {
    setSelectedMonth(parseInt(event.target.value));
  }

  const amountByMonth = useMemo(
    () => getAmountByMonth(transactions),
    [transactions, selectedMonth]
  );

  return {
    selectedMonth,
    setSelectedMonth,
    amountByMonth,
    handleChangeMonth,
  };
}
