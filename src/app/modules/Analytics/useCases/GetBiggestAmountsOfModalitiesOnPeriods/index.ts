import { sub } from 'date-fns';
import TransactionRepository from '../../../Transaction/repositories/implementation/TransactionRepository';
import { TB, TObjModality } from './types';
import { getMonthDiff, getPeriod } from './funcs/datesManipulate';
import { ManipulateModalities } from './funcs/manipulateModalities';

export default async function GetBiggestAmountsOfModalitiesOnPeriods(userId: string) {
  const data = sub(new Date(), { months: 12 });

  const lastTransactions = await TransactionRepository.findByDateAgo(userId, data);

  const getTransactionsByOutcome = lastTransactions?.filter(
    (transaction) => transaction.category.name === 'Despesas'
  );

  const periods = ['0', '3', '6', '12'];

  const returnModalitiesForPeriod =  periods.reduce((acc, period, index) => {
    const transactionsInPeriod = getTransactionsByOutcome?.filter((transaction) => {
      const monthDiff = getMonthDiff(transaction.date, new Date());
      const transactionPeriod = getPeriod(monthDiff);
      return transactionPeriod === period;
    });

    const modalities: TObjModality[] = [];

    transactionsInPeriod?.forEach((transaction) => {
      const { modality, amount } = transaction;

      const existingModality = modalities.find(({ _id }) => _id === modality._id);

      if (existingModality) {
        existingModality.amount += amount;
      } else {
        modalities.push({
          _id: modality._id,
          name: modality.name,
          category: modality.category,
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

        if (parseInt(currentPeriod) > i && acc[currentPeriod] && !acc[previousPeriod].added) {
          acc[previousPeriod].modality.forEach((objModality) => {
            const existingModality = acc[currentPeriod].modality.find(({ _id }) => _id === objModality._id);
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
