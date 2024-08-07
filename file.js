import express from "express";
import userAuth from "./src/middleware/userAuthorization.js";
import adminAuth from "./src/middleware/adminAuthorization.js";
import FileUploadController from "../controllers/fileUploadController.js";
import {
  setCreatedBy,
  setUpdatedBy,
  setDeletedBy,
} from "./src/middleware/trackChanges.js";

const router = express.Router();

router.get("/", userAuth, FileUploadController.getFiles);
router.get("/:id", userAuth, FileUploadController.getFile);
router.post(
  "/upload",
  adminAuth,
  setCreatedBy,
  FileUploadController.uploadFile
);
router.patch("/:id", adminAuth, setUpdatedBy, FileUploadController.updateFile);
router.delete("/:id", adminAuth, setDeletedBy, FileUploadController.deleteFile);

export default router;
