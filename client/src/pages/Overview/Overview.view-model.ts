import { Transaction } from '../../types/Transaction';

export interface OverviewViewModelProps {}

export function OverviewViewModel({}: OverviewViewModelProps) {
  function getSummaryByCategory(transactions: Transaction[]) {
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

  return {
    getSummaryByCategory,
  };
}
