# 🧪 Testes de Integração e End-to-End (E2E)

<p align="center">
  <img src="https://img.shields.io/badge/QA-Testes%20de%20Software-e91e63?style=for-the-badge" alt="QA">
  <img src="https://img.shields.io/badge/Testes-Integração-9c27b0?style=for-the-badge" alt="Testes de Integração">
  <img src="https://img.shields.io/badge/Testes-E2E-673ab7?style=for-the-badge" alt="Testes E2E">
</p>

<p align="center">
  Projeto desenvolvido para estudar e praticar <strong>Testes de Integração</strong> e <strong>Testes End-to-End (E2E)</strong>, verificando o funcionamento de aplicações a partir da perspectiva do usuário.
</p>

---

## 📚 Sobre o Projeto

Este projeto aborda dois importantes níveis de testes de software:

* 🔗 **Testes de Integração**
* 🌐 **Testes End-to-End (E2E)**

O objetivo é compreender como diferentes partes de uma aplicação trabalham em conjunto e como podemos validar uma **jornada completa do usuário**, desde a navegação pelas telas até a comunicação com uma API.

Além da parte teórica, o projeto conta com uma **demonstração prática de um fluxo automatizado no navegador**, utilizando ferramentas de testes E2E.

---

## 🎯 Objetivos

Ao desenvolver este projeto, buscamos:

* 🧠 Compreender o conceito de Teste de Integração;
* 🔗 Verificar a comunicação entre telas, componentes e APIs;
* 🌐 Entender o funcionamento dos Testes End-to-End;
* 👤 Simular a jornada real de um usuário;
* 🤖 Conhecer ferramentas de automação de testes;
* 🧪 Criar e executar um teste E2E simples;
* ✅ Identificar possíveis falhas em um fluxo completo da aplicação.

---

# 🔗 1. Testes de Integração

Os **Testes de Integração** verificam se diferentes partes de um sistema conseguem trabalhar corretamente em conjunto.

Enquanto um teste unitário pode verificar apenas um componente ou função isoladamente, o teste de integração analisa a comunicação entre diferentes partes da aplicação.

### 💡 Exemplo

Imagine uma tela de login:

```text
┌──────────────┐
│ Tela de Login│
└──────┬───────┘
       ↓
┌──────────────┐
│ Componente   │
│ de Login     │
└──────┬───────┘
       ↓
┌──────────────┐
│     API      │
└──────┬───────┘
       ↓
┌──────────────┐
│ Banco de     │
│ Dados        │
└──────────────┘
```

O teste de integração pode verificar se:

* A tela envia corretamente os dados;
* O componente realiza a chamada para a API;
* A API responde corretamente;
* A aplicação interpreta a resposta;
* O usuário recebe a mensagem ou é direcionado para a próxima tela.

### 🔎 O que pode ser testado?

| Integração              | O que verificar              |
| ----------------------- | ---------------------------- |
| 🖥️ Tela + componente   | Comunicação correta          |
| 🧩 Componente + API     | Envio e recebimento de dados |
| 🔌 API + banco          | Persistência das informações |
| 🔐 Login + autenticação | Validação das credenciais    |
| 📦 Front-end + Back-end | Funcionamento conjunto       |

---

# 🌐 2. Testes End-to-End (E2E)

Os **Testes End-to-End**, conhecidos como **E2E**, verificam uma aplicação de ponta a ponta.

O objetivo é reproduzir uma situação próxima daquilo que um usuário real faria.

Em vez de testar apenas uma função ou integração específica, o E2E verifica um **fluxo completo**.

### 👤 Exemplo de jornada

Um teste E2E de login pode seguir o seguinte fluxo:

```text
🚀 Início
   ↓
🌐 Acessar o sistema
   ↓
🔐 Abrir tela de login
   ↓
✏️ Informar usuário
   ↓
🔑 Informar senha
   ↓
🖱️ Clicar em "Entrar"
   ↓
✅ Validar login
   ↓
🏠 Verificar página inicial
   ↓
🎉 Fluxo concluído
```

Esse tipo de teste ajuda a verificar se as diferentes partes da aplicação funcionam corretamente **juntas**, do ponto de vista do usuário.

---

# 🆚 Integração x E2E

| Característica  | Teste de Integração      | Teste E2E                  |
| --------------- | ------------------------ | -------------------------- |
| 🎯 Foco         | Comunicação entre partes | Fluxo completo             |
| 👤 Usuário real | Não necessariamente      | Simulado                   |
| 🌐 Navegador    | Opcional                 | Geralmente utilizado       |
| 🔗 APIs         | Frequentemente testadas  | Podem fazer parte do fluxo |
| 🧪 Escopo       | Médio                    | Amplo                      |
| ⏱️ Execução     | Geralmente mais rápida   | Geralmente mais lenta      |
| 💡 Exemplo      | Tela → API               | Login → Dashboard          |

### 📌 Resumindo:

