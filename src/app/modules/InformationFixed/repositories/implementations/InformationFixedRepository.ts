import { Prisma } from '@prisma/client';

import { TInformationFixed } from '../../../../entities/informationFixed/TInformationFixed';
import prisma from '../../../../prisma';
import { IInformationFixedRepository } from '../IInformationsFixedRepository';

class InformationFixedRepository implements IInformationFixedRepository {
  async findUniqueInformationById(id: string): Promise<TInformationFixed | null> {
    return prisma.informationFixed.findUnique({
      where: {
        id
      }
    })
  }

  async findUserOnInformation(userId: string): Promise<TInformationFixed[] | null> {
    return prisma.informationFixed.findMany({
      where: {
        userId
      }
    })
  }
}

export default new InformationFixedRepository();
