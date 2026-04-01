---
name: ios-debug
description: "Diagnostic workflow for iOS production issues. Focuses on root-cause analysis, reproduction, and hypothesis validation before patching."
---

# iOS Debugging Orchestrator

## Purpose
Systematically diagnose and understand the source of a bug, crash, or performance regression.

## When to Use
- Intermittent logic bugs.
- UI rendering glitches or hangs.
- Complex async state issues.
- Third-party SDK integration failures.

## Triggers
- "Why is this screen blank?"
- "Diagnostics for..."
- "Analyze why X happens when Y occurs."

## Decision Workflow
1. **Reproduction:** Attempt to define a deterministic path to trigger the bug.
2. **State Scan:** Inspect `swiftui-state-management` and `swiftui-viewmodels` for unexpected mutations.
3. **Concurrency Audit:** Check `swift-concurrency` for data races or MainActor violations.
4. **Instrumentation:** Propose adding temporary logging or `Self._printChanges()`.
5. **Hypothesis Ranking:** List top 3 likely causes with supporting evidence.
6. **Validation:** Propose a minimal code change or test to prove the root cause.

## Operating Procedure
- Use `ios-fix-bugs` AFTER the root cause is confirmed.
- Avoid "guess-and-check" patching.

## Related Skills
- `systematic-debugging`
- `crash-triage-playbook`
- `swiftui-state-bug-playbook`
