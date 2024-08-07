import express from "express";
// import userAuth from "../middleware/userAuthorization.js";
// import adminAuth from "../middleware/adminAuthorization.js";
import FileUploadController from "../controllers/fileUploadController.js";
// import {
//   setCreatedBy,
//   setUpdatedBy,
//   setDeletedBy,
// } from "../middleware/trackChanges.js";

const router = express.Router();

router.get("/", FileUploadController.getFiles);
router.get("/:id", FileUploadController.getFile);
router.post(
  "/upload",
  adminAuth,
  setCreatedBy,
  FileUploadController.uploadFile
);
router.patch("/:id", FileUploadController.updateFile);
router.delete("/:id", FileUploadController.deleteFile);

export default router;
