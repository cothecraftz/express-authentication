import { jwtVerify, SignJWT } from "jose";
import CONFIG from "../config/environment";
import logger from "./logging";

const sessionKey = CONFIG.sessionScret;
const key = new TextEncoder().encode(sessionKey);

export const encrypt = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
};

export const decrypt = async (token: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
    return payload;
  } catch (error) {
    logger.info("Failed decrypt session " + error);
  }
};
