import app from './app';
import prisma from './app/prisma';

(async () => {
  try {
    await prisma.$connect();

    // const modalities = [
    //   '063bcd66-e25b-4cc8-af84-88e0b8dabe0c',
    //   '780ada63-f537-4ab1-9478-54e823c27a71',
    //   'd8e4ba7e-72af-464e-9b17-7c6f74e3a3a2',
    //   'fee5f347-2595-41e1-94be-bb30bc86e6ab'
    // ];

    // const year = [
    //   2022,
    //   2023
    // ];

    // for (let i = 4; i < 100; i++) {
    //   await prisma.transaction.create({
    //     data: {
    //       name: `Transaction ${i}`,
    //       categoryId: 'e30e0cd6-c251-4455-9d0f-38c2a9f5d460',
    //       modalityId: modalities[Math.floor(Math.random() * modalities.length)],
    //       type: 'Variável',
    //       userId: '1e3f21e1-dea9-4003-8402-88f79f0d816a',
    //       amount: Math.floor(Math.random() * Math.floor(10000)),
    //       date: new Date(
    //         year[Math.floor(Math.random() * year.length)],
    //         Math.floor(Math.random() * Math.floor(12)),
    //         Math.floor(Math.random() * Math.floor(31))),
    //     }
    //   });
    // }

    // const [receita, despesa] = await Promise.all([
    //   await prisma.category.create({
    //     data: {
    //       name: 'Receitas'
    //     }
    //   }),
    //   await prisma.category.create({
    //     data: {
    //       name: 'Despesas'
    //     }
    //   })
    // ]);

    // await prisma.modality.createMany({
    //   data: [
    //     {
    //       name: 'Job',
    //       categoryId: receita.id
    //     },
    //     {
    //       name: 'Extras',
    //       categoryId: receita.id
    //     },
    //     {
    //       name: 'Férias',
    //       categoryId: receita.id
    //     },
    //     {
    //       name: 'Bônus',
    //       categoryId: receita.id
    //     },
    //     {
    //       name: 'Investimentos',
    //       categoryId: despesa.id
    //     },
    //     {
    //       name: 'Educação',
    //       categoryId: despesa.id
    //     },
    //     {
    //       name: 'Gastos Pessoais',
    //       categoryId: despesa.id
    //     },
    //     {
    //       name: 'Habitação',
    //       categoryId: despesa.id
    //     },
    //     {
    //       name: 'Saúde',
    //       categoryId: despesa.id
    //     },
    //     {
    //       name: 'Cartão de Crédito',
    //       categoryId: despesa.id
    //     },
    //     {
    //       name: 'Lazer',
    //       categoryId: despesa.id
    //     },
    //   ]
    // });

    const port = process.env.PORT || 3001;

    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
