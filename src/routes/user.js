import express from "express";
import UserController from "../controllers/UserController.js";
import userAuthorization from "../middleware/adminAuthorization.js";
import adminAuthorization from "../middleware/adminAuthorization.js";
import { setUpdatedBy, setDeletedBy } from "../middleware/trackChanges.js";

const router = express.Router();
// User Routes v2
// router.get("/", authentication, adminAuthorization, UserController.getUsers);
// router.get("/:id", authentication, userAuthorization, UserController.getUser);
// router.patch(
//   "/:id",
//   authentication,
//   userAuthorization,
//   UserController.updateUser
// );
// router.delete(
//   "/:id",
//   authentication,
//   userAuthorization,
//   UserController.deleteUser
// );

// User Routes v3
router.get("/", adminAuthorization, UserController.getUsers);
router.get("/:id", userAuthorization, UserController.getUser);
router.patch("/:id", userAuthorization, UserController.updateUser);
router.delete("/:id", userAuthorization, UserController.deleteUser);

// User Routes v1
// router.get("/", UserController.getUsers);
// router.get("/:id", UserController.getUser);
// router.patch("/:id", setUpdatedBy, UserController.updateUser);
// router.delete("/:id", setDeletedBy, UserController.deleteUser);

export default router;
