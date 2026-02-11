# web-qa-automation
**Automated Playwright Tests for Website QA**

## Overview
This is a simple demo for automated quality assurance using [Playwright](https://playwright.dev/). I'll create a different repository for specific client website testing

## Features
- End-to-end browser tests using Playwright
- Configurable per-client site targets
- Supports local runs and CI/CD execution
- Cross-browser and mobile viewport coverage

## Getting Started
```bash
npm install
```

## Generating Tests
```bash
npx playwright codegen
```

## Running Tests (Examples)
```bash
npm run test:play --site=<name> --env=<name> --spec=<filename> --project=<name> --headed=<bool>
npm run test:play --site=jefmayer --env=prod --spec=portfolio-nav-anchor --project=Chrome --headed
```

## Reporting
```bash
npx playwright show-report reports/html
```