> **Teste de Integração:** verifica se as partes do sistema conseguem conversar corretamente.

> **Teste E2E:** verifica se o sistema funciona corretamente durante uma jornada completa do usuário.

---

# 🛠️ 3. Ferramentas para Testes E2E

Para automatizar testes End-to-End, existem diversas ferramentas disponíveis.

## 🌲 Cypress

O **Cypress** é uma ferramenta bastante utilizada para testes automatizados de aplicações web.

Com ele, podemos:

* 🌐 Abrir páginas;
* 🖱️ Clicar em elementos;
* ✏️ Preencher campos;
* 🔎 Verificar textos;
* 🔐 Testar login;
* ✅ Validar resultados;
* 📸 Registrar evidências dos testes.

### Exemplo:

```javascript
describe('Teste de Login', () => {
  it('deve realizar login com sucesso', () => {
    cy.visit('http://localhost:3000');

    cy.get('#email').type('usuario@email.com');
    cy.get('#senha').type('123456');

    cy.get('#btn-login').click();

    cy.contains('Bem-vindo').should('be.visible');
  });
});
```

---

## 🎭 Playwright

O **Playwright** também é uma ferramenta utilizada para automação de testes E2E.

Ele permite automatizar navegadores e simular ações realizadas por usuários.

### Exemplo:

```javascript
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#email', 'usuario@email.com');
  await page.fill('#senha', '123456');

  await page.click('#btn-login');

  await expect(page.getByText('Bem-vindo')).toBeVisible();
});
```

---

# 🧪 4. Prática — Teste E2E

A parte prática do projeto consiste na criação de um teste automatizado capaz de executar uma jornada no navegador.

### 🔐 Fluxo escolhido: Login

O teste deverá:

1. 🌐 Acessar a aplicação;
2. 🔐 Encontrar a tela de login;
3. ✏️ Preencher o usuário;
4. 🔑 Preencher a senha;
5. 🖱️ Clicar no botão de login;
6. ✅ Verificar se o login foi realizado;
7. 🏠 Validar o acesso à página seguinte.

### Resultado esperado

```text
[ Acessar aplicação ]
          ↓
[ Preencher login ]
          ↓
[ Preencher senha ]
          ↓
[ Clicar em Entrar ]
          ↓
[ Sistema processa ]
          ↓
[ Usuário autenticado ]
          ↓
[ Dashboard exibido ]
```

---

# 📂 Estrutura do Projeto

Uma possível organização para o projeto:

```text
📦 testes-integracao-e2e
│
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   └── login.cy.js
│   │
│   ├── 📁 fixtures/
│   └── 📁 support/
│
├── 📁 src/
│   └── arquivos-da-aplicacao
│
├── 📄 package.json
├── 📄 cypress.config.js
└── 📄 README.md
```

> A estrutura pode ser adaptada de acordo com a ferramenta utilizada e com a organização da aplicação.

---

# 🔍 O que o teste está validando?

Durante a execução do teste E2E, podemos validar:

* ✅ A página de login é carregada;
* ✅ Os campos estão disponíveis;
* ✅ Os dados podem ser inseridos;
* ✅ O botão de login funciona;
* ✅ A requisição é processada;
* ✅ O usuário é autenticado;
* ✅ O sistema redireciona corretamente;
* ✅ A página esperada é exibida.

---

# 📊 Importância dos Testes

Os testes de integração e E2E são importantes porque ajudam a encontrar problemas que podem não aparecer quando cada parte do sistema é testada separadamente.

### 🔗 Testes de Integração

Garantem que os componentes e serviços consigam **se comunicar corretamente**.

### 🌐 Testes E2E

Garantem que uma **jornada completa do usuário** funcione como esperado.

Juntos, eles contribuem para aumentar a:

**Qualidade → Confiabilidade → Estabilidade → Experiência do usuário**

---

# 🚀 Tecnologias e Ferramentas

<p align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge\&logo=cypress\&logoColor=white)

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge\&logo=playwright\&logoColor=white)

</p>

---

# 📌 Conclusão

Os **Testes de Integração** e os **Testes End-to-End** são fundamentais para garantir que uma aplicação não apenas funcione individualmente, mas também consiga executar seus fluxos completos corretamente.

Neste projeto, foi possível compreender a diferença entre esses tipos de teste, conhecer ferramentas de automação como **Cypress e Playwright** e aplicar os conceitos em um fluxo prático de navegação e login.

> 🧪 **Testar não é apenas encontrar erros. É garantir qualidade em cada etapa da experiência do usuário.**

---

## 👩‍💻 Projeto Acadêmico

**Tema:** Testes de Integração e End-to-End (E2E)
**Área:** Quality Assurance (QA) / Testes de Software
**Instituição:** SENAI
**Objetivo:** Estudo, demonstração e prática de testes automatizados.

---

<p align="center">
  Desenvolvido para fins educacionais 💗
</p>
