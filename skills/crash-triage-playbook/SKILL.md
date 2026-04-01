---
name: crash-triage-playbook
description: "Step-by-step triage for iOS app crashes (Force Close)."
---

# iOS Crash Triage Playbook

## 1. Categorize the Crash
- **EXC_BAD_ACCESS:** Typically memory corruption or accessing a deallocated object.
- **SIGABRT:** Uncaught exception (e.g., `fatalError`, index out of bounds, missing storyboard reference).
- **Zero-Divide:** Math error.
- **Main Thread Violation:** UI update on background thread.

## 2. Locate the source
1. **Stack Trace:** Look for the last frame in your project's code (not system frameworks).
2. **Variables:** Inspect the state of local variables at the crash point.
3. **Thread Sanity:** Was this a background task?

## 3. Common Fixes
- **Optional Unwrapping:** Replaced `!` with `if let` or `guard let`.
- **Bounds Check:** Add safety checks for array indexing.
- **Concurrency:** Wrap UI code in `@MainActor`.
