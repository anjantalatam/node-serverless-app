import express from 'express';
import serverless from 'serverless-http';

const app = express();

const port = 3000;

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hi from Serverless Express',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export const handler = serverless(app);
