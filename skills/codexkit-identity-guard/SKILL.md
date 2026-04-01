---
name: Identity Guard
description: Verify project identity before push, Cloudflare, or Supabase operations. Prevents wrong-account deploys.
---

# Identity Guard

# Identity Guard

## When to Use
Verify project identity before push, Cloudflare, or Supabase operations. Prevents wrong-account deploys.

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
- cm-identity-guard


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
