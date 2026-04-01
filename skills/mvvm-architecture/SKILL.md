---
name: mvvm-architecture
description: Use when shaping or reviewing SwiftUI screen architecture and deciding View, ViewModel, service, repository, and navigation boundaries in an MVVM-oriented iOS app.
---

# MVVM Architecture

## Purpose
Use this skill to keep SwiftUI app structure pragmatic, testable, and delivery-friendly.

## When to Use
- Designing a new SwiftUI screen or feature module
- Reviewing whether a ViewModel is too thin or too bloated
- Deciding if services, repositories, or coordinators are justified
- Untangling unclear ownership between UI, async orchestration, and domain logic

## When Not to Use
- Pure one-line UI tweaks with no architecture impact
- Deep business-domain redesign that exceeds presentation-layer concerns
- UIKit-first flows unless SwiftUI interop is part of the problem

## Expected Inputs
- Feature goal and affected screens
- Current folder or module shape if available
- Existing state and navigation constraints
- Any non-negotiable dependencies or legacy architecture rules

## Decision Workflow
1. Start with the screen and user flow, not abstractions.
2. Keep Views focused on rendering, composition, and user-intent forwarding.
3. Keep ViewModels focused on presentation state, user actions, async orchestration, and transformation for display.
4. Move logic below the ViewModel only when it clearly improves reuse, isolation, or testability.
5. Prefer lightweight dependency injection and explicit ownership.
6. Introduce coordinators or repositories only when simpler boundaries stop being clear.

## Operating Procedure
1. Identify state owners, async boundaries, and navigation ownership.
2. List which logic belongs in the View, ViewModel, service, or persistence layer.
3. Propose the smallest architecture that supports the feature safely.
4. Check whether loading, empty, error, and retry states fit naturally.
5. Verify the shape is testable through ViewModel and service boundaries.

## Required Outputs
- Recommended module or file shape
- Clear boundary notes for View, ViewModel, and lower layers
- Risks or reasons to avoid over-engineering
- Migration notes if changing an existing flow

## Validation Checklist
- Views are mostly render-focused
- ViewModels own presentation state and async orchestration
- State flow is predictable and easy to test
- Navigation ownership is explicit
- Dependencies are lightweight and observable

## Common Mistakes
- Putting heavy business logic directly in Views
- Turning every API boundary into a repository without need
- Keeping duplicated state in both View and ViewModel
- Creating giant ViewModels that absorb unrelated responsibilities

## Related Skills
- `swiftui-viewmodels`
- `swiftui-state-management`
- `networking-for-swiftui-mvvm`
- `codexkit-ios-architecture`
