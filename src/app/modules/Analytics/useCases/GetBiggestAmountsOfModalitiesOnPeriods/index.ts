import { sub } from 'date-fns';

import TransactionRepository from '../../../Transaction/repositories/implementation/TransactionRepository';
import { getMonthDiff, getPeriod } from './funcs/datesManipulate';
import { ManipulateModalities } from './funcs/manipulateModalities';
import { TB, TObjModality } from './types';

export default async function GetBiggestAmountsOfModalitiesOnPeriods(
  userId: string
) {
  const lastMonths = sub(new Date(), { months: 12 });

  const lastTransactions = await TransactionRepository.findByDateAgo({
    id: userId,
    lastMonths,
  });

  const getTransactionsByOutcome = lastTransactions?.filter(
    (transaction) => transaction.Category.name === 'Despesas'
  );

  const periods = ['0', '3', '6', '12'];

  const returnModalitiesForPeriod = periods.reduce((acc, period, index) => {
    const transactionsInPeriod = getTransactionsByOutcome?.filter(
      (transaction) => {
        const monthDiff = getMonthDiff(transaction.date, new Date());
        const transactionPeriod = getPeriod(monthDiff);
        return transactionPeriod === period;
      }
    );

    const modalities: TObjModality[] = [];

    transactionsInPeriod?.forEach((transaction) => {
      const { Modality, amount } = transaction;

      const existingModality = modalities.find(({ id }) => id === Modality.id);

      if (existingModality) {
        existingModality.amount += amount;
      } else {
        modalities.push({
          id: Modality.id,
          name: Modality.name,
          category: Modality.categoryId,
          amount,
        });
      }
    });

    if (modalities.length > 0) {
      acc[period] = { modality: modalities };
    }

    if (index > 0) {
      for (let i = 1; i <= index; i++) {
        const previousPeriod = periods[i - 1];
        const currentPeriod = periods[i];

        if (
          parseInt(currentPeriod) > i &&
          acc[currentPeriod] &&
          !acc[previousPeriod].added
        ) {
          acc[previousPeriod].modality.forEach((objModality) => {
            const existingModality = acc[currentPeriod].modality.find(
              ({ id }) => id === objModality.id
            );
            if (!existingModality) {
              acc[currentPeriod].modality.push(objModality);
            } else {
              existingModality.amount += objModality.amount;
            }
          });
          acc[previousPeriod].added = true;
        }
      }
    }

    return acc;
  }, {} as TB);

  const funcReturnModalities = ManipulateModalities(returnModalitiesForPeriod);

  console.log('func', funcReturnModalities);

  return funcReturnModalities;
}
