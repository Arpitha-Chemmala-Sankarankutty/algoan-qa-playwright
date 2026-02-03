\# Algoan QA Playwright Tests



This repository contains automated end-to-end tests created as part of the QA Engineer Internship technical exercise for Algoan.



\## Scenarios Covered



\### 1. Authorization Flow

\- User opens the Algoan Open Banking init URL

\- User authorizes data sharing

\- User can continue to the next step



File: `tests/authorization.spec.js`



\### 2. Bank Selection Flow

\- User reaches the bank selection step

\- Bank list is displayed

\- User can see and select "Algoan Bank"



File: `tests/bank-selection.spec.js`



\## Tech Stack

\- Playwright

\- JavaScript

\- Node.js



\## How to Run the Tests



```bash

npm install

npx playwright test

