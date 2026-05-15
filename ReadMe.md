# 🚀 Playwright UI Automation Framework
 
## 📌 Overview
This project is a UI automation framework built using **Playwright and TypeScript**. 
It demonstrates modern SDET practices such as Page Object Model (POM), clean test architecture, and stable UI automation.

## 🛠 Tech Stack
- Playwright (TypeScript)
- Node.js
- Page Object Model (POM)
 
## ✅ Features
- Page Object Model for maintainable automation
- Cross-browser support (Chromium, Firefox)
- Playwright auto-wait (no hard waits required)
- Environment-based configuration using `.env`
- Stable test synchronization using assertions
- Debugging support (screenshots, videos, traces)
 
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

## ⚙️ Setup Instructions
### 1️⃣ Install dependencies
```bash
npm install
 
2️⃣ Run tests
 
npx playwright test
3️⃣ Run in headed mode
 
npx playwright test --headed

4️⃣ Run specific browser
npx playwright test --project=Chromium

🔐 Environment Configuration
Create a .env file: 
Plain Text:
USERNAME=your_username
PASSWORD=your_password
 ⚠ .env is ignored from GitHub for security.

🧠 Key Concepts Used:
Page Object Model (POM)
Auto-wait handling
Clean test design
Separation of data and logic
Cross-browser testing

✅ Sample Test Flow:
Navigate to login page
Enter username and password
Click login button
Validate successful login message

🎯 Purpose
To demonstrate building a scalable and maintainable UI automation framework using Playwright aligned with real SDET practices.

👩‍💻 Author
Priyanka — SDET (Automation Engineer)
