import express, { Express } from "express";
import myRouter from "./router";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(myRouter);

// app.listen(3000);

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});