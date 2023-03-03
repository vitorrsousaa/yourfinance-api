import { useMemo } from 'react';

import { Transaction } from '../../../../types/Transaction';

import {
  BarChartView,
  BarChartViewProps,
  IncomeByMonth,
} from './BarChart.view';

import { convertDateList } from '../../../../utils/formatDate';
import transactionsMock from '../../../../mocks/transactions';

interface BarChart extends Omit<BarChartViewProps, 'data'> {
  transactions: Transaction[];
}

export function BarChart({ transactions, ...props }: BarChart) {
  function getFormatedData(data: Transaction[]) {
    const convertDate = convertDateList(data);

    const addingAmounts = convertDate.reduce<IncomeByMonth[]>(
      (acc: IncomeByMonth[], transaction) => {
        const { amount, createdAt, category } = transaction;

        const dateExists = acc.find((item) => item.date === createdAt);

        if (category === 'Receitas') {
          if (dateExists) {
            dateExists.income += amount;
          } else {
            acc.push({
              date: createdAt,
              income: amount,
            });
          }
        }

        return acc;
      },
      [
        {
          date: '',
          income: 0,
        },
      ]
    );

    const removeDateNull = addingAmounts.filter((amount) => amount.date !== '');

    const ordenedAmounts = removeDateNull.sort((a, b) =>
      new Date(a.date) > new Date(b.date) ? 1 : -1
    );

    return ordenedAmounts;
  }

  const formatedData = useMemo(
    () => getFormatedData(transactionsMock),
    [transactions]
  );

  return <BarChartView data={formatedData} {...props} />;
}
