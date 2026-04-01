---
name: antigravity-fix-bugs
description: "Systematic iOS bug fixing workflow. Combines root-cause analysis with TDD and regression prevention."
---

# iOS Bug Fixing Workflow

Use this skill to fix identified bugs systematically.

## Workflow

### 1. Investigation
- Use `antigravity-ios-debug` to find the root cause.

### 2. Regression Testing (Red Phase)
- **Mandatory:** Use `test-driven-development` and `antigravity-ios-testing`.
- Write a failing test that reproduces the bug.

### 3. Implementation (Green Phase)
- Implement the "Smallest Safe Fix".
- Follow `swiftui-expert-skill` for code quality.

### 4. Verification & Prevention
- Run all tests.
- Reference `systematic-debugging:defense-in-depth` to prevent similar bugs.

## Reference
- `test-driven-development`
- `verification-before-completion`
