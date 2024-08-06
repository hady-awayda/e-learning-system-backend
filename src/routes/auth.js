import express from "express";
import AuthController from "../controllers/authController.js";

const router = express.Router();

// Auth Routes
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
// router.get("/users/logout", AuthController.logout);

// Course Routes

export default router;
