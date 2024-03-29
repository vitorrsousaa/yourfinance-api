import { sub } from 'date-fns';

import TransactionRepository from '../../../Transaction/repositories/implementation/TransactionRepository';
import { ManipulateModalities } from './funcs/manipulateModalities';
import { TB, TObjModality } from './types';

export default async function GetBiggestAmountsOfModalitiesOnPeriods(
  userId: string
): Promise<TB> {
  const lastMonths = sub(new Date(), { months: 12 });

  const lastTransactions = await TransactionRepository.findByDateAgo({
    id: userId,
    lastMonths,
  });

  const emptyTB: TB = {
    '0': { modality: [] },
    '3': { modality: [] },
    '6': { modality: [] },
    '12': { modality: [] },
  };

  if (lastTransactions.length < 1) {
    return emptyTB;
  }

  const getTransactionsByOutcome = lastTransactions?.filter(
    (transaction) => transaction.Category.name === 'Despesas'
  );

  if (getTransactionsByOutcome.length < 1) {
    return emptyTB;
  }

  const periods = ['0', '3', '6', '12'];

  const returnModalitiesForPeriod = periods.reduce((acc, period, index) => {
    const lastMonths = sub(new Date(), {
      months: period === '0' ? 1 : parseInt(period),
    });

    const transactionsInPeriod = getTransactionsByOutcome?.filter(
      (transaction) => {
        return transaction.date > lastMonths;
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

        if (!acc[previousPeriod]) {
          acc[previousPeriod] = { modality: [] };
        }

        if (
          parseInt(currentPeriod) > i &&
          acc[currentPeriod] &&
          acc[previousPeriod] &&
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

  return funcReturnModalities;
}
