---
name: ios-fix-bugs
description: "Safe bug fixing workflow for iOS. Enforces minimal blast radius, regression testing, and architectural integrity."
---

# iOS Bug Fixing Orchestrator

## Purpose
Implementing a fix for a confirmed issue while preventing regressions.

## When to Use
- After a root cause has been identified via `ios-debug`.
- Fixing known UI/UX defects.

## Decision Workflow
1. **Scope Assessment:** Identify all classes/files impacted by the fix.
2. **Regression Test (Red):** Write a failing Unit/Integrations test in `ios-testing` that triggers the bug.
3. **Smallest Safe Fix:** Implement the code change with minimal edits to unrelated lines.
4. **Verification (Green):** Run the test suite and confirm the fix.
5. **Side Effect Check:** Manually verify related screens or state transitions.

## Quality Checklist
- [ ] Lowest possible blast radius.
- [ ] No "magic numbers" or hard-coded duct-tape fixes.
- [ ] Fix respects `mvvm-architecture` patterns.
- [ ] Added regression protection.

## Related Skills
- `ios-debug`
- `ios-testing`
- `test-driven-development`
