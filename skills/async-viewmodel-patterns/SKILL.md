---
name: async-viewmodel-patterns
description: Use when designing or debugging async and await behavior inside SwiftUI ViewModels, including task lifetime, cancellation, MainActor updates, stale response handling, and retry flows.
---

# Async ViewModel Patterns

## Purpose
Use this skill to make async ViewModel flows safe, predictable, and resilient in production SwiftUI apps.

## When to Use
- Building async loading, refresh, pagination, or retry flows
- Debugging stale UI after rapid user actions
- Fixing cancellation leaks when screens disappear
- Hardening race-prone ViewModel logic for deterministic tests

## When Not to Use
- Fully synchronous screens with no async side effects
- Non-ViewModel background workers with separate concurrency models

## Expected Inputs
- ViewModel responsibilities and async use cases
- Existing task and state update patterns
- Known race conditions or stale state bugs
- Error and retry behavior requirements

## Decision Workflow
1. Define task ownership and lifecycle per user intent.
2. Ensure UI-facing state mutations occur on appropriate actor boundaries.
3. Guard against stale responses overwriting newer intent.
4. Model cancellation behavior for navigation and repeated actions.
5. Keep retry and error states explicit and testable.

## Operating Procedure
1. Map each async path: trigger, task, mutation, cancellation, completion.
2. Add guards for out-of-order completions and duplicate requests.
3. Consolidate loading and error transitions into coherent state updates.
4. Verify quick repeated actions do not corrupt state.
5. Add deterministic tests for success, failure, cancellation, and retry.

## Required Outputs
- Async flow map per user intent
- Cancellation and stale-response strategy
- State transition rules for loading and error paths
- Test plan for concurrency-sensitive behavior

## Validation Checklist
- Task lifetime is explicit
- Cancellation is handled deliberately
- MainActor boundaries are respected for UI state
- Stale-response overwrite risk is addressed
- Async behavior is covered with deterministic tests

## Common Mistakes
- Launching detached tasks without ownership
- Updating UI state from inconsistent actor contexts
- Ignoring rapid repeated intents (refresh, search, tap spam)
- Treating all failures with one generic state path

## Related Skills
- `swiftui-viewmodels`
- `swiftui-state-management`
- `swift-concurrency-expert`
- `codexkit-ios-debug`
- `codexkit-ios-testing`
