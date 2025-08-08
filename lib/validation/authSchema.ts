import { z } from "zod";

const codeSchema = z.object({
  code: z.string().min(6, "Code is required"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 5 characters"),
});

const signupSchema = z
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

export { codeSchema, loginSchema, signupSchema };
