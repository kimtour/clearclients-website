import { test, expect } from "@playwright/test";

test("homepage communicates fintech software positioning", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Fintech Software");
  await expect(page.getByText("M-Pesa Payment Gateway").first()).toBeVisible();
});

test("main pages are navigable", async ({ page }) => {
  for (const path of ["/services", "/projects", "/about", "/contact"]) {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
  }
});
