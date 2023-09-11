import moment from "moment";

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.request({
      method: "GET",
      url: "https://brands-dashboard-api.klickly-dev.com/orders",
      qs: {
        page: 1,
        where: {
          commission: { filterCommissionType: "all" },
          types: { klickly_orders: 1, shopify_orders: 0 },
          date: {
            startDate: moment().subtract(1, "day").toISOString(),
            endDate: moment().toISOString(),
          },
        },
        order: ["processed_at", "desc"],
      },
      timeout: 60000,
    });
  });
});
