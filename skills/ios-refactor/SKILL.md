---
name: ios-refactor
description: Use when refactoring SwiftUI or iOS code to improve MVVM boundaries, readability, testability, state flow, or async correctness without changing intended behavior.
---

# CodexKit iOS Refactor

Use this skill when the code works but needs structural improvement with low product risk.

## Workflow
1. Freeze intended behavior before moving code.
2. Identify the smallest high-value target: oversized View, bloated ViewModel, tangled navigation, duplicate async flow, or persistence coupling.
3. Default to pragmatic cleanup instead of large architecture shifts.
4. Preserve behavior with focused verification before and after changes.
5. End with debt notes and remaining risks.

## Related Skills
- `swiftui-view-refactor`
- `swiftui-ui-patterns`
- `swiftui-design-principles`
