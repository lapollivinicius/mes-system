import express, { type Express, type Request, type Response, type NextFunction } from 'express';

const app: Express = express();
const port: number = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});