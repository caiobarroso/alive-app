/* eslint-disable no-undef */
import ActualPriceCard from "./ActualPriceCard";

describe("<ActualPriceCard />", () => {
  // Antes de cada teste, buscar os dados da API
  beforeEach(() => {
    cy.request("http://localhost:3001/stock/VAL/quote").as("apiData");
  });

  it("verifies the API data", () => {
    // Verificar se a API retornou dados válidos
    cy.get("@apiData").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("object");
    });
  });

  it("renders with the correct data", () => {
    // Renderizar o componente com os dados da API
    cy.get("@apiData").then((response) => {
      const currentData = response.body;

      cy.mount(<ActualPriceCard currentData={currentData} />);

      cy.get('[data-testid="actual-price-card"]').should("exist");
      cy.get('[data-testid="price-title"]').should("contain", "Preço atual");
      cy.get('[data-testid="current-price"]').should("exist");
      cy.get('[data-testid="price-change"]').should("exist");
      cy.get('[data-testid="update-date"]').should("exist");
    });
  });
});
