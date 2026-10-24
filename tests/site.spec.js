import { test, expect } from "@playwright/test";
test("four pages, JSON programs and news interactions", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "Технології змінюють світ. А ти — створюй їх.",
    }),
  ).toBeVisible();
  await expect(page.locator(".program-card")).toHaveCount(5);
  await expect(page.locator(".news-card")).toHaveCount(3);
  await page.locator("nav").getByText("Про факультет", { exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Місце, де ідеї стають можливостями." }),
  ).toBeVisible();
  await page.locator("nav").getByText("Історія", { exact: true }).click();
  await expect(page.locator(".timeline article")).toHaveCount(4);
  await page.locator("nav").getByText("Новини", { exact: true }).click();
  await page.getByRole("button", { name: "Наука", exact: true }).click();
  await expect(page.locator(".news-card")).toHaveCount(1);
  await page.getByRole("link", { name: "Читати новину" }).click();
  await expect(page.locator(".article")).toContainText(
    "Національного фонду досліджень",
  );
  await page.getByRole("link", { name: "← Повернутися до новин" }).click();
  await page.getByRole("searchbox").fill("неіснуючий запит");
  await expect(
    page.getByRole("heading", { name: "Нічого не знайдено" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Скинути фільтри" }).click();
  await expect(page.locator(".news-card")).toHaveCount(3);
  await page.getByRole("searchbox").fill("ректора");
  await expect(page.locator(".news-card")).toHaveCount(1);
  await page.goto("/#/about#programs");
  await expect(page.locator("#programs")).toBeInViewport();
  await page.screenshot({
    path: "/workspace/SR2/test-results/about-desktop.png",
    fullPage: true,
  });
  await page.goto("/");
  await page.screenshot({
    path: "/workspace/SR2/test-results/home-desktop.png",
    fullPage: true,
  });
  expect(errors).toEqual([]);
});
test("mobile navigation, images and no horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(
    page.getByRole("button", { name: "Відкрити меню" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Відкрити меню" }).click();
  await page.locator("nav").getByText("Новини", { exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Факультет у русі." }),
  ).toBeVisible();
  await expect(page.locator("nav")).not.toBeVisible();
  for (const route of ["/", "/about", "/history", "/news"]) {
    await page.goto(`/#${route}`);
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.every((i) => i.complete && i.naturalWidth > 0),
        ),
    ).toBe(true);
  }
  await page.goto("/");
  await page.screenshot({
    path: "/workspace/SR2/test-results/home-mobile.png",
    fullPage: true,
  });
});
