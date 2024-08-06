import express from "express";
import auth from "../middleware/authentication.js";
import UserController from "../controllers/UserController.js";

const router = express.Router();
// User Routes
// router.get("/users", UserController.getUsers);
router.get("/:id", auth, UserController.getUser);
// router.patch("/users/:id", UserController.updateUser);
// router.delete("/users/:id", UserController.deleteUser);

export default router;
