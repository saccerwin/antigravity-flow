---
name: dependency-injection-lightweight
description: Use when structuring lightweight dependency injection in SwiftUI and MVVM apps to keep services testable, explicit, and low-overhead without introducing heavy containers.
---

# Dependency Injection Lightweight

## Purpose
Use this skill to keep dependency wiring simple, explicit, and easy to test in iOS SwiftUI projects.

## When to Use
- Defining service dependencies for ViewModels
- Replacing hidden singletons with explicit constructors
- Introducing test doubles for feature and ViewModel tests
- Aligning project-wide dependency wiring conventions

## When Not to Use
- Tiny throwaway prototypes where wiring overhead is unnecessary
- Cases that truly need a full DI container with runtime registration complexity

## Expected Inputs
- Feature or module boundaries
- Current dependency style (singleton, environment, constructor)
- Testability goals
- Existing app architecture constraints

## Decision Workflow
1. Prefer constructor injection by default.
2. Use environment injection only for truly app-wide cross-cutting concerns.
3. Keep dependency protocols focused and minimal.
4. Avoid introducing container frameworks unless clear scaling need exists.
5. Preserve readability and predictable object lifetimes.

## Operating Procedure
1. Enumerate dependencies for each ViewModel and service.
2. Move hidden dependencies into explicit init parameters.
3. Introduce lightweight abstractions only where mocking or replacement is needed.
4. Provide test defaults and fake implementations for deterministic testing.
5. Document ownership and lifecycle assumptions.

## Required Outputs
- Chosen injection approach per dependency
- Updated dependency boundaries
- Test replacement strategy
- Notes on lifecycle and ownership

## Validation Checklist
- Dependencies are discoverable from type signatures
- ViewModels are easy to instantiate in tests
- Singleton leakage is minimized
- Dependency graph remains understandable
- No unnecessary container complexity introduced

## Common Mistakes
- Over-abstracting every dependency regardless of need
- Mixing global mutable state with constructor injection inconsistently
- Hiding heavy service initialization in View code
- Creating ambiguous ownership for long-lived services

## Related Skills
- `mvvm-architecture`
- `swiftui-viewmodels`
- `networking-for-swiftui-mvvm`
- `codexkit-ios-architecture`
