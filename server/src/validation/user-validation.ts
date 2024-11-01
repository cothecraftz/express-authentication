import Joi from "joi";

const PASSWORD_MAX_LENGTH = 12;
const PASSWORD_MIN_LENGTH = 8; // Assuming a minimum length for the password
const PASSWORD_REGEX_LETTER = /[a-zA-Z]/;
const PASSWORD_REGEX_NUMBER = /[0-9]/;

const ERROR_MESSAGES = {
  PASSWORD_MIN: `Password must be at least {#limit} characters long.`,
  PASSWORD_MAX: `Password must be at most {#limit} characters long.`,
  PASSWORD_LETTER: "Password must contain at least one letter.",
  PASSWORD_NUMBER: "Password must contain at least one number cihuyyyy.",
};

const passwordValidation = Joi.string()
  .min(PASSWORD_MIN_LENGTH)
  .max(PASSWORD_MAX_LENGTH)
  .pattern(PASSWORD_REGEX_LETTER)
  .message(ERROR_MESSAGES.PASSWORD_LETTER)
  .pattern(PASSWORD_REGEX_NUMBER)
  .message(ERROR_MESSAGES.PASSWORD_NUMBER)
  .trim()
  .required()
  .messages({
    "string.min": ERROR_MESSAGES.PASSWORD_MIN,
    "string.max": ERROR_MESSAGES.PASSWORD_MAX,
  });

export const userRegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(1).max(20).required().messages({
    "any.required": "Nama harus diisi",
    "string.min": "Nama tidak boleh lebih dari {#limit} karakter",
    "string.max": "Nama tidak boleh lebih dari {#limit} karakter",
  }),
  password: passwordValidation,
});

export const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: passwordValidation,
});
