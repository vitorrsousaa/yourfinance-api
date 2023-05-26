import { itemsPerPage } from '../../../../constants/pagination';
import { TCategory } from '../../../../entities/category/TCategory';
import {
  TransactionCreateRequestDTO,
  TransactionGetRequestDTO,
} from '../../../../entities/transaction/dtos';
import { TTransaction } from '../../../../entities/transaction/TTransaction';
import prisma from '../../../../prisma';
import {
  ITransactionRepository,
  TReturnTransactionsWithCategoryAndModality,
} from '../ITransactionRepository';

class TransactionRepository implements ITransactionRepository {
  async findTransactionByIdUserAndPage({
    id,
    page,
  }: TransactionGetRequestDTO<number>): Promise<
    TReturnTransactionsWithCategoryAndModality[] | null
  > {
    const skipPages = (page as number) * itemsPerPage;

    return prisma.transaction.findMany({
      where: {
        userId: id,
      },
      include: {
        Category: true,
        Modality: true,
      },
      orderBy: {
        date: 'desc',
      },
      skip: skipPages,
      take: itemsPerPage,
    });
  }

  async findById(id: string): Promise<TTransaction | null> {
    return prisma.transaction.findUnique({
      where: {
        id,
      },
      include: {
        Category: true,
        Modality: true,
      },
    });
  }

  async findByPeriod({
    id,
    month,
  }: TransactionGetRequestDTO<string>): Promise<
    TReturnTransactionsWithCategoryAndModality[] | null
  > {
    const endDate = new Date();

    const year = endDate.getFullYear();
    const lastMonths = endDate.getMonth() - parseInt(month as string);
    const day = endDate.getDay();

    const startDate = new Date(year, lastMonths, day);

    return prisma.transaction.findMany({
      where: {
        userId: id,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        Category: true,
        Modality: true,
      },
    });
  }

  async findByDateAgo({
    id,
    date,
  }: TransactionGetRequestDTO<Date>): Promise<
    TReturnTransactionsWithCategoryAndModality[] | null
  > {
    const endDate = new Date();

    return prisma.transaction.findMany({
      where: {
        userId: id,
        date: {
          gte: date as Date,
          lte: endDate,
        },
      },
      include: {
        Category: true,
        Modality: true,
      },
    });
  }

  async create({
    name,
    categoryId,
    modalityId,
    type,
    userId,
    amount,
    date,
    informationFixedId,
  }: TransactionCreateRequestDTO): Promise<TTransaction> {
    return prisma.transaction.create({
      data: {
        name,
        categoryId,
        modalityId,
        type,
        userId,
        amount,
        date,
        informationFixedId: informationFixedId ? informationFixedId : null,
      },
      include: {
        Category: true,
        Modality: true,
      },
    });
  }

  async delete(id: string): Promise<unknown> {
    return prisma.transaction.delete({
      where: {
        id,
      },
    });
  }

  async updateManyTransactionsWithTimeGreaterThan(
    idInformation: string,
    dateGreaterThan: Date,
    newValueAmount: number
  ): Promise<TTransaction[] | unknown> {
    return prisma.transaction.updateMany({
      where: {
        InformationFixed: {
          id: idInformation,
        },
        date: {
          gte: dateGreaterThan,
        },
      },
      data: {
        amount: newValueAmount,
      },
    });
  }

  async deleteManyTransactionWithTimeGreaterThan(
    idInformation: string,
    dateGreaterThan: Date
  ): Promise<unknown> {
    return prisma.transaction.deleteMany({
      where: {
        informationFixedId: idInformation,
        date: {
          gte: dateGreaterThan,
        },
      },
    });
  }

  async findAllTransactionsByUser(
    userId: string
  ): Promise<(TTransaction & { Category: TCategory })[] | null> {
    return prisma.transaction.findMany({
      where: {
        userId,
      },
      orderBy: {
        date: 'desc',
      },
      include: {
        Category: true,
        Modality: true,
      },
    });
  }
}

export default new TransactionRepository();
