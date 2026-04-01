---
name: ios-implement-feature
description: "Primary orchestrator for building new iOS features. Enforces SwiftUI-first, MVVM-aligned development with proper state handling, testing, and analytics."
---

# iOS Feature Implementation Orchestrator

## Purpose
End-to-end management of a feature request, from requirement analysis to production-ready code.

## When to Use
- Implementing a new screen or user flow.
- Adding a major functional capability to an existing module.
- Modifying UI logic that spans multiple layers (View, ViewModel, Service).

## Triggers
- "Add a new screen for..."
- "Implement the UI for..."
- "Add a feature to allow users to..."

## Decision Workflow
1. **Architecture Audit:** Inspect existing codebase for related components.
2. **Brainstorming:** Decompose requirements into View, ViewModel, Model, and Service impacts.
3. **Draft Spec:** Create a design spec in `docs/superpowers/specs/`.
4. **Implementation Plan:** Use `writing-plans` to outline atomic tasks.
5. **UI Engineering:** Build/Update Views using `swiftui-views` and `swiftui-expert-skill`.
6. **State & Logic:** Implement ViewModel logic using `swiftui-viewmodels` and `@Observable`.
7. **Instrumentation:** Add analytics using `ios-analytics`.
8. **Verification:** Add tests using `ios-testing` and verify via `verification-before-completion`.

## Quality Checklist
- [ ] MVVM boundaries respected (View is dumb, ViewModel is testable).
- [ ] Loading/Empty/Error/Retry states accounted for.
- [ ] Swift Concurrency used correctly (Actor isolation, Task cancellation).
- [ ] Accessibility labels and traits included.
- [ ] No architecture drift.

## Related Skills
- `mvvm-architecture`
- `ios-brainstorming`
- `ios-testing`
- `ios-analytics`
