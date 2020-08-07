import * as data from "../../../cypress";
import { default as createBody } from "../../fixtures/newEvent.json";
import { default as updateBody } from "../../fixtures/editEvent.json";

var eventId;

context("Update Event API", () => {
  it("create then update event", async () => {
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

    await cy
      .get("@createEvent")
      .then((response) => {
        expect(response).property("status").to.equal(200);
        console.log(response.body.id);
        const eventId = response.body.id;
        return eventId;
      })
      .then(async (eventId) => {
        cy.request({
          method: "POST",
          url: `${data.baseURL}` + "events/" + eventId + "/",
          headers: {
            Authorization: `Bearer ${Cypress.env("authToken")}`,
            "Content-type": "application/json",
          },
          body: updateBody,
        }).as("updateEvent");
        await cy.get("@updateEvent").then((response) => {
          expect(response).property("status").to.equal(200);
          expect(response)
            .property("headers")
            .property("content-type")
            .to.equal("application/json");
          expect(response).property("body").to.not.be.null;
        });
      });
  });
});
