import { Request, Response } from "express";
import logger from "../utils/logging";

export const loginUser = (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;
    // console.log({ email, name, password });
    res.status(200).json({ messages: "success" });
  } catch (error) {
    logger.info(error);
    throw new Error("Gagal login user");
  }
};
