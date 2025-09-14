import { Request, Response, NextFunction } from "express";
import { body, param, validationResult, ValidationError } from "express-validator";


export const authorValidation = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),
  body("email")
    .isEmail()
    .withMessage("Email must be valid"),
  param("id")
    .isInt()
    .withMessage("ID must be an integer")
];

export function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map(err => {
      
        const e = err as ValidationError & { param: string };
        return {
          field: e.param,
          message: e.msg,
        };
      }),
    });
  }

  next();
}
export function notFound(message = "Resource not found") {
  const error: any = new Error(message);
  error.status = 404;
  return error;
}

export function conflict(message = "Resource already exists") {
  const error: any = new Error(message);
  error.status = 409;
  return error;
}