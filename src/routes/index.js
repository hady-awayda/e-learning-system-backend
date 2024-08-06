import express from "express";
import auth from "../middlewares/auth.js";
import UserController from "../controllers/UserController.js";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();

// Auth Routes
router.post("/users/register", AuthController.register);
router.post("/users/login", AuthController.login);
// router.get("/users/logout", AuthController.logout);

// User Routes
// router.get("/users", UserController.getUsers);
router.get("/users/:id", auth, UserController.getUser);
// router.patch("/users/:id", UserController.updateUser);
// router.delete("/users/:id", UserController.deleteUser);

// Course Routes

export default router;
