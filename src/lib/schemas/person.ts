import { z } from "zod";

export const personSchema = z.object({
  id: z.string().optional(),
  role: z.string().min(1, "Role is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  department: z.string().min(1, "Department is required"),
  status: z.enum(["Active", "Away", "Offline"]),
});

export type Person = z.infer<typeof personSchema>;
export type PersonFormValues = z.infer<typeof personSchema>;