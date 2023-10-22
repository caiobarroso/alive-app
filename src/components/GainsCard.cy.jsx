/* eslint-disable no-undef */
import GainsCard from "./GainsCard";

describe("<GainsCard />", () => {
  // Antes de cada teste, buscar os dados da API
  beforeEach(() => {
    cy.request(
      "http://localhost:3001/stocks/VAL/gains?purchasedAt=Nov%2001%202022%20GMT-0300&purchasedAmount=10.5"
    ).as("apiData");
  });

  it("verifies the API data", () => {
    cy.get("@apiData").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("object");
    });
  });

  it("renders with the correct data", () => {
    cy.get("@apiData").then((response) => {
      const currentData = response.body;

      cy.mount(<GainsCard currentData={currentData} />);

      cy.get('[data-testid="gains-card"]').should("exist");
      cy.get('[data-testid="gains-card-title"]').should("contain", "Projeção");
      cy.get('[data-testid="stock-name"]').should("exist");
      cy.get('[data-testid="current-price-title"]').should("contain", "Preço");
      cy.get('[data-testid="current-price-value"]').should("exist");
      cy.get('[data-testid="priced-at-title"]').should("contain", "Compra");
      cy.get('[data-testid="priced-at-value"]').should("exist");
      cy.get('[data-testid="quantity-title"]').should("contain", "Quantidade");
      cy.get('[data-testid="quantity-value"]').should("exist");
      cy.get('[data-testid="variation-title"]').should("contain", "Variação");
      cy.get('[data-testid="variation-value"]').should("exist");
      cy.get('[data-testid="legend"]').should("contain", "Variação");
    });
  });
});
