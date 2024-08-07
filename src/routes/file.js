import express from "express";
import userAuth from "../middleware/userAuthorization.js";
import adminAuth from "../middleware/adminAuthorization.js";
import UploadController from "../controllers/fileUploadController.js";
import {
  setCreatedBy,
  setUpdatedBy,
  setDeletedBy,
} from "../middleware/trackChanges.js";

const router = express.Router();

router.get("/", userAuth, UploadController.getFiles);
router.get("/:id", userAuth, UploadController.getFile);
router.post("/upload", adminAuth, setCreatedBy, UploadController.uploadFile);
router.patch("/:id", adminAuth, setUpdatedBy, UploadController.updateFile);
router.delete("/:id", adminAuth, setDeletedBy, UploadController.deleteFile);

export default router;
