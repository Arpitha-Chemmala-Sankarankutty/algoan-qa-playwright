Algoan QA Automation – Playwright Tests

***Project Objective***

This project automates critical user journeys of the Algoan bank connection flow using Playwright.

The goal is to verify that a user can successfully:

Select a bank

Authenticate with the bank using the same device



***Automated Test Scenarios***
1. Bank Selection

The test verifies that a user can:

Authorize data usage

Continue to bank selection

Search for "Algoan Bank"

Select the bank

This ensures the first step of the connection journey works correctly.

2. Authentication (Same Device – No QR Code)

The test verifies that a user can:

Choose authentication on the same device

Confirm instructions

Successfully proceed in the authentication process

This is a critical path because users may not use mobile QR authentication.


***Tech Stack***

Playwright

Node.js

JavaScript

GitHub


***How to Run the Tests***

Install dependencies:

npm install

Run tests:

npx playwright test

Open HTML report:

npx playwright show-report


***What is validated***

The automation validates functional behavior instead of UI text.
Selectors are designed to be language-independent and stable.


***Repository Content***

/tests → automated test cases

playwright.config.js → configuration

package.json → dependencies