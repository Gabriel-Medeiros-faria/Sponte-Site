/// <reference types="cypress"/>

describe("Inputs", () => {
  it("Deve poder escrever nos inputs e fazer mandar o produto para o servidor", () => {
    cy.visit("http://localhost:3000/addProduct");
    cy.get("[data-cy=name]").type("Gabriel Medeiros");
    cy.get("[data-cy=description]").type("Cara muito maneiro");
    cy.get("[data-cy=height]").type(123123);
    cy.get("[data-cy=width]").type(123123);
    cy.get("[data-cy=length]").type(123123);
    cy.get("[data-cy=weight]").type(123123);
    cy.get("[data-cy=value]").type(123123);
    cy.get("[data-cy=image]").type(
      "https://img.olhardigital.com.br/wp-content/uploads/2019/01/20190115163721.jpg"
    );
    cy.get("[data-cy=category]").type("Legal, gente boa");

    cy.intercept("POST", "**/Products").as("postProducts");
    cy.get("[data-cy=submit]").click();
    cy.request("@postProducts").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
