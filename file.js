import express from "express";
import FileUploadController from "./src/controllers/fileUploadController.js";

const router = express.Router();

router.get("/", FileUploadController.getFiles);

export default router;
