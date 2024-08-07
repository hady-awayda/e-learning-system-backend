import express from "express";
import FileUploadController from "../controllers/fileUploadController.js";

const router = express.Router();

router.get("/", FileUploadController.getFiles);

export default router;
