# QA E2E UI & API Challenge

## Overview

This repository contains automated UI and API tests developed for the QA Technical Challenge.

The project validates both the Sauce Demo e-commerce platform and the Restful-Booker API, covering functional, negative, performance, and security scenarios.

The solution was designed with focus on:

- Test organization and maintainability
- Reusable utilities and abstraction layers
- Evidence generation and traceability
- Reporting and debugging support
- Scalability for future test coverage expansion

---

# Applications Tested

## UI Testing

- Sauce Demo  
https://www.saucedemo.com/

## API Testing

- Restful-Booker  
https://restful-booker.herokuapp.com/

---

# Technologies & Tools

- Playwright
- TypeScript
- Node.js
- Postman
- HTML Playwright Reporter

---

# Implemented Test Coverage

## UI Testing

### Level 1 - Required

- Login validation with different user types ✅
- Product sorting and filtering ✅
- Complete checkout flow ✅
- Cart item removal ✅
- Navigation between pages ✅
- Logout validation ✅

### Level 2 - Differential

- Accessibility testing
- Automated E2E testing with Playwright
- Screenshot, video and trace generation
- Organized evidence management

---

## API Testing

### Level 1 - Required

- Authentication validation ✅
- Booking CRUD operations ✅
- Booking search and filters ✅
- Required field validation ✅
- Negative scenarios ✅

### Level 2 - Differential

- Performance testing ✅
- Security testing ✅
- Automated API scripts ✅
- API evidence generation in JSON format ✅
- Reusable API abstraction layer ✅

---

# Installation

## Prerequisites

Make sure the following tools are installed:

- Node.js (recommended: v18+)
- npm
- Git

---

## Clone Repository

```bash
git clone <repository-url>
cd qa-e2e-ui-api-challenge
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

This command installs the required browser binaries used by Playwright.

---

# Running Tests

## Run All Tests

```bash
npx playwright test
```

---

## Run UI Tests Only

```bash
npx playwright test tests/e2e
```

---

## Run API Tests Only

```bash
npx playwright test tests/api
```

---

## Run Specific Test File

Example:

```bash
npx playwright test tests/api/auth.spec.ts
```

---

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

## Run Tests with Debug Mode

```bash
npx playwright test --debug
```

---

# Reports

## Generate HTML Report

```bash
npx playwright test --reporter=html
```

---

## Open HTML Report

```bash
npx playwright show-report
```

The project generates:

- HTML execution reports
- Screenshots
- Videos
- Traces
- API execution evidence

---

# Evidence Generation

During execution, the framework automatically generates:

## UI Evidence

- Screenshots

## API Evidence

- Request payloads
- Response body
- Status codes
- Headers
- JSON evidence files

Evidence is stored under:

```bash
evidences/
├── api/
└── e2e/
```

---

# Evidence Structure

```bash
evidences/
├── api/
│   ├── authenticate/
│   ├── create-booking/
│   ├── update-booking/
│   └── performance-create-booking/
│
└── e2e/
    ├── login/
    ├── checkout/
    ├── cart/
    └── accessibility/
```

---

# API Collection

The Postman collection is available at:

```bash
docs/restful-booker-collection.json
```

---

# Assumptions

- Sauce Demo and Restful-Booker are public/shared environments
- Some API responses may vary depending on environment state
- Booking IDs may change dynamically during executions
- API evidence is stored in JSON format
- UI evidence is stored as screenshots, traces and videos

---

# Known Findings

- Public environments may occasionally present unstable responses
- Security validation behavior may vary in the public API environment
- Some security scenarios intentionally expose potential API weaknesses for analysis purposes

---

# Project Structure

```bash
tests/
├── api/
└── e2e/

utils/
├── apiClient.ts
├── apiEvidence.ts
├── auth.ts
└── screenshot.ts

docs/
├── Restful Booker API Tests.postman_collection.json

