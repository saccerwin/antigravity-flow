---
name: ios-testing
description: Use when creating, improving, or reviewing test coverage for SwiftUI and iOS code, especially ViewModels, async flows, state transitions, and regression-prone business logic.
---

# CodexKit iOS Testing

Use this skill to drive deterministic iOS test coverage.

## Workflow
1. Map changed behavior and failure modes first.
2. Prefer ViewModel and business-logic tests over brittle implementation-coupled UI assertions.
3. Cover async cancellation, error, retry, and stale-response cases.
4. Use simulator-driven validation when lifecycle, permissions, or navigation behavior matters.
5. Remove timing assumptions and flaky waits.
6. End with a clear coverage gap summary.
