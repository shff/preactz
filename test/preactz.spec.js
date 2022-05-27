context("Document", () => {
  it("contains the expected text", () => {
    cy.visit("test/index.html");
    cy.get("body").contains("Preact X + Domz");
  });
});
