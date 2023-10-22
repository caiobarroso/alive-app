/* eslint-disable no-undef */
import CompareChart from "./CompareChart";

describe("<CompareChart />", () => {
  it("renders with API data of the correct type", () => {
    cy.request(
      "http://localhost:3001/stocks/VAL/compare?stocksToCompare[]=VALE&stocksToCompare[]=V"
    ).then((response) => {
      const { body: currentData } = response;

      expect(currentData.lastPrices).to.be.an("array");
      expect(currentData.lastPrices.length).to.be.greaterThan(0);

      cy.mount(<CompareChart currentData={currentData} />);
    });
  });
});
