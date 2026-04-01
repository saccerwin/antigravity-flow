---
name: evolution-engine
description: Orchestrates self-improvement loops using Memento + NeuralMemory
triggers: ["skill failed", "improve this", "learn from", "why did this fail", "evolve", "self-improve"]
---

# Antigravity Evolution Engine

> **Status:** Alpha (Part of Singularity Stack)

This skill enables Antigravity to evolve its own capabilities by reflecting on its performance and rewriting its skills.

## Core Mechanisms

### 1. Failure Reflection (The Reflect Loop)
When a task fails or a skill produces an error:
1. **Log Context:** Capture the exact command, environment state, and error message.
2. **Neural Recall:** Use `nmem_recall` to find if this error (or similar) has happened before.
3. **Memento Reflect:** Call `memento reflect` to analyze the root cause in the skill's logic.
4. **Hypothesize:** Use `nmem_hypothesize` to state a proposed fix.

### 2. Skill Improvement (The Write Loop)
1. **Draft Fix:** Modify the failing skill's `SKILL.md` or related scripts.
2. **Verify:** Use `memento verify` (or `python .agent/scripts/lint_runner.py`) to check the new implementation.
3. **Deploy:** Replace the old skill with the improved version.
4. **Evidence:** Link the successful fix to the original error in NeuralMemory using `nmem_evidence`.

### 3. Utility Tracking
1. **Success:** After each successful task, call `nmem_report_outcome` to increment the utility score.
2. **Pruning:** Low-utility skills or those that consistently fail are flagged for "forgetting" or complete rewrite.

---

## Example Workflow: Self-Fixing a Lint Failure

1. **Detection:** `lint_runner.py` fails on a newly generated file.
2. **Context:** Agent calls `nmem_remember` type='error' with the lint output.
3. **Reasoning:** Agent calls `nmem_recall` for "lint patterns".
4. **Improvement:** Agent identifies that the `frontend-developer` skill often forgets to import a specific library.
5. **Evolution:** Agent updates the `frontend-developer` skill rules to always include those imports.
6. **Closing:** Agent calls `memento verify` to confirm the update works.
