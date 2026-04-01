---
name: ios-code-review
description: Use when reviewing iOS, Swift, or SwiftUI changes for bugs, regressions, MVVM boundary leaks, async risks, accessibility gaps, and release-readiness issues.
---

# CodexKit iOS Code Review

Use this skill for findings-first review of iOS changes.

## Workflow
1. Recall durable preferences from `~/.codex/MEMORY.md` and relevant memory files before the final review output.
2. Identify changed surfaces across View, ViewModel, model, service, navigation, persistence, and integrations.
3. Review correctness first: crash risk, invalid state flow, cancellation bugs, stale data, and user-visible regressions.
4. Verify MVVM boundaries and state ownership.
5. Call out missing tests, analytics checks, accessibility coverage, and release risks.
6. Present findings ordered by severity with exact file references.
