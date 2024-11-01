import express, { Router } from "express";
import { registerUser } from "../controller/user-controller";

export const userRouter: Router = express.Router();

userRouter.post("/register", registerUser);
// userRouter.post("/login", loginUser);
