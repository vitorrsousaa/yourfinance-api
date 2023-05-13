import { Prisma } from '@prisma/client';

import prismaClient from '../../../../../prisma';

export default async function PrismaTransactionRegistrationInformation(
  name: string,
  time: number,
  amount: number,
  categoryId: string,
  modalityId: string,
  userId: string,
  initialDate: Date,
) {
  return prismaClient.$transaction(async (prisma) => {
    const date = initialDate;

    const historic = [
      { property: 'TIME', value: time, updatedAt: new Date() },
      { property: 'AMOUNT', value: amount, updatedAt: new Date() }
    ] as unknown as Prisma.InformationFixedCreatehistoricInput;

    const createInfos = await prisma.informationFixed.create({
      data: {
        name,
        time,
        amount,
        categoryId,
        userId,
        historic,
        createdAt: initialDate
      }
    });

    for (let i = 0; i < time; i++) {
      console.log(i);
      const calculateMonthsMoreTwelve = time - i;
      const verificationIfMonthIsMoreTwelve = date.getMonth() + 1 + i > 12
        ? calculateMonthsMoreTwelve
        : date.getMonth() + 1 + i;

      const verificationIfMonthIsMoreTwelveToAdd1YearOnYear = date.getMonth() + 1 + i > 12
        ? date.getFullYear() + 1
        : date.getFullYear();

      const newDate = new Date(
        `${verificationIfMonthIsMoreTwelveToAdd1YearOnYear}-${
          verificationIfMonthIsMoreTwelve < 10 ? '0' + verificationIfMonthIsMoreTwelve : verificationIfMonthIsMoreTwelve
        }-${initialDate.getDate() + 1}`
      );
      console.log(newDate);

      await prisma.transaction.create({
        data: {
          name,
          categoryId,
          modalityId,
          type: 'Fixa',
          userId,
          amount,
          date: newDate,
          informationFixedId: createInfos.id
        }
      });
    }

    return createInfos;
  });
}
