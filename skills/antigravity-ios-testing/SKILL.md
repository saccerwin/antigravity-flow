---
name: antigravity-ios-testing
description: "Advanced iOS testing suite. Orchestrates modern Swift Testing framework, XCTest, and UI testing patterns from industry experts."
---

# iOS Testing Workflow

Use this skill to write unit tests, integration tests, or UI tests for iOS projects.

## Orchestrated Suites

### 1. Modern Unit Testing (Swift Testing)
- **Primary:** Use `swift-testing-expert` (AvdLee) and `swift-testing-pro` (TwoStraws).
- Leverage `@Test`, `@Suite`, and `#expect`.
- Apply parameterized testing for logic variants.

### 2. Legacy/Integration Testing (XCTest)
- Use standard `swift-testing` (dpearson) for existing XCTest suites.
- Use for async tests requiring specific `expectation` patterns not yet in Swift Testing.

### 3. UI Testing (XCUITest)
- Follow best practices in `ios-engineering-skills`.
- Ensure tests are accessible and use identifiable elements.

### 4. Persistence Testing
- If testing database logic, use `swiftdata-pro:swiftdata-advanced`.

## Verification
- Always run tests and provide the output before confirming a fix or feature.
