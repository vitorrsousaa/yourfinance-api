import { add, sub } from 'date-fns';

import AppError from '../../../../error';
import TransactionRepository from '../../../Transaction/repositories/implementation/TransactionRepository';
import UserRepository from '../../../User/repositories/implementations/UserRepository';

export default async function EstimatedExpensesForTheComingMonths(
  userId: string
): Promise<{ month: string; amount: number }[]> {
  const findUser = await UserRepository.findById(userId);
  if (!findUser) throw new AppError('Usuário não encontrado!', 404);

  const dateSixMonthsAgo = sub(new Date(), { months: 6 } );
  const getTransactionsSixMonthsAgo = await TransactionRepository.findByDateAgo({
    id: findUser.id,
    dateSixMonthsAgo
  });
  const filteredTransactionsOfOutcome = getTransactionsSixMonthsAgo?.filter(({ Category: { name } }) => name !== 'Despesas');

  const groupTransactions: number[] = [];

  for (let i = 0; i < 6; i++) {
    const addDates = add(dateSixMonthsAgo, {
      months: i
    });
    const filterForThisPeriod = filteredTransactionsOfOutcome?.filter((transaction) => transaction.date > addDates);
    const someAmounts = filterForThisPeriod?.reduce((accumulator, transactions) => {
      return accumulator + transactions.amount;
    }, 0);
    groupTransactions.push(someAmounts as number);
  }

  return groupTransactions.reduce((accumulator, current, index) => {
    let sum = 0;
    if (index > 0) {
      sum = accumulator.slice(Math.max(index - 6, 0), index)
        .reduce((total, transaction) => total + Number(transaction.amount), 0);
    }
    const average = (sum + Number(current)) / 6;

    const someDate = add(new Date(), {
      months: index + 1
    });

    accumulator[index] = {
      month: new Date(someDate).toLocaleDateString('pt-br'),
      amount: Math.floor(average)
    };

    return accumulator;
  }, [
    {
      month: '',
      amount: 0
    }
  ]);
}


