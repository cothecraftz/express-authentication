import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../error/response-error";

export const errorMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ResponseError) {
    res.status(err.status).json({ errors: err.message });
  } else {
    res.status(500).json({ errors: err.message });
  }
};
