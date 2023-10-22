/* eslint-disable no-undef */
import AboutCard from "./AboutCard";

describe("<AboutCard />", () => {
  it("renders", () => {
    cy.mount(<AboutCard />);
    cy.get('[data-testid="about-card"]').should("exist");
    cy.get('[data-testid="about-card-title"]').should("contain", "Sobre");
    cy.get('[data-testid="company-info"]').should("exist");
    cy.get('[data-testid="company-name"]').should("contain", "Nome");
    cy.get('[data-testid="company-sector"]').should("contain", "Setor");
    cy.get('[data-testid="company-industry"]').should("contain", "Indústria");
    cy.get('[data-testid="company-market-cap"]').should(
      "contain",
      "Market Cap"
    );
    cy.get('[data-testid="data-source"]').should("exist");
  });
});
