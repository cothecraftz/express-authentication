import express, { Router } from "express";
import { loginUser } from "../controller/user-controller";
import { authMiddleware } from "../middleware/auth-middleware";

export const userRouter: Router = express.Router();
userRouter.use(authMiddleware);

userRouter.post("/login", loginUser);
// userRouter.post("/register", registerUser);
