---
name: ios-testing
description: "Modern iOS testing suite. Focuses on ViewModel logic, async workflows, and Swift Testing framework best practices."
---

# iOS Testing Orchestrator

## Purpose
Design and implement a robust testing layer for the iOS application.

## Key Focus Areas
- **ViewModels:** Test state transitions, input handling, and output data mapping.
- **Async Work:** Verify Task lifetime, cancellation, and data race safety.
- **Business Logic:** Pure logic extraction from services and models.

## Operating Procedure
- **Prefer Swift Testing:** Use `@Test`, `@Suite`, and `#expect`.
- **ViewModel Mocking:** Use lightweight dependency injection (DI) to inject mock services.
- **Async Tests:** Use `await` expectations and proper timeout handling.
- **TDD Flow:** Always prefer Red-Green-Refactor cycle.

## Expected Outputs
- Unit test files with descriptive names (e.g., `FeatureViewModelTests.swift`).
- Integration tests for data persistence layers (SwiftData).

## Related Skills
- `swift-testing-modern`
- `swiftui-viewmodels`
- `test-driven-development`
