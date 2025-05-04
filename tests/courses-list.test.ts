import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Название" }).click();
  await page.getByRole("textbox", { name: "Название" }).fill("test titile");
  await page.getByRole("textbox", { name: "Название" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Описание" })
    .fill("test description");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(
    page.getByText("test titiletest descriptionУдалить"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Удалить" }).click();
  await expect(
    page.getByText("test titiletest descriptionУдалить"),
  ).not.toBeVisible();
});
