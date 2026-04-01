# iOS Runtime Debug Checklist

## Expected vs Observed

- expected iOS behavior is explicit
- observed behavior is explicit
- affected screen, flow, device state, and build context are known

## Runtime Evidence

- simulator or device logs captured
- crash or assertion details collected
- if UI is involved, current visible state inspected
- if async is involved, task lifetime and main-thread assumptions checked

## XcodeBuildMCP Context

- session defaults inspected first
- project or workspace, scheme, and simulator context confirmed
- build or run step failure isolated before deeper diagnosis

## Debugger-First

- debugger used when live state matters
- breakpoints placed near the first suspect state transition
- stack and locals inspected
- parent frame inspected if bad value came from upstream

## iOS-Specific Failure Areas

- SwiftUI state ownership
- ViewModel async cancellation and stale response handling
- navigation trigger and presentation ownership
- permission prompts and lifecycle transitions
- network request or decode path
- framework entitlement or configuration mismatch

## Final Gate

- earliest critical failure step is named
- minimal safe fix is proposed
- original path and adjacent iOS flows are rechecked
