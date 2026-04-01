---
name: Safe Deploy
description: Multi-gate deploy pipeline: secret scan → syntax → test → build → deploy → smoke test.
---

# Safe Deploy

# Safe Deploy

## When to Use
Multi-gate deploy pipeline: secret scan → syntax → test → build → deploy → smoke test.

## Procedure
1. Check identity, environment, and operational constraints first.
2. Isolate risky work, scan for secrets, and stage changes safely.
3. Finish with explicit verification and a rollback or recovery path.

## Expected Output
- Safe operational steps
- Verification evidence
- Fallback or rollback guidance

## Capabilities

- ops-safety
- deployment-safety
- repo-isolation
- cm-safe-deploy


## Automation Hooks

- deploy safely
- identity and secrets check
- stage before prod


## Expected Output

- safe execution plan
- preflight checks
- rollback or recovery note


## References

This skill bundles pack references under `references/`. Load only the files needed for the current task.
