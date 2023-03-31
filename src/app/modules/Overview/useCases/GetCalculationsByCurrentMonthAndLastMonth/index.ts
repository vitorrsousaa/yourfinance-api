import CategoryRepository from '../../../Category/repositories/implementation/CategoryRepository';
import GetTransactionsByPeriod from '../../../Transaction/useCases/GetTransactionsByPeriod';

import GetCardsData from './funcs/GetCardsData';
import GetSummaryByCategory from './funcs/GetSummaryByCategory';

import { TTransaction } from '../../../Transaction/model';
import { TGetCardsData } from './types';

import AppError from '../../../../error';

export default async function GetCalculationsByCurrentMonthAndLastMonth(
  // period: string,
  categoryId: string,
  userId: string
): Promise<TGetCardsData> {
  const findTransactionsByPeriod = await GetTransactionsByPeriod(new Date().getMonth() + 1, userId);

  const findCategory = await CategoryRepository.findById(categoryId);
  if (!findCategory) throw new AppError('Categoria não foi encontrada!', 404);

  const getSummaryByCategory = GetSummaryByCategory(
    (findCategory.name as 'Receitas' | 'Despesas'),
    findTransactionsByPeriod as TTransaction[]
  );
  const getCardsData = GetCardsData(getSummaryByCategory);

  return getCardsData;
}
