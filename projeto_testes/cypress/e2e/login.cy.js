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