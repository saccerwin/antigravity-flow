---
name: antigravity-ios-implement-feature
description: "Comprehensive workflow for implementing new iOS features. Orchestrates brainstorming, SwiftUI expertise, concurrency safety, and framework integration."
---

# iOS Feature Implementation Workflow

Use this skill when tasked with building a new feature or modifying existing UI/UX logic in an iOS application.

## Workflow Orchestration

Follow these steps strictly:

### 1. Requirements Exploration (Brainstorming)
- **Mandatory:** Invoke the `brainstorming` skill first.
- Goal: Define the feature scope, UI structure, and impact on existing code.
- Output: A design specification in `docs/superpowers/specs/`.

### 2. Implementation Planning
- Invoke the `writing-plans` skill.
- Reference the design spec created in step 1.
- Output: A step-by-step implementation plan in `docs/superpowers/plans/`.

### 3. SwiftUI & UI Engineering
- **Mandatory:** Reference labels from `swiftui-expert-skill` and `swiftui-patterns`.
- Apply modern SwiftUI APIs (e.g., `@Observable`, `NavigationStack`).
- Ensure view composition follows performance guidelines in `swiftui-performance`.

### 4. Logic & Concurrency
- If the feature involves async work, MUST reference `swift-concurrency`.
- Ensure actor isolation and `Sendable` conformance.
- If using persistent data, reference `swiftdata-pro` or `swiftdata`.

### 5. Verification
- Use `verification-before-completion` before declaring the task done.
- If tests are required, use `antigravity-ios-testing`.

## Core References to Use
- `swiftui-expert-skill`
- `swift-concurrency`
- `ios-app-framework-skills`
- `swift-testing`
