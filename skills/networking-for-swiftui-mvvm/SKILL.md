---
name: networking-for-swiftui-mvvm
description: Use when integrating networking into a SwiftUI and MVVM app, including URLSession async flows, response mapping, error handling, cancellation, retry behavior, and ViewModel-safe data delivery.
---

# Networking for SwiftUI MVVM

## Purpose
Use this skill to connect API work cleanly into SwiftUI screens and ViewModels without leaking transport details into rendering code.

## When to Use
- Building or refactoring an API client for a SwiftUI feature
- Deciding where request logic, mapping, and retry behavior should live
- Fixing stale responses, duplicate fetches, or cancellation bugs
- Reviewing networking boundaries in a ViewModel-driven app

## When Not to Use
- Pure offline-only features with no network dependency
- Backend API design work detached from app integration

## Expected Inputs
- Endpoint or user flow being integrated
- Response shape and mapping requirements
- Retry, cancellation, and caching expectations
- Existing ViewModel and service boundaries

## Decision Workflow
1. Keep transport details out of Views.
2. Avoid letting ViewModels become raw networking clients unless the feature is extremely small.
3. Map remote models into app-facing models at a stable boundary.
4. Handle cancellation, stale responses, and retry behavior deliberately.
5. Surface errors in a form the ViewModel can present coherently.

## Operating Procedure
1. Define request ownership: service, use case, or lightweight client boundary.
2. Model response decoding and transformation explicitly.
3. Decide how ViewModels trigger loads, refreshes, and pagination.
4. Ensure overlapping requests cannot corrupt newer state.
5. Verify loading, retry, offline, and partial-failure behavior.

## Required Outputs
- Recommended networking boundary
- Mapping and error-handling approach
- Cancellation and retry notes
- Testable seams for API and ViewModel behavior

## Validation Checklist
- Views do not perform transport work directly
- ViewModels receive app-meaningful models or errors
- Cancellation and stale response risks are handled
- Retry and offline behavior are intentional
- Networking code is testable without full UI rendering

## Common Mistakes
- Parsing transport payloads directly inside the View
- Updating screen state from overlapping requests without guards
- Treating every error the same in the UI
- Forgetting pagination, refresh, or pull-to-refresh reentrancy

## Related Skills
- `mvvm-architecture`
- `swiftui-viewmodels`
- `swiftui-state-management`
- `codexkit-ios-debug`
- `codexkit-ios-testing`
