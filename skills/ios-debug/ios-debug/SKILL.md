---
name: ios-debug
description: Use when debugging iOS or SwiftUI issues such as crashes, incorrect state transitions, async faults, navigation bugs, network failures, and performance regressions.
---

# CodexKit iOS Debug

Use this skill for structured iOS debugging with runtime evidence first and debugger-first workflows when live state matters.

## Workflow
1. Reproduce with explicit expected versus observed behavior.
2. Gather runtime evidence before fixing: logs, crash output, simulator state, visible UI state, async state, and recent changes.
3. Confirm XcodeBuildMCP session defaults before build, run, or test actions.
4. Isolate the failing layer: View, ViewModel, navigation, async task, persistence, network, or framework integration.
5. If live state matters, prefer debugger-first inspection over print-debugging.
6. Run a fine-grained step analysis, then identify the earliest critical failure.
7. Rank hypotheses by evidence strength, not intuition alone.
8. Use the smallest experiment that can prove or disprove the top hypothesis.
9. Patch minimally, then verify no adjacent flow regressed.
10. Add targeted regression coverage where practical.

## iOS Debug Gates

### Runtime Evidence Gate

Prefer collecting:

- simulator logs
- crash traces
- current on-screen UI state
- view hierarchy or screenshot evidence
- async task state
- network or decode failure evidence

If runtime evidence is available but not collected, collect it first.

### Debugger-First Gate

When the bug depends on live state:

- set breakpoints near state transitions
- inspect locals and the call stack
- check parent frames if the wrong value came from upstream
- trace where state first diverged from expectation

### Earliest Critical Failure Rule

Do not fix the last visible symptom first if an earlier ViewModel, navigation, async, or system transition made success impossible.

## Related Skills
- `swiftui-state-management`
- `swiftui-viewmodels`
- `swiftui-navigation`
- `async-viewmodel-patterns`
- `networking-for-swiftui-mvvm`
- `ios-debugger-agent`
- `swift-concurrency-expert`
- `codexkit-ios-testing`
- `codexkit-ios-performance`
- `xcodebuildmcp`

## References
- `references/debugger-first-ios.md`
- `checklists/ios-runtime-debug-checklist.md`
- `templates/ios-debug-investigation-note.md`
