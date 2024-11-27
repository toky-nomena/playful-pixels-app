import { z } from "zod";

export const personSchema = z.object({
  id: z.string(),
  role: z.string(),
  name: z.string(),
  email: z.string().email(),
  department: z.string(),
  status: z.enum(["Active", "Away", "Offline"]),
});

export type Person = z.infer<typeof personSchema>;