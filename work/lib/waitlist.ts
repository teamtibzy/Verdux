import { z } from "zod";

export const waitlistSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional()
});

export type WaitlistValues = z.infer<typeof waitlistSchema>;
