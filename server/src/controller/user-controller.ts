import { NextFunction, Request, Response } from "express";
import { userRegisterSchema } from "../validation/user-validation";
import { validate } from "../validation/validate";
import { userServiceRegister } from "../services/user-service";

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, name, password } = req.body;
    const validateFields = await validate(userRegisterSchema, { email, name, password });

    const result = await userServiceRegister({
      email: validateFields.email,
      name: validateFields.name,
      password: validateFields.password,
    });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
