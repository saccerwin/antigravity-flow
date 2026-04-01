---
name: codexkit-gh-address-comments
description: Address GitHub PR review threads or issue comments with gh, summarize what each comment requires, and drive the fix flow from there. Use for address PR comments, review thread cleanup, or xử lý comment review GitHub.
---

# codexkit-gh-address-comments

Treat GitHub review comments as a triage-and-resolution workflow. Use `gh` to find the current PR, fetch review threads and standalone comments, and summarize them as a small set of actionable items instead of dumping raw API output. Help the user decide which comments to address first, then use those selected threads to guide the code changes and follow-up verification.

## Capabilities

- github-pr-comment-triage
- review-thread-summarization
- selected-comment-fix-flow




## Expected Output

- Group open comments and review threads into a small numbered list with the concrete code or behavior change each one implies.
- Separate clarifications, code changes, and non-actionable discussion so the user can choose what to address next.
- Call out gh authentication blockers immediately instead of continuing with partial context.
