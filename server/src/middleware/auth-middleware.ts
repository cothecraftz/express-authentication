import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.username;
  console.log(token);

  return next();
};
