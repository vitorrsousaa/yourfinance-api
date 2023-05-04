import app from './app';
import prisma from './app/prisma';

(async () => {
  try {
    await prisma.$connect();

    const port = process.env.PORT || 3001;

    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
