import { check } from "express-validator";

export function emailValidation() {
  return [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .notEmpty()
      .withMessage("Email address is required.")
      .normalizeEmail()
      .trim()
      .escape(),
  ];
}
