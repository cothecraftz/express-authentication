import { Schema } from "joi";
import { ResponseError } from "../error/response-error";

export const validate = (schema: Schema, request: any) => {
  const result = schema.validate(request, { abortEarly: false, allowUnknown: false });
  if (result.error) {
    throw new ResponseError(400, result.error.details[0].message);
  } else {
    return result.value;
  }
};
