import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/validation/contact";

describe("contact validation", () => {
  it("accepts a valid software project enquiry", () => {
    const result = contactSchema.safeParse({ name: "Samuel Kimani", email: "sam@example.com", projectType: "Payment API / Gateway", description: "Build an M-Pesa payment API integration.", company: "", phone: "", website: "" });
    expect(result.success).toBe(true);
  });
  it("rejects invalid email addresses", () => {
    const result = contactSchema.safeParse({ name: "Samuel", email: "invalid", projectType: "DevOps", description: "Set up a CI/CD deployment workflow.", company: "", phone: "", website: "" });
    expect(result.success).toBe(false);
  });
});
