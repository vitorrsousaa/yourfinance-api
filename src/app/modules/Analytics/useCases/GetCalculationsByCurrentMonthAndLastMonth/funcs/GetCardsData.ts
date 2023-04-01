import { TGetCardsData, TReturnMonths } from '../types';

export default function GetCardsData(data: TReturnMonths): TGetCardsData {
  const percent =
    data.lastMonth === data.currentMonth
      ? 0
      : data.lastMonth === 0
        ? 100
        : (data.currentMonth / data.lastMonth - 1) * 100;

  return {
    ...data,
    difference: data.currentMonth - data.lastMonth,
    percent,
  };
}
