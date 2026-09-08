import { z } from "zod";

export const projectTypes = ["Payment API / Gateway","M-Pesa Integration","Fintech Application","Backend / API Development","Cloud Engineering","DevOps","AI Integration","Custom Software","Other"] as const;
export const budgets = ["Not Sure Yet","Under USD 1,000","USD 1,000 - 5,000","USD 5,000 - 10,000","USD 10,000+"] as const;
export const timelines = ["As Soon as Possible","Within 1 Month","1 - 3 Months","3 - 6 Months","Flexible"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100),
  company: z.string().trim().max(150).optional().default(""),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  phone: z.string().trim().max(50).optional().default(""),
  projectType: z.enum(projectTypes, { error: "Select a project type." }),
  description: z.string().trim().min(10, "Tell us what you need help with.").max(5000),
  budget: z.enum(budgets).optional(),
  timeline: z.enum(timelines).optional(),
  website: z.string().max(0).optional().default("")
});
export type ContactSubmission = z.infer<typeof contactSchema>;
