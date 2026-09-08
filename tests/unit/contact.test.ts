import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/validation/contact";

describe("contact validation", () => {
  it("accepts a valid software project enquiry", () => {
    const result = contactSchema.safeParse({ name: "Samuel Kimani", email: "sam@example.com", projectType: "Payment API / Gateway", description: "Build an M-Pesa payment API integration.", company: "", phone: "", website: "" });
    expect(result.success).toBe(true);
  });

  it("accepts blank optional budget and timeline selections", () => {
    const result = contactSchema.safeParse({ name: "Samuel Kimani", email: "sam@example.com", projectType: "Fintech Application", description: "Can you help with this fintech application?", company: "", phone: "", budget: "", timeline: "", website: "" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.budget).toBeUndefined();
      expect(result.data.timeline).toBeUndefined();
    }
  });

  it("rejects invalid email addresses", () => {
    const result = contactSchema.safeParse({ name: "Samuel", email: "invalid", projectType: "DevOps", description: "Set up a CI/CD deployment workflow.", company: "", phone: "", website: "" });
    expect(result.success).toBe(false);
  });
});
