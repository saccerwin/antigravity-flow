---
name: swiftui-viewmodels
description: Use when designing, implementing, or reviewing SwiftUI ViewModels that manage presentation state, user intent handling, async workflows, and display-ready data transformations.
---

# SwiftUI ViewModels

## Purpose
Use this skill to design ViewModels that make SwiftUI rendering correct, predictable, and testable.

## When to Use
- Creating a new ViewModel for a SwiftUI screen
- Refactoring a bloated or underpowered ViewModel
- Debugging stale UI, duplicate state, or async race issues
- Improving ViewModel testability and clarity

## When Not to Use
- Stateless presentational views
- Deep domain modeling unrelated to presentation
- UIKit controller-only flows without a ViewModel layer

## Expected Inputs
- Screen purpose and user actions
- Data sources and async operations
- Existing state fields and rendering issues
- Navigation or presentation triggers

## Decision Workflow
1. Model the screen states before methods.
2. Keep user intents explicit and few.
3. Use one-way-ish state flow suitable for SwiftUI updates.
4. Isolate side effects and async work behind clear methods or collaborators.
5. Avoid duplicate derived state unless it meaningfully reduces view complexity.

## Operating Procedure
1. Enumerate loading, content, empty, error, and transient UI states.
2. Define public state and public user-intent methods.
3. Place mapping and formatting close enough to the ViewModel to remain presentation-specific.
4. Guard against stale async results, cancellation leaks, and non-MainActor UI writes.
5. Design tests around behavior, not internal implementation trivia.

## Required Outputs
- Recommended ViewModel API shape
- State model guidance
- Async and dependency notes
- Deterministic test targets

## Validation Checklist
- Public API is small and intention-revealing
- State supports all major screen modes
- Async writes respect UI isolation
- Cancellation and retry paths are defined
- Tests can assert behavior without rendering the full UI

## Common Mistakes
- Storing raw service concerns and presentation concerns without boundaries
- Exposing too many mutable fields to the View
- Updating UI-facing state from arbitrary background contexts
- Encoding navigation and screen state in scattered booleans

## Related Skills
- `mvvm-architecture`
- `swiftui-state-management`
- `networking-for-swiftui-mvvm`
- `codexkit-ios-testing`
