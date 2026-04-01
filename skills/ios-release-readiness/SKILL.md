---
name: ios-release-readiness
description: Use when preparing iOS or SwiftUI features for release, including final validation, analytics checks, entitlement review, performance sanity checks, rollback awareness, and App Store risk review.
---

# CodexKit iOS Release Readiness

Use this skill when an iOS change is close to shipping and needs a disciplined pre-release pass.

## Workflow
1. Identify release scope and user-visible risk.
2. Verify critical paths, permissions, loading, empty, error, and accessibility states.
3. Recheck analytics, crash risk, performance, and framework-specific entitlements.
4. Confirm rollback, migration, and feature-flag safety where relevant.
5. Summarize blockers versus non-blockers.
6. End with a ship recommendation.
