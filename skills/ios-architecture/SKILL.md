---
name: ios-architecture
description: Use when designing, reviewing, or refining SwiftUI app architecture, especially MVVM boundaries, dependency flow, navigation ownership, async orchestration, and modularization decisions.
---

# CodexKit iOS Architecture

Use this skill for architecture-level decisions in SwiftUI-first iOS apps.

## Workflow
1. Recall durable preferences from `~/.codex/MEMORY.md` and relevant `~/.codex/memory/` files before final architecture output.
2. Identify scope: single screen, multi-screen flow, feature module, or app-wide pattern.
3. Default to pragmatic MVVM unless existing architecture strongly dictates otherwise.
4. Inspect ownership boundaries across View, ViewModel, model, service, persistence, and navigation.
5. Escalate to deeper patterns only when the simpler shape clearly fails.
6. End with migration guidance and a review checklist.

## Related Skills
- `mvvm-architecture`
- `swiftui-viewmodels`
- `swiftui-state-management`
- `swiftui-navigation`
- `dependency-injection-lightweight`
- `async-viewmodel-patterns`
- `networking-for-swiftui-mvvm`
