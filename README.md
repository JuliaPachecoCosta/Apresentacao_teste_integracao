# 🧪 Testes End-to-End — Cypress e Playwright

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</p>

---

## 📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de demonstrar a utilização de **Testes End-to-End (E2E)** em uma aplicação web.

O teste simula a jornada de um usuário realizando **login com dados válidos**, verificando se o sistema apresenta corretamente a mensagem:

> ✅ **Login realizado com sucesso!**

O mesmo cenário foi automatizado utilizando duas ferramentas diferentes:

- 🟢 **Cypress**
- 🟩 **Playwright**

Dessa forma, é possível comparar como cada ferramenta realiza a automação do mesmo fluxo de usuário.

---

## 🎯 Objetivo

O principal objetivo é verificar se o fluxo completo de login funciona corretamente, desde o acesso à página até a apresentação da mensagem de sucesso.

### 🔄 Fluxo testado

```text
🌐 Acessar a página
       ↓
📧 Preencher e-mail
       ↓
🔑 Preencher senha
       ↓
🖱️ Clicar em "Entrar"
       ↓
🔍 Verificar mensagem
       ↓
✅ Login realizado com sucesso!
```

---

# 🧪 O que é um teste E2E?

O **Teste End-to-End (E2E)** verifica uma aplicação simulando as ações que um usuário realizaria.

Neste projeto, o teste percorre o fluxo completo de login:

1. 🌐 Acessa a página;
2. 🔎 Localiza o campo de e-mail;
3. 📧 Preenche o e-mail;
4. 🔎 Localiza o campo de senha;
5. 🔑 Preenche a senha;
6. 🖱️ Clica no botão de login;
7. ✅ Verifica se a mensagem de sucesso é apresentada.

O objetivo é garantir que o fluxo funcione corretamente do início ao fim.

---

# 🟢 Teste E2E com Cypress

O **Cypress** foi utilizado para automatizar o fluxo de login.

### 📄 Arquivo

```text
cypress/e2e/login.cy.js
```

### 💻 Código

```javascript
describe("Teste de Login", () => {

    it("deve realizar login com sucesso", () => {

        cy.visit("http://127.0.0.1:5500/index.html");

        cy.get("#email")
            .type("usuario@email.com");

        cy.get("#senha")
            .type("123456");

        cy.get("#btn-login")
            .click();

        cy.get("#mensagem")
            .should(
                "contain",
                "Login realizado com sucesso!"
            );

    });

});
```

---

## 🔎 Principais comandos do Cypress

| Comando | Função |
|---|---|
| `describe()` | Organiza o grupo de testes |
| `it()` | Define o cenário que será testado |
| `cy.visit()` | Acessa a página |
| `cy.get()` | Localiza um elemento |
| `.type()` | Digita informações |
| `.click()` | Simula um clique |
| `.should()` | Verifica o resultado esperado |

---

# 🟩 Teste E2E com Playwright

O mesmo cenário foi desenvolvido utilizando o **Playwright**.

### 📄 Arquivo

```text
tests/login.spec.js
```

### 💻 Código

```javascript
const { test, expect } = require("@playwright/test");

test("deve realizar login com sucesso", async ({ page }) => {

    await page.goto(
        "http://127.0.0.1:5500/index.html"
    );

    await page.fill(
        "#email",
        "usuario@email.com"
    );

    await page.fill(
        "#senha",
        "123456"
    );

    await page.click("#btn-login");

    await expect(
        page.locator("#mensagem")
    ).toContainText(
        "Login realizado com sucesso!"
    );

});
```

---

## 🔎 Principais comandos do Playwright

| Comando | Função |
|---|---|
| `test()` | Define o teste |
| `page` | Representa a página do navegador |
| `page.goto()` | Acessa a página |
| `page.fill()` | Preenche um campo |
| `page.click()` | Simula um clique |
| `page.locator()` | Localiza um elemento |
| `expect()` | Realiza uma verificação |
| `toContainText()` | Verifica se o elemento contém determinado texto |

---

# ⚖️ Cypress x Playwright

Os dois testes realizam **exatamente o mesmo cenário de login**.

| Característica | 🟢 Cypress | 🟩 Playwright |
|---|---|---|
| Teste E2E | ✅ | ✅ |
| Automação do navegador | ✅ | ✅ |
| Preenchimento de campos | `.type()` | `.fill()` |
| Clique | `.click()` | `.click()` |
| Localização | `cy.get()` | `page.locator()` |
| Verificação | `.should()` | `expect()` |
| Linguagem utilizada | JavaScript | JavaScript |

---

## 💡 Neste projeto

Apesar de utilizarem comandos diferentes, as duas ferramentas executam **exatamente o mesmo cenário de teste**.

```text
              👤 USUÁRIO
                  │
                  ▼
          🔐 REALIZA LOGIN
                  │
          ┌───────┴───────┐
          ▼               ▼
      🟢 CYPRESS      🟩 PLAYWRIGHT
          │               │
          └───────┬───────┘
                  ▼
          🔍 VERIFICAÇÃO
                  │
                  ▼
        ✅ TESTE APROVADO
```

