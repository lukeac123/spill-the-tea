import { z } from "zod";

export const passwordValidationSchema = z
  .string()
  .min(5, "password must contain at least 5 characters");
