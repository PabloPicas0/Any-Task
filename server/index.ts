import dotenv from "dotenv";
import bodyParser from "body-parser";
import express, { Request, Response, Application } from "express";
import cors from "cors";
import mongoose from "mongoose";

import { router as createRoute } from "./routes/create";
import { router as joinRoute } from "./routes/join";

dotenv.config();
const app: Application = express();

const databaseUrl = process.env.MONGO_URI;

if (!databaseUrl) throw new Error("Database url is missing");

mongoose
  .connect(databaseUrl)
  .then(() => console.log("Connected to Database"))
  .catch((error: any) => console.log(error));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("<h1 style='text-align: center'>Server is running !</h1>");
});

app.use("/api/create", createRoute);
app.use("/api/join", joinRoute);

const port: string | undefined = process.env.PORT;

app.listen(port, () => {
  console.log(`Your server is listening to localhost:${port}`);
  console.log("Press ctrl + c to exit");
});
