import express from "express";
import UserController from "../controllers/UserController";
import AuthController from "../controllers/AuthController";

const router = express.Router();

// Auth Routes
router.post("/users/signup", UserController.signup);
router.post("/users/login", UserController.login);
router.get("/users/logout", UserController.logout);

// User Routes
router.get("/users/:id", UserController.getUser);

// Course Routes

module.exports = router;
