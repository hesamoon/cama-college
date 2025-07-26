import { z } from "zod";

export const codeSchema = z.object({
  code: z.string().min(6, "Code is required"),
});
