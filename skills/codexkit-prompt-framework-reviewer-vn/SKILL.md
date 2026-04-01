---
name: prompt-framework-reviewer-vn
description: Review and upgrade existing prompts using RACE, RISE, STAR, SOAP, CLEAR, PASTOR, FAB, 5W1H, and GROW checklists. Use when users ask to optimize prompts, debug weak prompts, or compare framework quality.
metadata:
  short-description: Review va nang cap prompt
---

# Prompt Framework Reviewer (VN)

## Goal

Audit an existing prompt, find weak spots, then rewrite it with a stronger framework structure.

## Use this skill when

- User asks: `review prompt`, `toi uu prompt`, `prompt nay yeu o dau`.
- User wants before/after rewrite.
- User needs framework-based quality scoring.

## Review checklist

Score each criterion 0-2:

1. Role clarity
2. Task clarity
3. Context completeness
4. Constraints specificity
5. Output format explicitness
6. Evaluation or success criteria
7. Actionability (can run immediately)

Total score:
- `0-6`: weak
- `7-10`: usable but risky
- `11-14`: strong

## Workflow

1. Read original prompt and infer objective.
2. Map objective to best-fit framework.
3. Score the original prompt with checklist.
4. Provide key issues (max 5 bullets).
5. Rewrite prompt in improved framework.
6. Provide short rationale and expected gain.

## Output format

```markdown
Danh gia nhanh:
- Framework phu hop: <name>
- Diem prompt goc: <x>/14
- Van de chinh:
  - ...

Prompt da nang cap:
<rewritten prompt>

Ky vong cai thien:
- ...
- ...
```

## Guardrails

- Do not change user intent.
- Keep rewritten prompt practical and concise.
- If domain risk is high (medical/legal/finance), require stricter constraints and explicit uncertainty handling.
