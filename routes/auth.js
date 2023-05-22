import express from "express";
import * as authController from "../controllers/auth.js";

const router = express.Router();

// PRECISA SER IMPLEMENTADO COM AUTENTICAÇÃO JWT
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/register", authController.register_get);
router.post("/register", authController.register_post);

export default router;
