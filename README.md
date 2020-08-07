## Eventbrite API Automation Test Suite

This automation test suite is a JavaScript project that uses the Cypress framework to test the EventBrite public API.
There are two test cases. 

The first test case, Create Event, uses the create event API to validate the status code, the header, and the response body.
The second test case, Update Event, uses the create event API, then the update event API to validate the status code, the header, and the response body.

The tests project is organized using folders. All test scripts and test data are in the cypress folder. 
Test data is in the fixtures folder and in the format of JSON files.
Test scripts are js files in the integration folder.
This organizational format was provided by the Cypress framework.

To execute the test cases:

First clone the repo:

##### `git clone https://github.com/monikaibana/eventbrite-test.git`

Next, cd into the root folder

##### `cd eventbrite-test`

Next, install all dependencies

##### `npm i`

Next, create an env file

##### `mkdir cypress.env.json`

Next, cd into this file

##### `cd cypress.env.json`

Next, add environment variables

**shared via email**

Next, open Cypress testrunner

##### `npx cypress open`

Finally, run test cases
