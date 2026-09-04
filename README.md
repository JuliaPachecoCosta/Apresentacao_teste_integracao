# 🧪 Testes de Integração & E2E

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:F7DF1E,50:00A98F,100:2EAD33&height=200&section=header&text=Testes%20de%20Software&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=35" width="100%"/>
</p>

<p align="center">
  <strong>🔗 Testes de Integração • 🌐 Testes End-to-End • 🤖 Automação</strong>
</p>

<p align="center">
  Projeto acadêmico desenvolvido para explorar a importância dos testes de software e da automação de fluxos completos de uma aplicação.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/QA-Quality%20Assurance-2EAD33?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"/>
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white"/>
</p>

---

## 📌 Índice

<details>
<summary>📚 Clique para navegar</summary>

* [🎯 Sobre o projeto](#-sobre-o-projeto)
* [💡 Objetivos](#-objetivos)
* [🔗 Testes de Integração](#-testes-de-integração)
* [🌐 Testes E2E](#-testes-end-to-end-e2e)
* [🆚 Integração x E2E](#-integração-x-e2e)
* [🛠️ Tecnologias](#️-tecnologias)
* [🤖 Ferramentas E2E](#-ferramentas-e2e)
* [🧪 Demonstração prática](#-demonstração-prática)
* [📂 Estrutura](#-estrutura-do-projeto)
* [📊 Fluxo do teste](#-fluxo-do-teste)
* [✅ Conclusão](#-conclusão)

</details>

---

# 🎯 Sobre o projeto

Este projeto apresenta conceitos fundamentais relacionados a **Testes de Integração** e **Testes End-to-End (E2E)**.

A proposta é compreender como diferentes partes de uma aplicação trabalham juntas e como podemos automatizar uma **jornada completa do usuário**.

Durante o projeto, são abordados:

> 🔗 Comunicação entre telas, componentes e APIs
> 🌐 Simulação da navegação de um usuário
> 🤖 Automação de testes
> 🧪 Execução de cenários E2E
> ✅ Validação dos resultados esperados

---

# 💡 Objetivos

### 🧠 Conhecimento

* Entender o conceito de Teste de Integração;
* Compreender o funcionamento dos testes E2E;
* Identificar as diferenças entre os dois tipos de teste.

### 🧪 Prática

* Criar um cenário de teste;
* Automatizar uma jornada do usuário;
* Executar o teste diretamente no navegador;
* Validar o resultado esperado.

### 🚀 Qualidade

* Encontrar falhas;
* Aumentar a confiabilidade da aplicação;
* Garantir que diferentes partes do sistema funcionem em conjunto.

---

# 🔗 Testes de Integração

Os **Testes de Integração** verificam se diferentes partes de uma aplicação conseguem se comunicar corretamente.

Imagine um sistema de login:

```text
       👤 USUÁRIO
            │
            ▼
      🖥️ TELA DE LOGIN
            │
            ▼
      🧩 COMPONENTE
            │
            ▼
         🔌 API
            │
            ▼
       🗄️ BANCO DE DADOS
```

O objetivo é verificar se cada etapa consegue conversar corretamente com a próxima.

### 🔍 Exemplos

| Integração              | Verificação                 |
| ----------------------- | --------------------------- |
| 🖥️ Tela → Componente   | Dados enviados corretamente |
| 🧩 Componente → API     | Requisição realizada        |
| 🔌 API → Banco          | Dados consultados           |
| 🔐 Login → Autenticação | Usuário validado            |
| 🌐 Front-end → Back-end | Comunicação funcionando     |

---

# 🌐 Testes End-to-End (E2E)

Os testes **End-to-End** verificam o sistema de ponta a ponta.

Nesse tipo de teste, simulamos ações que um usuário real faria dentro da aplicação.

### 👤 Exemplo: Login

```text
🌐 Acessar site
      ↓
🔐 Abrir login
      ↓
📧 Digitar e-mail
      ↓
🔑 Digitar senha
      ↓
🖱️ Clicar em "Entrar"
      ↓
⏳ Sistema processa
      ↓
✅ Login realizado
      ↓
🏠 Dashboard
```

O teste não verifica somente um botão.

Ele verifica se **todo o fluxo funciona corretamente**.

---

# 🆚 Integração x E2E

| 🔎 Característica | 🔗 Integração          | 🌐 E2E                   |
| ----------------- | ---------------------- | ------------------------ |
| 🎯 Objetivo       | Testar comunicação     | Testar jornada completa  |
| 👤 Usuário        | Indireto               | Simulado                 |
| 🌐 Navegador      | Pode não utilizar      | Normalmente utiliza      |
| 🔌 API            | Muito comum            | Pode participar do fluxo |
| 📦 Escopo         | Médio                  | Maior                    |
| ⚡ Velocidade      | Geralmente mais rápido | Geralmente mais demorado |
| 💡 Exemplo        | Componente → API       | Login → Dashboard        |

### 💭 Em uma frase:

**Integração:**

> "As partes do sistema estão conversando?"

**E2E:**

> "O usuário consegue completar sua jornada?"

---

# 🛠️ Tecnologias

As tecnologias foram escolhidas de acordo com suas funções no desenvolvimento e automação dos testes.

<p align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,cypress,playwright,git,github" />

</p>

### 🟧 HTML5

Responsável pela **estrutura das páginas** utilizadas na aplicação.

### 🟦 CSS3

Responsável pela **estilização e apresentação visual**.

### 🟨 JavaScript

Utilizado para a **lógica da aplicação e criação dos testes automatizados**.

### 🟩 Cypress

Framework utilizado para realizar **testes automatizados em aplicações web**.

### 🟢 Playwright

Ferramenta utilizada para **automação de navegadores e testes E2E**.

### ⚫ Git & GitHub

Utilizados para **versionamento e armazenamento do projeto**.

---

# 🤖 Ferramentas E2E

## 🟩 Cypress

O Cypress permite criar testes que simulam ações do usuário diretamente no navegador.

### Exemplo:

```javascript
describe('Login', () => {

  it('deve realizar login com sucesso', () => {

    cy.visit('http://localhost:3000');

    cy.get('#email')
      .type('usuario@email.com');

    cy.get('#senha')
      .type('123456');

    cy.get('#btn-login')
      .click();

    cy.contains('Bem-vindo')
      .should('be.visible');

  });

});
```

---

## 🟢 Playwright

O Playwright também permite automatizar navegadores e criar cenários E2E.

```javascript
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {

  await page.goto('http://localhost:3000');

  await page.fill(
    '#email',
    'usuario@email.com'
  );

  await page.fill(
    '#senha',
    '123456'
  );

  await page.click('#btn-login');

  await expect(
    page.getByText('Bem-vindo')
  ).toBeVisible();

});
```

---

# 🧪 Demonstração prática

### 🎬 Cenário

O usuário precisa realizar login no sistema.

### 📋 Cenário de teste

| Etapa | Ação                | Resultado esperado |
| ----- | ------------------- | ------------------ |
| 01    | Acessar sistema     | Página carregada   |
| 02    | Informar e-mail     | Campo preenchido   |
| 03    | Informar senha      | Campo preenchido   |
| 04    | Clicar em entrar    | Requisição enviada |
| 05    | Validar resposta    | Login realizado    |
| 06    | Verificar dashboard | Dashboard exibido  |

---

# 📊 Fluxo do teste

```text
                 🚀 INÍCIO
                    │
                    ▼
            🌐 Abrir aplicação
                    │
                    ▼
             🔐 Tela de Login
                    │
                    ▼
             📧 Informar e-mail
                    │
                    ▼
              🔑 Informar senha
                    │
                    ▼
              🖱️ Clicar em entrar
                    │
                    ▼
             🔌 Comunicação API
                    │
                    ▼
             🔎 Validar resposta
                    │
             ┌──────┴──────┐
             │             │
             ▼             ▼
           ✅ OK          ❌ ERRO
             │             │
             ▼             ▼
       🏠 Dashboard    🚨 Falha
```

---

# 📂 Estrutura do Projeto

```text
📦 testes-integracao-e2e
│
├── 📁 src
│   ├── 📄 index.html
│   ├── 📄 style.css
│   └── 📄 script.js
│
├── 📁 cypress
│   ├── 📁 e2e
│   │   └── 📄 login.cy.js
│   │
│   ├── 📁 fixtures
│   │
│   └── 📁 support
│
├── 📄 package.json
├── 📄 cypress.config.js
└── 📄 README.md
```

---

# ✅ O que foi aprendido?

Ao final do projeto, foi possível compreender:

* 🔗 O funcionamento dos Testes de Integração;
* 🌐 O conceito de Testes End-to-End;
* 👤 A simulação da jornada de um usuário;
* 🤖 A automação de testes;
* 🧪 A criação de cenários E2E;
* 🟩 O funcionamento do Cypress;
* 🟢 O funcionamento do Playwright;
* ✅ A importância da validação de fluxos completos.

---

# 🏆 Conclusão

Os **Testes de Integração** e os **Testes End-to-End** possuem papéis diferentes, mas complementares dentro da qualidade de software.

Enquanto os testes de integração verificam se diferentes partes da aplicação conseguem trabalhar juntas, os testes E2E analisam a aplicação através de uma **jornada completa do usuário**.

Com ferramentas como **Cypress** e **Playwright**, esse processo pode ser automatizado, tornando os testes mais rápidos, repetíveis e confiáveis.

> 💻 **Código funcionando é importante.
> Código funcionando com qualidade é essencial.** 🧪

---

<p align="center">

### 🧪 QA • 🔗 Integração • 🌐 E2E • 🤖 Automação

**Desenvolvido para fins acadêmicos — SENAI**

</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2EAD33,50:00A98F,100:F7DF1E&height=120&section=footer"/>
</p>
