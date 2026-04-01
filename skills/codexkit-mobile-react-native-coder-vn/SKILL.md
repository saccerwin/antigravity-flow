---
name: mobile-react-native-coder-vn
description: Use when building or fixing React Native mobile apps across iOS and Android. Covers TypeScript/JavaScript app logic, navigation, native module boundaries, debugging, testing, and release-focused implementation.
metadata:
  short-description: React Native coding workflow
---

# Mobile React Native Coder (VN)

## Goal

Ship stable React Native changes with clear JS/native boundaries, reliable navigation/state behavior, and practical test coverage.

## Use this skill when

- User asks to build or fix React Native features.
- Stack includes `React Native`, `TypeScript`, `Expo`, `React Navigation`, or native module integration.
- User asks for cross-platform debugging between iOS and Android behavior.

## Workflow

1. Understand impact surface
- Screens, navigation flows, and state domains affected
- JS-only change vs native dependency change

2. Plan minimal incremental implementation
- Prefer existing project patterns (state, navigation, data fetching)
- Avoid broad refactors unless explicitly requested

3. Implement safely
- Keep platform-specific code isolated (`Platform`, native modules)
- Handle async/loading/error states explicitly
- Keep side effects predictable and cancellable

4. Add or adjust tests
- Unit tests for utility/hooks/state logic
- Component tests for important UI behavior
- E2E/smoke checks for critical flows when available

5. Validate cross-platform behavior
- Confirm parity-sensitive flows on both iOS and Android
- Check deep link, permissions, and notification edges when relevant

6. Produce release-ready summary
- What changed
- What was verified
- Remaining risk and rollback hints

## Output format

```markdown
Phan tich nhanh:
- ...

Code change:
- ...

Validation:
- ...

Rui ro con lai:
- ...
```

## Guardrails

- Do not introduce hidden native complexity unless required.
- Keep platform divergences explicit and justified.
- When native tooling is unavailable, state test limitations clearly.
