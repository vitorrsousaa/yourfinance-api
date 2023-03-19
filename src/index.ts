import app from './app';
import connect from './database/connect';

(async () => {
  try {
    await connect();

    const port = process.env.PORT || 3001;

    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
