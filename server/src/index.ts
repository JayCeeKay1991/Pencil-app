import express, { Express } from "express";
import "reflect-metadata"
import { AppDataSource } from "./data-source";
import myRouter from "./router";
import cors from "cors";

const app: Express = express();
const PORT = '3000';

app.use(express.json());
app.use(cors());
app.use(myRouter);

async function bootstrap() {
  app.listen(PORT)
  AppDataSource.initialize()
    .then(async () => {
      console.log('DB initialized')

    }).catch(error => console.log(error))
  console.log(`Server RUNNING at http://localhost:${PORT}`)
}

bootstrap();