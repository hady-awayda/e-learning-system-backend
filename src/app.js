import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js";
import dbConnection from "../config/connection.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on http://localhost:${PORT}`);
});
