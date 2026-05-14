# 🚀 Playwright UI Automation Framework

## 📌 Overview
This project is a UI automation framework built using **Playwright and TypeScript**.  
It follows modern SDET practices such as Page Object Model (POM), environment-based configuration, and cross-browser execution.

---

## 🛠 Tech Stack
- Playwright
- TypeScript
- Node.js

---

## ✅ Features
- Page Object Model (POM) design
- Cross-browser execution (Chromium, Firefox)
- Auto-wait (no Thread.sleep / waitForTimeout)
- Environment-based configuration using `.env`
- Stable test synchronization using Playwright assertions
- Debugging with screenshots, videos, and trace viewer

---

## 📁 Project Structure
playwright-ui-framework/
│
├── pages/                     # Page Objects (UI locators & reusable methods)
│   └── LoginPage.ts
│
├── tests/                     # Test scenarios
│   └── login.spec.ts
│
├── data/                      # Test data files (optional)
│
├── playwright.config.ts       # Playwright configuration
├── package.json
├── tsconfig.json
├── .env                       # Environment variables (not committed)
├── .gitignore
└── README.md
