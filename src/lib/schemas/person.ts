import { z } from "zod";

export const personSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  bio: z.string().optional(),
});

export type Person = z.infer<typeof personSchema>;
export type PersonFormValues = z.infer<typeof personSchema>;