---

# 📂 Estrutura do projeto

```text
📦 projeto_testes
│
├── 📁 .github/
│
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   └── 🧪 login.cy.js
│   │
│   ├── 📁 fixtures/
│   │
│   └── 📁 support/
│
├── 📁 tests/
│   └── 🧪 login.spec.js
│
├── 📁 node_modules/
│
├── 📁 playwright-report/
│
├── 📁 test-results/
│
├── 📄 .gitignore
├── ⚙️ cypress.config.js
├── 🌐 index.html
├── 📄 package-lock.json
├── 📦 package.json
├── ⚙️ playwright.config.js
├── ⚙️ script.js
└── 🎨 style.css
```

---

# 📁 Principais arquivos

### 🌐 `index.html`

Contém a estrutura da tela de login, incluindo:

- 📧 Campo de e-mail;
- 🔑 Campo de senha;
- 🖱️ Botão de entrada;
- 💬 Área para exibição da mensagem.

---

### 🎨 `style.css`

Responsável pela aparência e estilização da página de login.

---

### ⚙️ `script.js`

Contém a lógica responsável por verificar os dados inseridos pelo usuário.

---

### 🧪 `cypress/e2e/login.cy.js`

Contém o teste E2E desenvolvido utilizando **Cypress**.

---

### 🧪 `tests/login.spec.js`

Contém o teste E2E desenvolvido utilizando **Playwright**.

---

### ⚙️ `cypress.config.js`

Arquivo de configuração do Cypress.

---

### ⚙️ `playwright.config.js`

Arquivo de configuração do Playwright.

---

### 📊 `playwright-report/`

Pasta utilizada pelo Playwright para armazenar os relatórios dos testes.

---

### 📋 `test-results/`

Armazena informações geradas durante a execução dos testes.

---

# 🚀 Como executar o projeto

## 1️⃣ Instalar as dependências

No terminal do VS Code:

```bash
npm install
```

---

## 2️⃣ Abrir a aplicação

Execute a aplicação utilizando o **Live Server** no VS Code.

A aplicação será disponibilizada em:

```text
http://127.0.0.1:5500/index.html
```

> ⚠️ **Importante:** o Live Server precisa estar funcionando para que os testes consigam acessar a página.

---

# 🟢 Executando o Cypress

No terminal:

```bash
npx cypress open
```

Depois:

1. Selecione **E2E Testing**;
2. Escolha o navegador;
3. Selecione `login.cy.js`;
4. O Cypress executará automaticamente o cenário.

### ✅ Resultado esperado

```text
Login realizado com sucesso!
```

---

# 🟩 Executando o Playwright

Para executar o teste visualmente:

```bash
npx playwright test --headed
```

Para executar normalmente:

```bash
npx playwright test
```

O Playwright irá abrir o navegador, realizar as ações do usuário e verificar o resultado esperado.

---

# ✅ Resultado esperado

O teste deve seguir o seguinte fluxo:

```text
🌐 Página de Login
        ↓
📧 usuario@email.com
        ↓
🔑 123456
        ↓
🖱️ Entrar
        ↓
🔍 Verificar mensagem
        ↓
🎉 Login realizado com sucesso!
```

Se a mensagem esperada for encontrada, o teste será considerado **aprovado**. ✅

---

# 📚 Conceitos utilizados

Durante o desenvolvimento foram utilizados conceitos relacionados a:

- 🧪 Testes de Software
- 🔗 Testes de Integração
- 🌐 Testes End-to-End
- 🤖 Automação de testes
- 🖥️ Simulação da jornada do usuário
- 🔍 Asserções e validações
- 🟢 Cypress
- 🟩 Playwright
- 💻 JavaScript
- 🌐 HTML5
- 🎨 CSS3

---

# 💡 Conclusão

Este projeto demonstra como os **Testes End-to-End** podem ser utilizados para verificar um fluxo completo de uma aplicação.

Foi desenvolvido um **único cenário de login com sucesso** e automatizado utilizando **Cypress e Playwright**.

Mesmo possuindo diferentes comandos e formas de implementação, ambas as ferramentas conseguem simular as ações do usuário e verificar se o resultado esperado foi apresentado.

### 🔄 Fluxo automatizado

```text
🌐 Acessar a aplicação
        ↓
📧 Preencher e-mail
        ↓
🔑 Preencher senha
        ↓
🖱️ Clicar em Entrar
        ↓
🔍 Verificar resultado
        ↓
✅ Validar o fluxo
```

---

# 🎯 Resultado

> Um mesmo cenário de usuário pode ser automatizado utilizando diferentes ferramentas de teste.

Neste projeto, **Cypress e Playwright** foram utilizados para automatizar o mesmo fluxo de login, permitindo compreender suas diferenças e semelhanças na prática.

<p align="center">
  🧪 Desenvolvido para fins educacionais 💗
</p>
