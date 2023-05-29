import { ModalityCreateRequestDTO } from '../../../../entities/modality/dtos/ModalityCreateRequest';
import { TModality } from '../../../../entities/modality/TModality';
import prisma from '../../../../prisma';
import { IModalityRespository } from '../IModalityRepository';

class ModalityRepository implements IModalityRespository {
  async create({name, categoryId}: ModalityCreateRequestDTO): Promise<TModality> {
    return prisma.modality.create({
      data: {
        name,
        categoryId
      }
    });
  }

  async findByName(name: string): Promise<TModality | null> {
    return prisma.modality.findFirst({
      where: {
        name
      }
    });
  }

  async findById(id: string): Promise<TModality | null> {
    return prisma.modality.findUnique({
      where: {
        id
      }
    });
  }

  async findAll(): Promise<TModality[] | null> {
    return prisma.modality.findMany();
  }

  async delete(id: string): Promise<unknown> {
    return prisma.modality.delete({
      where: {
        id
      }
    });
  }
}

export default new ModalityRepository();
