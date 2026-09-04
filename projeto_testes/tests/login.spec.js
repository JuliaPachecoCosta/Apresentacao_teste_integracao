
const { test, expect } = require("@playwright/test");

test("deve realizar login com sucesso", async ({ page }) => {

    // 1. Acessar a página
    await page.goto(
        "http://127.0.0.1:5500/index.html"
    );

    // 2. Preencher e-mail
    await page.fill(
        "#email",
        "usuario@email.com"
    );

    // 3. Preencher senha
    await page.fill(
        "#senha",
        "123456"
    );

    // 4. Clicar no botão
    await page.click("#btn-login");

    // 5. Verificar mensagem
    await expect(
        page.locator("#mensagem")
    ).toContainText(
        "Login realizado com sucesso!"
    );

});

