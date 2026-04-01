---
name: ios-implement-feature
description: Use when implementing a new iOS feature in Swift or SwiftUI, including architecture choices, state design, async flows, analytics hooks, testing, and release-aware verification.
---

# CodexKit iOS Implement Feature

Use this skill for end-to-end SwiftUI-first feature delivery.

## Workflow
1. Recall durable preferences from `~/.codex/MEMORY.md` and relevant `~/.codex/memory/` files before final planning output.
2. Clarify feature scope, supported platforms, and high-risk constraints.
3. Default to pragmatic MVVM and validate boundaries with `mvvm-architecture` when screen ownership is unclear.
4. Shape ViewModel, state, navigation, networking, analytics, testing, and accessibility before coding.
5. Implement in small slices with minimal blast radius.
6. Validate build behavior, failure paths, and regression surface before calling the feature ready.

## Related Skills
- `mvvm-architecture`
- `swiftui-viewmodels`
- `swiftui-state-management`
- `swiftui-navigation`
- `async-viewmodel-patterns`
- `dependency-injection-lightweight`
- `networking-for-swiftui-mvvm`
- `swiftui-ui-patterns`
- `swiftui-design-principles`
- `codexkit-ios-testing`
- `codexkit-ios-analytics`
- `codexkit-ios-release-readiness`
