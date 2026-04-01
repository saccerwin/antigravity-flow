---
name: swiftui-state-management
description: Use when modeling or debugging SwiftUI state ownership, loading and error handling, derived UI state, binding flow, or rendering correctness across Views and ViewModels.
---

# SwiftUI State Management

## Purpose
Use this skill to keep SwiftUI state predictable, coherent, and easy to reason about.

## When to Use
- Designing screen state for a new SwiftUI flow
- Fixing state bugs, flicker, stale data, or impossible UI combinations
- Consolidating scattered booleans into clearer models
- Reviewing ownership of `@State`, environment state, and ViewModel state

## When Not to Use
- Pure layout work with no state impact
- Business-domain storage design detached from UI state

## Expected Inputs
- Affected screen or flow
- Existing state properties and ownership model
- Triggering actions and async events
- Known bad states or visual glitches

## Decision Workflow
1. Identify the single owner for each mutable state value.
2. Separate durable screen state from ephemeral view-only state.
3. Prefer coherent state models over loosely related booleans.
4. Ensure async events cannot produce invalid or stale combinations.
5. Keep bindings narrow and intention-revealing.

## Operating Procedure
1. Map loading, content, empty, error, retry, and transient interaction states.
2. Group related state so impossible combinations are harder to represent.
3. Remove duplicated derived state where it causes drift.
4. Verify view updates happen on the correct actor and in the correct lifecycle.
5. Re-test navigation, refresh, and back-stack behavior after changes.

## Required Outputs
- Proposed state ownership model
- State-shape recommendation
- Invalid-state risks and mitigation notes
- Verification checklist for impacted UI flows

## Validation Checklist
- Every mutable value has a clear owner
- Loading and error states are explicit
- Derived state does not drift from source state
- Async updates cannot overwrite newer user intent incorrectly
- Navigation and presentation state remain coherent

## Common Mistakes
- Mixing transient alert state with durable screen data carelessly
- Using many booleans where an enum or state object is clearer
- Letting child views mutate parent-owned state too broadly
- Forgetting to reset stale error or loading indicators

## Related Skills
- `swiftui-viewmodels`
- `mvvm-architecture`
- `codexkit-ios-debug`
- `codexkit-ios-performance`
