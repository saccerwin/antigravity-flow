---
name: antigravity-ios-debug
description: "Unified iOS debugging workflow. Combines systematic debugging with platform-specific tools like Instruments, MetricKit, and Concurrency diagnostics."
---

# iOS Debugging & Troubleshooting

Use this skill when you encounter crashes, UI jank, memory issues, or logic bugs in an iOS app.

## Diagnostic Flow

### 1. Systematic Triage
- **Start here:** Invoke `systematic-debugging`.
- Capture logs, reproduce the issue, and isolate the root cause.

### 2. Platform-Specific Diagnostics
- **UI Jank/Hangs:** Use `swiftui-performance` and `debugging-instruments:instruments-guide`.
- **Crashes/Metric Data:** Check `metrickit-diagnostics` patterns.
- **Race Conditions:** MUST use `swift-concurrency` triage workflow.

### 3. State Inspection
- Audit state management using `swiftui-expert-skill:state-management`.
- Use `Self._printChanges()` if debugging unexpected view updates.

### 4. Resolution
- Propose the "Smallest Safe Fix" as per standard debugging protocols.
- Verify using `antigravity-ios-testing`.

## Trigger Skills
- `systematic-debugging`
- `swift-concurrency`
- `debugging-instruments`
- `swiftui-performance`