evidences/
├── api
│   │   ├── create-booking
│   │   │   └── success
│   │   │       ├── 2026-05-13T18-59-29-223Z.json
│   │   │       ├── 2026-05-13T19-35-01-384Z.json
│   │   │       ├── 2026-05-13T19-36-35-601Z.json
│   │   │       ├── 2026-05-13T19-40-00-123Z.json
│   │   │       └── 2026-05-13T19-40-44-229Z.json
│   │   ├── create-booking-successfully
│   │   │   └── success
│   │   │       ├── 2026-05-13T18-59-29-221Z.json
│   │   │       ├── 2026-05-13T19-35-01-369Z.json
│   │   │       ├── 2026-05-13T19-36-35-600Z.json
│   │   │       ├── 2026-05-13T19-40-00-106Z.json
│   │   │       └── 2026-05-13T19-40-44-248Z.json
│   │   ├── delete-booking
│   │   │   └── success
│   │   │       ├── 2026-05-13T18-59-29-928Z.json
│   │   │       ├── 2026-05-13T19-35-01-776Z.json
│   │   │       ├── 2026-05-13T19-36-36-216Z.json
│   │   │       ├── 2026-05-13T19-40-00-568Z.json
│   │   │       └── 2026-05-13T19-40-44-696Z.json
│   │   ├── filter-booking
│   │   │   └── success
│   │   │       ├── 2026-05-13T18-59-29-222Z.json
│   │   │       ├── 2026-05-13T19-35-01-351Z.json
│   │   │       ├── 2026-05-13T19-36-35-603Z.json
│   │   │       ├── 2026-05-13T19-40-00-102Z.json
│   │   │       └── 2026-05-13T19-40-44-229Z.json
│   │   ├── get-booking-by-id
│   │   │   ├── error
│   │   │   │   └── 2026-05-13T19-35-01-527Z.json
│   │   │   └── success
│   │   │       ├── 2026-05-13T18-59-29-571Z.json
│   │   │       ├── 2026-05-13T19-36-36-053Z.json
│   │   │       ├── 2026-05-13T19-40-00-429Z.json
│   │   │       └── 2026-05-13T19-40-44-548Z.json
│   │   ├── performance-create-booking
│   │   │   └── success
│   │   │       ├── 2026-05-13T18-59-29-571Z.json
│   │   │       ├── 2026-05-13T19-35-01-566Z.json
│   │   │       ├── 2026-05-13T19-36-35-901Z.json
│   │   │       ├── 2026-05-13T19-40-00-311Z.json
│   │   │       └── 2026-05-13T19-40-44-443Z.json
│   │   ├── reject-negative-price
│   │   │   └── error
│   │   │       ├── 2026-05-13T18-59-29-223Z.json
│   │   │       ├── 2026-05-13T19-35-01-322Z.json
│   │   │       ├── 2026-05-13T19-36-35-600Z.json
│   │   │       ├── 2026-05-13T19-40-00-099Z.json
│   │   │       └── 2026-05-13T19-40-44-252Z.json
│   │   ├── sql-injection-auth
│   │   │   └── error
│   │   │       ├── 2026-05-13T18-59-30-204Z.json
│   │   │       ├── 2026-05-13T19-35-03-108Z.json
│   │   │       ├── 2026-05-13T19-36-36-263Z.json
│   │   │       ├── 2026-05-13T19-40-00-671Z.json
│   │   │       └── 2026-05-13T19-40-44-816Z.json
│   │   ├── update-booking
│   │   │   └── success
│   │   │       ├── 2026-05-13T18-59-29-928Z.json
│   │   │       ├── 2026-05-13T19-35-01-857Z.json
│   │   │       ├── 2026-05-13T19-36-36-215Z.json
│   │   │       ├── 2026-05-13T19-40-00-595Z.json
│   │   │       └── 2026-05-13T19-40-44-754Z.json
│   │   └── update-without-authentication
│   │       └── error
│   │           ├── 2026-05-13T18-59-29-928Z.json
│   │           ├── 2026-05-13T19-35-02-905Z.json
│   │           ├── 2026-05-13T19-36-36-078Z.json
│   │           ├── 2026-05-13T19-40-00-498Z.json
│   │           └── 2026-05-13T19-40-44-625Z.json
│   ├── e2e
│   │   ├── accessibility
│   │   │   └── success
│   │   │       ├── login-initial-state-2026-05-13T18-59-31-809Z.png
│   │   │       ├── login-initial-state-2026-05-13T19-35-03-161Z.png
│   │   │       ├── login-initial-state-2026-05-13T19-36-37-427Z.png
│   │   │       ├── login-initial-state-2026-05-13T19-40-01-874Z.png
│   │   │       ├── login-initial-state-2026-05-13T19-40-46-261Z.png
│   │   │       ├── login-validated-state-2026-05-13T18-59-32-019Z.png
│   │   │       ├── login-validated-state-2026-05-13T19-35-03-329Z.png
│   │   │       ├── login-validated-state-2026-05-13T19-36-37-599Z.png
│   │   │       ├── login-validated-state-2026-05-13T19-40-02-055Z.png
│   │   │       └── login-validated-state-2026-05-13T19-40-46-376Z.png
│   │   ├── cart
│   │   │   └── success
│   │   │       ├── cart-empty-2026-05-13T18-59-33-919Z.png
│   │   │       ├── cart-empty-2026-05-13T19-35-05-472Z.png
│   │   │       ├── cart-empty-2026-05-13T19-36-39-486Z.png
│   │   │       ├── cart-empty-2026-05-13T19-40-03-716Z.png
│   │   │       ├── cart-empty-2026-05-13T19-40-48-698Z.png
│   │   │       ├── item-added-2026-05-13T18-59-33-810Z.png
│   │   │       ├── item-added-2026-05-13T19-35-05-378Z.png
│   │   │       ├── item-added-2026-05-13T19-36-39-384Z.png
│   │   │       ├── item-added-2026-05-13T19-40-03-615Z.png
│   │   │       ├── item-added-2026-05-13T19-40-48-609Z.png
│   │   │       ├── item-removed-2026-05-13T18-59-33-889Z.png
│   │   │       ├── item-removed-2026-05-13T19-35-05-440Z.png
│   │   │       ├── item-removed-2026-05-13T19-36-39-458Z.png
│   │   │       ├── item-removed-2026-05-13T19-40-03-687Z.png
│   │   │       ├── item-removed-2026-05-13T19-40-48-669Z.png
│   │   │       ├── login-success-2026-05-13T18-59-33-561Z.png
│   │   │       ├── login-success-2026-05-13T19-35-05-247Z.png
│   │   │       ├── login-success-2026-05-13T19-36-39-153Z.png
│   │   │       ├── login-success-2026-05-13T19-40-03-442Z.png
│   │   │       └── login-success-2026-05-13T19-40-48-473Z.png
│   │   ├── checkout
│   │   │   └── success
│   │   │       ├── add-to-cart-2026-05-13T18-59-32-211Z.png
│   │   │       ├── add-to-cart-2026-05-13T19-35-03-561Z.png
│   │   │       ├── add-to-cart-2026-05-13T19-36-37-818Z.png
│   │   │       ├── add-to-cart-2026-05-13T19-40-02-252Z.png
│   │   │       ├── add-to-cart-2026-05-13T19-40-46-526Z.png
│   │   │       ├── cart-2026-05-13T18-59-32-375Z.png
│   │   │       ├── cart-2026-05-13T19-35-03-731Z.png
│   │   │       ├── cart-2026-05-13T19-36-37-979Z.png
│   │   │       ├── cart-2026-05-13T19-40-02-415Z.png
│   │   │       ├── cart-2026-05-13T19-40-46-672Z.png
│   │   │       ├── finish-2026-05-13T18-59-32-729Z.png
│   │   │       ├── finish-2026-05-13T19-35-04-064Z.png
│   │   │       ├── finish-2026-05-13T19-36-38-363Z.png
│   │   │       ├── finish-2026-05-13T19-40-02-760Z.png
│   │   │       ├── finish-2026-05-13T19-40-47-041Z.png
│   │   │       ├── form-2026-05-13T18-59-32-549Z.png
│   │   │       ├── form-2026-05-13T19-35-03-897Z.png
│   │   │       ├── form-2026-05-13T19-36-38-182Z.png
│   │   │       ├── form-2026-05-13T19-40-02-575Z.png
│   │   │       ├── form-2026-05-13T19-40-46-847Z.png
│   │   │       ├── overview-2026-05-13T18-59-32-640Z.png
│   │   │       ├── overview-2026-05-13T19-35-03-979Z.png
│   │   │       ├── overview-2026-05-13T19-36-38-279Z.png
│   │   │       ├── overview-2026-05-13T19-40-02-665Z.png
│   │   │       ├── overview-2026-05-13T19-40-46-953Z.png
│   │   │       ├── step-one-2026-05-13T18-59-32-473Z.png
│   │   │       ├── step-one-2026-05-13T19-35-03-830Z.png
│   │   │       ├── step-one-2026-05-13T19-36-38-108Z.png
│   │   │       ├── step-one-2026-05-13T19-40-02-509Z.png
│   │   │       └── step-one-2026-05-13T19-40-46-779Z.png
│   │   ├── login
│   │   │   ├── error
│   │   │   │   ├── locked_out_user-2026-05-13T18-59-33-021Z.png
│   │   │   │   ├── locked_out_user-2026-05-13T19-35-05-924Z.png
│   │   │   │   ├── locked_out_user-2026-05-13T19-36-38-597Z.png
│   │   │   │   ├── locked_out_user-2026-05-13T19-40-02-975Z.png
│   │   │   │   └── locked_out_user-2026-05-13T19-40-48-106Z.png
│   │   │   └── success
│   │   │       ├── error_user-2026-05-13T18-59-40-304Z.png
│   │   │       ├── error_user-2026-05-13T19-35-13-811Z.png
│   │   │       ├── error_user-2026-05-13T19-36-45-860Z.png
│   │   │       ├── error_user-2026-05-13T19-40-10-255Z.png
│   │   │       ├── error_user-2026-05-13T19-40-55-673Z.png
│   │   │       ├── performance_glitch_user-2026-05-13T18-59-39-593Z.png
│   │   │       ├── performance_glitch_user-2026-05-13T19-35-13-115Z.png
│   │   │       ├── performance_glitch_user-2026-05-13T19-36-45-047Z.png
│   │   │       ├── performance_glitch_user-2026-05-13T19-40-09-395Z.png
│   │   │       ├── performance_glitch_user-2026-05-13T19-40-54-843Z.png
│   │   │       ├── problem_user-2026-05-13T18-59-33-871Z.png
│   │   │       ├── problem_user-2026-05-13T19-35-07-179Z.png
│   │   │       ├── problem_user-2026-05-13T19-36-39-360Z.png
│   │   │       ├── problem_user-2026-05-13T19-40-03-650Z.png
│   │   │       ├── problem_user-2026-05-13T19-40-49-176Z.png
│   │   │       ├── standard_user-2026-05-13T18-59-32-199Z.png
│   │   │       ├── standard_user-2026-05-13T19-35-04-336Z.png
│   │   │       ├── standard_user-2026-05-13T19-36-37-785Z.png
│   │   │       ├── standard_user-2026-05-13T19-40-02-215Z.png
│   │   │       ├── standard_user-2026-05-13T19-40-46-514Z.png
│   │   │       ├── visual_user-2026-05-13T18-59-40-955Z.png
│   │   │       ├── visual_user-2026-05-13T19-35-14-612Z.png
│   │   │       ├── visual_user-2026-05-13T19-36-46-524Z.png
│   │   │       ├── visual_user-2026-05-13T19-40-10-988Z.png
│   │   │       └── visual_user-2026-05-13T19-40-57-041Z.png
│   │   ├── logout
│   │   │   └── success
│   │   │       ├── logged-in-2026-05-13T18-59-32-826Z.png
│   │   │       ├── logged-in-2026-05-13T19-35-04-161Z.png
│   │   │       ├── logged-in-2026-05-13T19-36-38-465Z.png
│   │   │       ├── logged-in-2026-05-13T19-40-02-830Z.png
│   │   │       ├── logged-in-2026-05-13T19-40-47-922Z.png
│   │   │       ├── logged-out-2026-05-13T18-59-33-880Z.png
│   │   │       ├── logged-out-2026-05-13T19-35-05-238Z.png
│   │   │       ├── logged-out-2026-05-13T19-36-39-504Z.png
│   │   │       ├── logged-out-2026-05-13T19-40-03-859Z.png
│   │   │       └── logged-out-2026-05-13T19-40-48-924Z.png
│   │   ├── navigation
│   │   │   └── success
│   │   │       ├── cart-page-2026-05-13T18-59-33-627Z.png
│   │   │       ├── cart-page-2026-05-13T19-35-05-012Z.png
│   │   │       ├── cart-page-2026-05-13T19-36-38-980Z.png
│   │   │       ├── cart-page-2026-05-13T19-40-03-428Z.png
│   │   │       ├── cart-page-2026-05-13T19-40-48-440Z.png
│   │   │       ├── checkout-step-one-2026-05-13T18-59-33-725Z.png
│   │   │       ├── checkout-step-one-2026-05-13T19-35-05-078Z.png
│   │   │       ├── checkout-step-one-2026-05-13T19-36-39-047Z.png
│   │   │       ├── checkout-step-one-2026-05-13T19-40-03-494Z.png
│   │   │       ├── checkout-step-one-2026-05-13T19-40-48-509Z.png
│   │   │       ├── inventory-page-2026-05-13T18-59-33-273Z.png
│   │   │       ├── inventory-page-2026-05-13T19-35-04-859Z.png
│   │   │       ├── inventory-page-2026-05-13T19-36-38-827Z.png
│   │   │       ├── inventory-page-2026-05-13T19-40-03-271Z.png
│   │   │       └── inventory-page-2026-05-13T19-40-48-269Z.png
│   │   ├── responsive
│   │   │   ├── desktop.png
│   │   │   ├── mobile.png
│   │   │   └── tablet.png
│   │   └── sorting
│   │       └── success
│   │           ├── az-2026-05-13T18-59-32-212Z.png
│   │           ├── az-2026-05-13T19-35-03-516Z.png
│   │           ├── az-2026-05-13T19-36-37-818Z.png
│   │           ├── az-2026-05-13T19-40-02-252Z.png
│   │           ├── az-2026-05-13T19-40-46-531Z.png
│   │           ├── high-to-low-2026-05-13T18-59-32-578Z.png
│   │           ├── high-to-low-2026-05-13T19-35-03-866Z.png
│   │           ├── high-to-low-2026-05-13T19-36-38-161Z.png
│   │           ├── high-to-low-2026-05-13T19-40-02-548Z.png
│   │           ├── high-to-low-2026-05-13T19-40-46-859Z.png
│   │           ├── low-to-high-2026-05-13T18-59-32-481Z.png
│   │           ├── low-to-high-2026-05-13T19-35-03-778Z.png
│   │           ├── low-to-high-2026-05-13T19-36-38-052Z.png
│   │           ├── low-to-high-2026-05-13T19-40-02-459Z.png
│   │           ├── low-to-high-2026-05-13T19-40-46-759Z.png
│   │           ├── za-2026-05-13T18-59-32-341Z.png
│   │           ├── za-2026-05-13T19-35-03-645Z.png
│   │           ├── za-2026-05-13T19-36-37-940Z.png
│   │           ├── za-2026-05-13T19-40-02-368Z.png
│   │           └── za-2026-05-13T19-40-46-648Z.png
│   └── responsive
│       ├── desktop.png
│       ├── mobile.png
│       └── tablet.png
```

---

# Additional Notes

This project was implemented focusing on:

- Readability
- Reusability
- Scalability
- Traceability
- QA engineering best practices
