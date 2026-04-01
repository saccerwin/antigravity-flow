---
name: mobile-flutter-coder-vn
description: Use when building or fixing Flutter mobile apps with Dart, widget architecture, state management, platform channels, and release checks. Handles feature work, debugging, testing, and performance-oriented implementation for Flutter projects.
metadata:
  short-description: Flutter coding workflow
---

# Mobile Flutter Coder (VN)

## Goal

Implement reliable Flutter changes with clean widget/state boundaries, testability, and release safety.

## Use this skill when

- User asks for Flutter feature development or bugfix.
- Stack includes `Flutter`, `Dart`, `Riverpod`, `Bloc`, `Provider`, `GoRouter`, or platform channels.
- User asks for Flutter performance tuning or test hardening.

## Workflow

1. Define scope and app flow impact
- Identify affected screens/routes/state flows
- Confirm if change is UI-only, domain logic, or platform-integration

2. Plan smallest safe change set
- Prefer localized edits over large refactors
- Reuse existing state management conventions

3. Implement with Flutter best practices
- Keep widget tree clean and composable
- Avoid unnecessary rebuilds
- Keep async/error states explicit in UI
- Use platform channels only where truly needed

4. Add tests proportionate to risk
- Unit tests for business/state logic
- Widget tests for core interaction paths
- Integration tests when behavior spans multiple screens

5. Verify and harden
- Build and test pass
- Check common layout/device edge cases
- Review lifecycle/navigation side effects

6. Prepare handoff summary
- Behavior changed
- Test coverage added
- Known risks and next improvements

## Output format

```markdown
Muc tieu va pham vi:
- ...

Thay doi chinh:
- ...

Kiem thu va ket qua:
- ...

Follow-up de xuat:
- ...
```

## Guardrails

- Do not switch state management libraries unless requested.
- Keep UI and business logic separated.
- If env/tooling is missing, provide exact unblock steps and continue with feasible partial work.
