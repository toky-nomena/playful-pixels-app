import { z } from "zod";

export const personSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  department: z.string().min(1, "Department is required"),
  status: z.enum(["Active", "Away", "Offline"]),
});

export type PersonFormValues = z.infer<typeof personSchema>;