# Mobile Platforms

The mobile pack covers:

- iOS and SwiftUI
- Android and Kotlin
- Flutter
- React Native

Use a mobile-first response when the request is clearly about app-platform behavior rather than web UI.

For mobile QA requests, focus on:

- device and OS coverage
- simulator vs real device gaps
- navigation and deep-link validation
- permission flows
- offline and flaky-network behavior
- push notifications, backgrounding, and resume flows when relevant
- crash-prone lifecycle edges such as app relaunch, interrupted auth, and partial uploads

## iOS QA Checklist

- cover at least one current iPhone simulator target and one older supported OS target when feasible
- validate cold launch, background resume, terminated relaunch, and interrupted flows
- test permission prompts for camera, photos, location, microphone, contacts, notifications, and Bluetooth only when the feature uses them
- verify universal links, custom URL schemes, and push-notification entry points
- check gesture conflicts, keyboard avoidance, dynamic type, and rotation or iPad layout if relevant
- separate simulator-only confidence from real-device requirements such as camera, push, biometrics, NFC, background fetch, or Bluetooth

## Android QA Checklist

- validate runtime permissions, notification channels, back handling, and deep links
- check process death or restore behavior, offline mode, and background work when applicable
- test at least one smaller device and one larger device class when UI complexity justifies it
- call out emulator gaps versus real-device requirements such as camera, Bluetooth, Play Services, or OEM-specific behavior

## Flutter QA Checklist

- cover widget tests for deterministic UI state and integration tests for cross-screen flows
- verify platform-channel behavior on each native target it touches
- check platform-specific rendering differences, keyboard handling, and lifecycle transitions
- confirm plugin behavior in debug and release assumptions if the feature is plugin-heavy

## React Native QA Checklist

- verify navigation state restoration, deep links, and bridge or native-module stability
- check iOS and Android divergences separately rather than assuming parity
- validate startup failures caused by missing env, bundle issues, or metro-only assumptions
- separate JS-level coverage from native integration coverage

## Automation Hooks

When tooling is available, prefer these hooks before asking for manual QA:

- `ios-simulator-smoke`: boot simulator, install app, launch, capture logs and screenshots
- `ios-xcodebuild-test`: run simulator test suites or targeted build-and-test workflows
- `android-adb-smoke`: install or launch APK, inspect logs, and validate basic flows on a connected device or emulator
- `flutter-test`: run unit, widget, or integration flows from Flutter CLI
- `react-native-cli`: use Node or npx-based project automation for React Native test or smoke flows
- `fastlane-lane`: invoke existing lane-based mobile QA automation when the repo already uses Fastlane

When the project stack is detectable, always translate the best hook into a concrete next command or lane suggestion instead of stopping at capability detection.
