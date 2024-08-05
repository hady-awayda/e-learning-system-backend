import express from "express";
import UserController from "../controllers/user.controller.js";
import AuthController from "../controllers/auth.controller.js";

const router = express.Router();

// Auth Routes
router.post("/users/signup", AuthController.signup);
// router.post("/users/login", AuthController.login);
// router.get("/users/logout", AuthController.logout);

// User Routes
// router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
// router.patch("/users/:id", UserController.updateUser);
// router.delete("/users/:id", UserController.deleteUser);

// Course Routes

export default router;
