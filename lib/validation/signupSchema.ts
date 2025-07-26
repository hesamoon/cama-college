import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    family: z.string().min(2, "Family is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 5 characters"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });
