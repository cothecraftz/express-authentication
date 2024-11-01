import { Users } from "@prisma/client";

export type UserRegister = {
  email: string;
  name: string;
  password: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export const toUserResponse = (user: Users) => {
  return {
    email: user.email,
    name: user.name,
  };
};
