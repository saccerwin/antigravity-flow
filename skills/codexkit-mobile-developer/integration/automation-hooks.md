# Mobile QA Automation Hooks

`codexkit-mobile-qa` can use the current environment to pick the smallest viable automation path before falling back to manual QA.

## Hook Selection

- `ios-simulator-smoke`
  Use when `xcodebuild` and `xcrun` are available. Best for simulator install, launch, screenshots, and smoke logs.
- `ios-xcodebuild-test`
  Use when `xcodebuild` is available and the project already has tests or a scheme ready for simulator test execution.
- `android-adb-smoke`
  Use when `adb` is available. Best for emulator or connected-device app launch, log capture, and basic flow validation.
- `flutter-test`
  Use when `flutter` is available. Prefer for Flutter unit, widget, and integration commands already defined by the repo.
- `react-native-cli`
  Use when `node` and `npx` are available. Prefer repo-native scripts or React Native CLI test commands.
- `fastlane-lane`
  Use when `fastlane` is available and the repo already encodes mobile validation in lanes.

## Fallback Rules

- If no hook is available, return a manual QA plan grouped by platform and highest-risk flows.
- If a hook is available but cannot cover hardware-dependent behavior, say exactly which checks still require a real device.
- Never imply browser QA is a substitute for mobile lifecycle, notification, permission, or native integration coverage.
