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

- Login validation with different user types
- Product sorting and filtering
- Complete checkout flow
- Cart item removal
- Navigation between pages
- Logout validation

### Level 2 - Differential

- Accessibility testing
- Automated E2E testing with Playwright
- Screenshot, video and trace generation
- Organized evidence management

---

## API Testing

### Level 1 - Required

- Authentication validation
- Booking CRUD operations
- Booking search and filters
- Required field validation
- Negative scenarios

### Level 2 - Differential

- Performance testing
- Security testing
- Automated API scripts
- API evidence generation in JSON format
- Reusable API abstraction layer

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
├── test-plan.md
├── test-cases.md
├── bugs.md
├── risks.md
├── improvements.md
└── restful-booker-collection.json

evidences/
├── api/
└── e2e/
```

---

# Additional Notes

This project was implemented focusing on:

- Readability
- Reusability
- Scalability
- Traceability
- QA engineering best practices
