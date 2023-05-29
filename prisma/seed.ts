import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    const [receita, despesa] = await Promise.all([
      await prisma.category.create({
        data: {
          name: 'Receitas',
        },
      }),
      await prisma.category.create({
        data: {
          name: 'Despesas',
        },
      }),
    ]);

    await prisma.modality.createMany({
      data: [
        {
          name: 'Job',
          categoryId: receita.id,
        },
        {
          name: 'Extras',
          categoryId: receita.id,
        },
        {
          name: 'Férias',
          categoryId: receita.id,
        },
        {
          name: 'Bônus',
          categoryId: receita.id,
        },
        {
          name: 'Salário',
          categoryId: receita.id,
        },
        {
          name: 'Investimentos',
          categoryId: despesa.id,
        },
        {
          name: 'Educação',
          categoryId: despesa.id,
        },
        {
          name: 'Gastos Pessoais',
          categoryId: despesa.id,
        },
        {
          name: 'Habitação',
          categoryId: despesa.id,
        },
        {
          name: 'Saúde',
          categoryId: despesa.id,
        },
        {
          name: 'Cartão de Crédito',
          categoryId: despesa.id,
        },
        {
          name: 'Lazer',
          categoryId: despesa.id,
        },
        {
          name: 'Transporte',
          categoryId: despesa.id,
        },
      ],
    });
    console.log('Cadastrado com sucesso');
  } catch {
    console.log('Erro ao inserir dados');
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
