 📘 Singlish to Sinhala Translator Testing

Module: IT3040 – ITPM  
Assignment:Assignment 1  
Student Name:RANASIGHA R.A.S.H.
Registration No: [IT23616738]  
Year: Year 3  

📌 Project Overview

This project contains automated functional and UI test cases for the SwiftTranslator (Singlish to Sinhala) web application.

The objectives of this project are to:

- Evaluate translation accuracy  
- Identify correct and incorrect conversions  
- Test UI behavior and usability  
- Validate robustness using different input types  

All test scenarios are automated using Playwright.

🌐 System Under Test (SUT)

**Swift Translator – Singlish to Sinhala Converter**  
https://www.swifttranslator.com/

This application converts Singlish text into Sinhala in real-time.

🧪 Testing Scope

 ✅ Covered Areas
- Functional testing  
- UI testing  
- Real-time conversion validation  
- Accuracy testing  
- Robustness testing   

📂 Project Structure

IT23616738_Playwright_Project/

- tests/  
  - pos_tests.spec.js  
  - neg_tests.spec.js  
  - ui_tests.spec.js  
- playwright.config.js  
- package.json  
- README.md  

 ⚙️ Technologies Used

- Playwright  
- JavaScript  
- Node.js  
- VS Code  
- GitHub  

🚀 Setup Instructions

1️⃣ Install Node.js
Download from: https://nodejs.org/

Check installation:

node -v  
npm -v  

 2️⃣ Install Dependencies

Open the project folder and run:

npm install

3️⃣ Install Playwright Browsers

npx playwright install

▶️ Running Tests

# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run only Chromium
npx playwright test --project=chromium

 📊 Test Coverage

 ✔ Positive Functional Tests
- Simple, compound, and complex sentences  
- Questions and commands  
- Tense variations  
- Greetings and requests  
- Mixed Singlish + English  
- Names and places  
- Punctuation and numbers  

❌ Negative Functional Tests
- Typographical errors  
- Slang inputs  
- Long inputs  
- Formatting and spacing issues  

🖥 UI Tests
- Real-time output update  
- Input field visibility  
- Clear input behavior  

📈 Test Design Strategy

Test cases were designed based on:

- Sentence structure coverage  
- Grammar variations  
- Input length types (S / M / L)  
- Accuracy validation  
- Robustness validation  
- Formatting preservation  

 ✅ Expected Results

- Correct Singlish produces accurate Sinhala  
- English technical terms remain unchanged  
- Output updates in real-time  
- Formatting is preserved correctly  

 🔗 GitHub Repository

[Paste Your GitHub Repo Link Here]


