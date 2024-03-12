import express, { Express } from "express";
import myRouter from "./router";
import cors from "cors";
import { syncDb } from "./db/sync";

const app: Express = express();
const PORT = '3000';

app.use(express.json());
app.use(cors());
app.use(myRouter);

async function bootstrap () {
  await syncDb();
  app.listen(PORT)
  console.log(`Server RUNNING at http://localhost:${PORT}`)
}

bootstrap ();