import express from "express";
import UserController from "../controllers/UserController.js";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();

// Auth Routes
router.post("/users/signup", UserController.signup);
router.post("/users/login", UserController.login);
router.get("/users/logout", UserController.logout);

// User Routes
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
router.patch("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

// Course Routes

module.exports = router;
