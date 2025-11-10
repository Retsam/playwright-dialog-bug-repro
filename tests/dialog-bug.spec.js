const { test } = require("@playwright/test");

test.describe("Dialog Bug Reproduction", () => {
  test("should click into shadow root with slotted div", async ({ page }) => {
    await page.setContent(`
        <my-dialog>
          <template shadowrootmode="open">
            <dialog open><slot></slot></dialog>
          </template>
          <div><button>Foo</button></div>
        </my-dialog>
      `);

    await page.getByRole("dialog").getByRole("button", { name: "Foo" }).click();
  });
});
