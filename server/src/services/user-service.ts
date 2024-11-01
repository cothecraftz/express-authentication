import { ResponseError } from "../error/response-error";
import { db } from "../utils/db";
import bcrypt from "bcrypt";
import { toUserResponse } from "../models/user-model";

export const userServiceRegister = async (payload: any) => {
  const checkUserDb: number = await db.users.count({
    where: { email: payload.email },
  });

  if (checkUserDb === 1) {
    throw new ResponseError(400, "Username already exists");
  }

  payload.password = await bcrypt.hash(payload.password, 10);

  const newUser = await db.users.create({
    data: payload,
  });

  return toUserResponse(newUser);
};
