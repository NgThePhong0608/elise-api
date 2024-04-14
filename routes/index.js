import express from "express";
import { getAllUsers, login, register } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", register);
router.post("/users/login", login);

export default router;
