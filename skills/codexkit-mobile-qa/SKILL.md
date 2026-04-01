---
name: codexkit-mobile-qa
description: Plan or review mobile QA coverage for iOS, Android, Flutter, and React Native apps. Use for qa mobile, mobile test plan, kiểm thử mobile, or validation of mobile app behavior.
---

# codexkit-mobile-qa

Handle mobile QA as a first-class workflow for app quality, not as a web QA variant. Cover device matrix, OS coverage, app lifecycle transitions, permissions, deep links, notifications, offline behavior, analytics events, and release-blocking regressions. Tailor the QA plan to the stack in play: iOS and SwiftUI, Android and Kotlin, Flutter, or React Native. When simulator, adb, Flutter CLI, or Node-based tooling is available, surface those automation hooks first and explain which flows still require manual verification on a real device.

## Capabilities

- device-matrix-planning
- lifecycle-and-permission-review
- deep-link-and-notification-validation
- stack-aware-mobile-checklists
- automation-capability-discovery


## Automation Hooks

- ios-simulator-smoke
- ios-xcodebuild-test
- android-adb-smoke
- flutter-test
- react-native-cli
- fastlane-lane


## Expected Output

- Summarize coverage by platform and stack instead of giving a generic QA list.
- Separate what can be validated with current local tooling from what still needs manual or external-device verification.
- Call out release blockers, risky gaps, and the smallest automation hook that can reduce manual QA work.
- When the project stack is detectable, propose the next concrete command or lane to run for each viable automation hook.


## References

This skill bundles pack references under `references/`. Load only the files needed for the current task.
