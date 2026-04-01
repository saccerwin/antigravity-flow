---
name: codexkit-debug
description: Debug application issues, production bugs, and failing behavior. Use for debug this, investigate bug, or gỡ lỗi requests.
---

# codexkit-debug

Perform systematic debugging with an evidence gate. A debug result is not complete until it includes runtime evidence, a failure timeline, explicit hypotheses, kill conditions, the earliest critical failure step, and a minimal validation plan.

## Evidence Gate

Do not claim root cause without at least one of:
- reproduction path
- failing test
- log or console evidence
- stack trace
- runtime state snapshot
- debugger frame or variable inspection

If evidence is missing, the correct output is an evidence-acquisition plan.

## Required Debug Structure

Every debug output must include:
- expected behavior
- observed behavior
- evidence collected
- timeline from trigger to visible symptom
- earliest suspicious or failing step
- ranked hypotheses
- kill condition for each active hypothesis
- most likely root cause
- smallest safe fix
- validation and residual risk

## Debug Discipline

- separate symptom from root cause
- prefer the first wrong state transition over the last visible symptom
- use kill conditions to eliminate weak hypotheses quickly
- state what evidence would disprove the current root-cause claim
- do not patch UI symptoms without explaining the underlying failure path

## Required Outputs

- debug investigation note
- evidence list
- timeline
- hypothesis table with kill conditions
- minimal fix recommendation
- validation plan

## References

- `checklists/debug-evidence-and-timeline-checklist.md`
- `templates/debug-investigation-schema.md`
- `references/role-routing.md`
