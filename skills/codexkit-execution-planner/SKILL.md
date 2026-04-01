---
name: codexkit-execution-planner
description: Turn ambiguous requests into an executable implementation plan with assumptions, sequence, acceptance checks, and rollback thinking.
---

# codexkit-execution-planner

Turn ambiguous requests into a plan that can survive real implementation. No execution plan is complete until it includes context preflight, affected-surface mapping, acceptance checks, and containment logic.

## Required Context Discipline

Before sequencing work, map:
- entrypoint
- affected files or modules
- adjacent files likely to break if changed
- dependencies and consumers
- invariants that must remain true

If the affected surface is unclear, stop at preflight and resolve that first.

## Execution Planning Standard

Every plan must include:
- objective and success condition
- work slices small enough to validate independently
- assumptions with an explicit kill condition or validation step
- acceptance checks tied to user-visible behavior or test evidence
- rollback or containment path for risky changes

## Completion Accuracy Guardrails

- convert acceptance criteria into checks before coding starts
- state what is intentionally not being changed
- define how to verify blast radius on nearby behavior
- note what evidence would invalidate the current plan

## Required Outputs

- context map
- ordered implementation slices
- per-slice validation
- risk and blast-radius notes
- rollback or containment note

## References

- `checklists/task-completion-accuracy-checklist.md`
- `templates/implementation-plan-template.md`
