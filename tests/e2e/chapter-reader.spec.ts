import { expect, test } from "@playwright/test";

test("reader can navigate from overview to a guided chapter", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /Study microservices as a connected engineering workspace/i,
    }),
  ).toBeVisible();

  await page.getByRole("link", { name: /Browse chapters/i }).first().click();
  await expect(page).toHaveURL(/\/chapters$/);
  await expect(
    page.getByRole("heading", { name: /Study chapters in source order/i }),
  ).toBeVisible();

  await page.getByRole("link", { name: /Open lesson/i }).nth(1).click();
  await expect(page).toHaveURL(/\/chapters\/what-are-microservices$/);

  await expect(
    page.getByRole("heading", { name: /Chapter 1: What Are Microservices/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: /Chapter table of contents/i }).first(),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: /Key takeaways/i })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Why this lesson matters/i }),
  ).toBeVisible();
  await expect(page.getByLabel(/Reading progress for Chapter 1/i).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Next chapter/i })).toBeVisible();
});
