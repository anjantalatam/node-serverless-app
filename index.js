import express from 'express';
const app = express();

const port = 3000;

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
