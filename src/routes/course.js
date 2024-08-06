import express from "express";
import CourseController from "../controllers/CourseController.js";
import adminAuthorization from "../middleware/adminAuthorization.js";
import {
  setCreatedBy,
  setUpdatedBy,
  setDeletedBy,
} from "../middleware/trackChanges.js";

const router = express.Router();

router.get("/", CourseController.getCourses);
router.get("/:id", CourseController.getCourse);
router.post(
  "/",
  adminAuthorization,
  setCreatedBy,
  CourseController.createCourse
);
router.patch(
  "/:id",
  adminAuthorization,
  setUpdatedBy,
  CourseController.updateCourse
);
router.delete(
  "/:id",
  adminAuthorization,
  setDeletedBy,
  CourseController.deleteCourse
);

export default router;
