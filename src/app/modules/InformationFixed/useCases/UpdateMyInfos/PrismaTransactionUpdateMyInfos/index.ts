import { Prisma } from '@prisma/client';
import { differenceInCalendarMonths } from 'date-fns';

import { TInformationFixed } from '../../../../../entities/informationFixed/TInformationFixed';
import AppError from '../../../../../error';
import prismaClient from '../../../../../prisma';

export default async function PrismaTransactionUpdateMyInfos(
  valueInformation: Date | number,
  informationFixed: TInformationFixed,
  modeInformation: 'TIME' | 'AMOUNT',
  userId: string
) {
  const historic = [
    ...informationFixed.historic,
    { property: modeInformation, value: valueInformation, updatedAt: new Date() },
  ] as unknown as Prisma.InformationFixedCreatehistoricInput;

  if (userId !== informationFixed.userId) throw new AppError('Voce não tem autorização para alterar está Informação', 401);

  return prismaClient.$transaction(async (prisma) => {
    if (modeInformation === 'TIME') {
      const differenceOfDates = differenceInCalendarMonths(
        new Date(valueInformation), informationFixed.createdAt
      );

      const updateInformations = await prisma.informationFixed.update({
        where: {
          id: informationFixed.id
        },
        data: {
          time: differenceOfDates,
          historic
        }
      });
      await prisma.transaction.deleteMany({
        where: {
          informationFixedId: informationFixed.id,
          date: {
            gte: new Date(valueInformation)
          }
        }
      });

      return updateInformations;
    }

    const updateInformations = await prisma.informationFixed.update({
      where: {
        id: informationFixed.id
      },
      data: {
        amount: (valueInformation as number),
        historic
      }
    });
    await prisma.transaction.updateMany({
      where: {
        InformationFixed: {
          id: informationFixed.id
        },
        date: {
          gte: new Date()
        }
      },
      data: {
        amount: (valueInformation as number)
      }
    });

    return updateInformations;
  });
}
