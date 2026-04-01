---
name: mobile-android-kotlin-coder-vn
description: Use when building or fixing Android apps with Kotlin, Jetpack Compose, Gradle, and Android architecture patterns. Covers feature implementation, bug fixing, testing, performance checks, and release readiness for Android projects.
metadata:
  short-description: Android Kotlin coding workflow
---

# Mobile Android Kotlin Coder (VN)

## Goal

Deliver production-grade Android changes with clear architecture, test coverage, and safe release steps.

## Use this skill when

- User asks to build/fix Android app features.
- Stack includes `Android`, `Kotlin`, `Jetpack Compose`, `Gradle`, `Room`, `Retrofit`, `Hilt`, or `WorkManager`.
- User asks for Android debugging, refactor, testing, or release prep.

## Workflow

1. Clarify scope and constraints
- Feature or bug objective
- Target Android API level
- Existing architecture style (MVVM/MVI/Clean)

2. Map implementation plan
- Identify modules/files to change
- Keep changes incremental and reversible
- Prefer existing project patterns over introducing new architecture

3. Implement with Android best practices
- State and UI: Compose state hoisting, immutable UI state
- Data layer: repository boundaries, suspend APIs, cancellation-safe calls
- Dependency injection: follow current DI setup (Hilt/Koin/manual)

4. Add or update tests
- Unit tests for ViewModel/use-case/repository logic
- UI tests for key user flows when requested
- Regression checks for bugfixes

5. Verify quality gates
- Build success
- Test pass
- Lint/static checks if configured
- No obvious crash paths on lifecycle/config changes

6. Ship-ready summary
- Changed files and behavior
- Risks and edge cases
- Suggested next checks (device matrix, perf, rollout)

## Output format

```markdown
Plan ngan:
- ...

Thay doi da thuc hien:
- ...

Kiem thu:
- ...

Rui ro con lai:
- ...
```

## Guardrails

- Do not rewrite architecture unless requested.
- Do not break existing build/test conventions.
- If required project setup is missing, state blocker clearly and propose minimal fallback.
