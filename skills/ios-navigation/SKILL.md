---
name: swiftui-navigation
description: Use when designing, implementing, or debugging SwiftUI navigation flows with NavigationStack, sheets, fullScreenCover, deep links, and back-stack ownership in MVVM-oriented iOS apps.
---

# SwiftUI Navigation

## Purpose
Use this skill to keep routing, presentation ownership, and dismissal behavior predictable in SwiftUI apps.

## When to Use
- Building a new multi-screen flow with `NavigationStack`
- Debugging broken back behavior, duplicate pushes, or stuck sheets
- Refactoring navigation state from scattered booleans into coherent routing
- Adding deep links, tab flows, or modal presentation in MVVM screens

## When Not to Use
- Pure visual styling tasks with no routing impact
- UIKit-only navigation stacks unless interop is required

## Expected Inputs
- Entry points and destination screens
- Current route state model and presentation methods
- Known bugs (double-present, wrong dismiss, lost back state)
- Deep link or URL constraints

## Decision Workflow
1. Choose the route owner explicitly: parent coordinator state, parent ViewModel, or feature-level state.
2. Keep navigation triggers intention-revealing (`openDetails(id:)`, `showSettings()`).
3. Prefer typed route state over many independent booleans.
4. Model sheet and full-screen presentation separately from push navigation when needed.
5. Verify dismissal ownership and back-stack restoration behavior.

## Operating Procedure
1. Map screen graph, push routes, and modal routes.
2. Define route state and transition triggers.
3. Wire navigation with minimal coupling to rendering code.
4. Validate deep-link entry and backward navigation transitions.
5. Re-test lifecycle edges: app background/foreground and re-entry.

## Required Outputs
- Proposed navigation ownership model
- Route-state structure
- Transition trigger mapping
- Validation checklist for push/modal/deep-link behavior

## Validation Checklist
- Push and modal flows have clear owners
- Back navigation behaves predictably
- Deep links open the correct destination path
- Dismissal does not depend on unrelated view state
- Route state is testable in ViewModel or coordinator boundaries

## Common Mistakes
- Mixing push and modal state in one ambiguous boolean set
- Triggering navigation directly from low-level subviews without ownership
- Creating cyclical navigation dependencies across features
- Forgetting to handle deep-link-to-existing-stack transitions

## Related Skills
- `mvvm-architecture`
- `swiftui-state-management`
- `swiftui-viewmodels`
- `async-viewmodel-patterns`
- `codexkit-ios-debug`
