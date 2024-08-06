import express from "express";
import userAuthorization from "../middleware/adminAuthorization.js";
import adminAuthorization from "../middleware/adminAuthorization.js";
import {
  setCreatedBy,
  setUpdatedBy,
  setDeletedBy,
} from "../middleware/trackChanges.js";
import FileUploadController from "../controllers/FileUploadController.js";

const router = express.Router();

router.get("/", userAuthorization, FileUploadController.getFiles);
router.get("/:id", userAuthorization, FileUploadController.getFile);
router.post(
  "/upload",
  adminAuthorization,
  setCreatedBy,
  FileUploadController.uploadFile
);
router.patch(
  "/:id",
  adminAuthorization,
  setUpdatedBy,
  FileUploadController.updateFile
);
router.delete(
  "/:id",
  adminAuthorization,
  setDeletedBy,
  FileUploadController.deleteFile
);

export default router;
