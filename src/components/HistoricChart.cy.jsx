/* eslint-disable no-undef */
import React from "react";
import HistoricChart from "./HistoricChart";

describe("<HistoricChart />", () => {
  it("renders with API data of the correct type", () => {
    // Assume you have a function to fetch data from your API
    cy.request(
      "http://localhost:3001/stocks/VAL/history?from=Nov%2002%202022%20GMT-0300&to=Nov%2009%202022%20GMT-0300"
    ).then((response) => {
      const { body: currentData } = response;

      // Logging the data for debugging purposes
      expect(currentData.name).to.be.a("string");
      expect(currentData.prices).to.be.an("array");
      expect(currentData.prices.length).to.be.greaterThan(0);

      cy.mount(<HistoricChart currentData={currentData} />);
    });
  });
});
