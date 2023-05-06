import { Prisma } from '@prisma/client';

import { TInformationFixed } from '../../../../entities/informationFixed/TInformationFixed';
import prisma from '../../../../prisma';
import { IInformationFixedRepository } from '../IInformationsFixedRepository';

class InformationFixedRepository implements IInformationFixedRepository {
  async registerInformation(
    name: string,
    time: number,
    amount: number,
    categoryId: string,
    userId: string,
  ): Promise<TInformationFixed> {
    return prisma.informationFixed.create({
      data: {
        name,
        time,
        amount,
        categoryId,
        userId
      }
    });
  }

  async findUniqueInformationById(id: string): Promise<TInformationFixed | null> {
    return prisma.informationFixed.findUnique({
      where: {
        id
      }
    });
  }

  async findUserOnInformation(userId: string): Promise<TInformationFixed[] | null> {
    return prisma.informationFixed.findMany({
      where: {
        userId
      }
    });
  }

  async updateTimeInformation(
    id: string,
    time: number
  ): Promise<TInformationFixed | null> {
    return prisma.informationFixed.update({
      where: {
        id
      },
      data: {
        time
      }
    });
  }

  async updateAmountInformation(
    id: string,
    amount: number
  ): Promise<TInformationFixed | null> {
    return prisma.informationFixed.update({
      where: {
        id
      },
      data: {
        amount
      }
    });
  }

  async addNewUpdateOnHistoric(
    id: string,
    property: string,
    value: number
  ): Promise<TInformationFixed | null> {
    const findInformation = await this.findUniqueInformationById(id);
    let guardHistoric: any = findInformation?.historic;
    guardHistoric = [...guardHistoric, { property, value, updatedAt: new Date() }];

    const updateHistoric = Prisma.validator<Prisma.InformationFixedUpdateInput>()({
      historic: guardHistoric
    });

    return prisma.informationFixed.update({
      where: {
        id
      },
      data: updateHistoric
    });
  }

  async deleteInformation(id: string): Promise<unknown> {
    return prisma.informationFixed.delete({
      where: {
        id
      }
    });
  }
}

export default new InformationFixedRepository();
