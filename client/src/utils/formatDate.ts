import { Transaction } from '../types/Transaction';

export function formatDate(date: string) {
  const options = {
    timeZone: 'America/Sao_Paulo',
  };

  const formatedDate = new Date(date);
  const timezoneOffset = formatedDate.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(formatedDate.getTime() + timezoneOffset);

  return new Intl.DateTimeFormat('pt-br', options).format(localDate);
}

export function formatShortDate(date: string) {
  const localDate = new Date(date);

  return new Intl.DateTimeFormat('pt-br', {
    month: 'short',
    year: 'numeric',
  }).format(localDate);
}

export function convertDateList(transactions: Transaction[]) {
  const convertDate = transactions.map((transaction) => {
    const previousDate = new Date(transaction.createdAt);
    const timezoneOffset = previousDate.getTimezoneOffset() * 60 * 1000;
    const localDate = new Date(previousDate.getTime() + timezoneOffset);

    const date = new Date(localDate);

    const newDate = new Date(date.getFullYear(), date.getMonth(), 1);

    return {
      ...transaction,
      createdAt: newDate.toString(),
    };
  });

  return convertDate;
}
