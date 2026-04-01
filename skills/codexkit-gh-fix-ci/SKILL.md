---
name: codexkit-gh-fix-ci
description: Inspect failing GitHub Actions checks with gh, summarize failure context, and turn that into a concrete fix path. Use for fix CI, failing PR checks, GitHub Actions debug, or gỡ lỗi CI trên GitHub.
---

# codexkit-gh-fix-ci

Handle failing GitHub CI as a focused debugging workflow. Start by validating `gh` access, resolve the current branch PR when possible, inspect failing GitHub Actions checks, and summarize the failure context in a way that is easy to act on. Keep external providers such as Buildkite or custom checks clearly marked as out of scope unless the repo already exposes local reproduction steps. When the logs are good enough, convert the findings into a concise fix path and propose the smallest verification loop needed to confirm the repair.

## Capabilities

- github-pr-check-inspection
- github-actions-log-triage
- failure-summary-extraction
- fix-plan-creation




## Expected Output

- Identify the failing check, the run URL when available, and the smallest actionable failure snippet.
- Separate GitHub Actions failures from external CI providers instead of pretending unsupported checks can be fixed locally.
- Turn failure analysis into a short fix plan, the likely root cause, and the exact tests or commands to rerun.
- Call out authentication or gh scope blockers explicitly before proposing implementation work.
