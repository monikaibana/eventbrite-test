import * as data from "../../../cypress";
import { default as createBody } from "../../fixtures/newEvent.json";

context("Create Event API", () => {
  it("create an event", async () => {
    cy.request({
      method: "POST",
      url:
        `${data.baseURL}` +
        "organizations/" +
        `${Cypress.env("organizationId")}` +
        "/events/",
      headers: {
        Authorization: `Bearer ${Cypress.env("authToken")}`,
        "Content-type": "application/json",
      },
      body: createBody,
    }).as("createEvent");

    await cy.get("@createEvent").then((response) => {
      expect(response).property("status").to.equal(200);
      expect(response)
        .property("headers")
        .property("content-type")
        .to.equal("application/json");
      expect(response).property("body").to.not.be.null;
      const responseBody = response.body;
      console.log(responseBody);
    });
  });
});
