import { Router } from "express";
import { emailValidation } from "../middlewares/validators/email.validation.js";
import { passwordValidation } from "../middlewares/validators/password.validation.js";
import { createUser } from "../controllers/user.controller.js";

import { validationResults } from "../middlewares/validators/validation.result.js";

const usersRouter = Router();

usersRouter
  .get("/users", emailValidation, passwordValidation, validationResults)
  .post(
    "/users",
    emailValidation,
    passwordValidation,
    validationResults,
    createUser
  );
