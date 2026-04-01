---
name: codexkit-plan
description: Create implementation plans for coding work. Use for English or Vietnamese planning requests such as plan this, implement plan, or lập kế hoạch.
---

# codexkit-plan

Create implementation plans only after a context preflight. Recall durable project memory before finalizing. The plan is not valid until it identifies the affected surface, constraints, assumptions, and validation path.

## Required Preflight

Before writing the plan, capture:
- entrypoint or starting surface
- directly affected files or modules
- upstream dependencies
- downstream consumers or side effects
- state or data flow relevant to the task
- explicit non-goals
- confirmed facts vs assumptions vs missing evidence

If these are not known yet, the first output is a context-preflight summary, not a final plan.

## Planning Standard

Every final plan must include:
- goal restatement in one sentence
- scoped work slices in execution order
- acceptance checks per slice
- rollback or containment note for risky slices
- residual risks

## Do Not

- jump from a vague request straight to implementation steps
- present assumptions as facts
- omit which files or modules are intentionally out of scope
- finalize a plan without a validation path

## Required Outputs

- context preflight summary
- executable step list
- acceptance checklist
- assumptions and open questions
- rollback or containment note if the task is risky

## References

- `checklists/context-preflight-checklist.md`
- `templates/context-preflight-note.md`
- `references/role-routing.md`
