import express from "express";
import userAuth from "../middleware/userAuthorization.js";
import { setUpdatedBy } from "../middleware/trackChanges.js";
import EnrollmentController from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", userAuth, EnrollmentController.enrollInCourse);
router.patch(
  "/:id",
  userAuth,
  setUpdatedBy,
  EnrollmentController.unenrollFromCourse
);

export default router;
