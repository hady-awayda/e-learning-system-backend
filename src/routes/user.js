import express from "express";
import UserController from "../controllers/UserController.js";
import userAuth from "../middleware/userAuthorization.js";
import adminAuth from "../middleware/adminAuthorization.js";
import { setUpdatedBy, setDeletedBy } from "../middleware/trackChanges.js";

const router = express.Router();
// User Routes v2
// router.get("/", authentication, adminAuth, UserController.getUsers);
// router.get("/:id", authentication, userAuth, UserController.getUser);
// router.patch(
//   "/:id",
//   authentication,
//   userAuth,
//   UserController.updateUser
// );
// router.delete(
//   "/:id",
//   authentication,
//   userAuth,
//   UserController.deleteUser
// );

// User Routes v3
router.get("/", adminAuth, UserController.getUsers);
router.get("/:id", userAuth, UserController.getUser);
router.patch("/:id", userAuth, UserController.updateUser);
router.delete("/:id", userAuth, UserController.deleteUser);

// User Routes v1
// router.get("/", UserController.getUsers);
// router.get("/:id", UserController.getUser);
// router.patch("/:id", setUpdatedBy, UserController.updateUser);
// router.delete("/:id", setDeletedBy, UserController.deleteUser);

export default router;
