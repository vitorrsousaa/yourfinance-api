import { sub } from 'date-fns';
import { TModality } from '../../../Modality/model';
import TransactionRepository from '../../../Transaction/repositories/implementation/TransactionRepository';

type TBiggestModality = { modality: TModality; amount: number }[];

export default async function GetBiggestAmountsOfModalitiesOnSixMonthsAgo(userId: string) {
  const data = sub(new Date(), { months: 6 });

  const transactionsLast6Months = await TransactionRepository.findByDateAgo(userId, data);

  const getTransactionsByOutcome = transactionsLast6Months?.filter(
    (transaction) => transaction.category.name === 'Despesas'
  );

  const addingExpenses = getTransactionsByOutcome?.reduce<TBiggestModality>(
    (acc: TBiggestModality, transaction) => {
      const { modality, amount } = transaction;

      const existingModality = acc.find(
        (item) => item.modality._id === modality._id
      );

      if (existingModality) {
        existingModality.amount += amount;
      } else {
        acc.push({ modality, amount });
      }

      return acc;
    },
    [{ modality: {} as TModality, amount: 0 }]
  );

  const ordenedBiggestExpenses = addingExpenses?.sort((a, b) =>
    a.amount > b.amount ? -1 : 1
  );

  const removeAccNull = ordenedBiggestExpenses?.filter(
    (biggestModality) => biggestModality.amount !== 0
  );

  const biggestExpensesByModality = removeAccNull?.slice(0, 5);

  return biggestExpensesByModality;
}
