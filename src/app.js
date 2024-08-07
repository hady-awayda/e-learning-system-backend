import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import fileRoutes from "./routes/file.js";
import courseRoutes from "./routes/course.js";
import dbConnection from "../config/connection.js";
import enrollmentRoutes from "./routes/enrollment.js";
import withdrawalRoutes from "./routes/withdrawal.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/users", userRoutes);
app.use("/api/withdrawals", withdrawalRoutes);
app.use("/api/enrollment", enrollmentRoutes);

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on http://localhost:${PORT}`);
});
