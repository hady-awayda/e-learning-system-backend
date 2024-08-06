import express from "express";
import CourseController from "../controllers/CourseController.js";
import adminAuth from "../middleware/adminAuthorization.js";
import {
  setCreatedBy,
  setUpdatedBy,
  setDeletedBy,
} from "../middleware/trackChanges.js";

const router = express.Router();

router.get("/", CourseController.getCourses);
router.get("/:id", CourseController.getCourse);
router.post("/", adminAuth, setCreatedBy, CourseController.createCourse);
router.patch("/:id", adminAuth, setUpdatedBy, CourseController.updateCourse);
router.delete("/:id", adminAuth, setDeletedBy, CourseController.deleteCourse);

export default router;
