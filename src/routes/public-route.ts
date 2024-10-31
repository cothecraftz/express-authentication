import express, { Request, Response, Router } from "express";

export const publicRouter: Router = express.Router();

publicRouter.get("/", (req: Request, res: Response) => {
  res.json({ messages: "helalo from api" });
});
