import * as z from "zod";

export const personSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  department: z.string().min(2, "Department must be at least 2 characters"),
  status: z.enum(["Active", "Away", "Offline"]),
});

export type PersonFormValues = z.infer<typeof personSchema>;