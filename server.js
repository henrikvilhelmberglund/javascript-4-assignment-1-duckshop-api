import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/duckshop-routes.js";

dotenv.config();

const app = express();

// Setting middleware
app.use(cors());
// API base URL here
app.use(`${process.env.API_BASE}`, router);

const PORT = process.env.PORT || 3001;

const SERVER_URL = +process.env.HENRIK_PC === 0 ? "localhost" : "0.0.0.0";

app.listen(PORT, SERVER_URL, () =>
  console.log(`Server is running on ${SERVER_URL} on port ${PORT}`)
);
