---
name: prompt-framework-router-vn
description: Choose the best prompting framework among RACE, RISE, STAR, SOAP, CLEAR, PASTOR, FAB, 5W1H, and GROW based on user intent. Use when a user asks which framework to use, asks to structure a prompt, or asks to optimize prompt commands in Vietnamese or English.
metadata:
  short-description: Chon framework prompt phu hop
---

# Prompt Framework Router (VN)

## Goal

Pick the most suitable framework quickly, explain why, and provide a compact fill-in template.

## Use this skill when

- User asks: "nen dung framework nao".
- User asks to structure prompt/cau lenh before writing final prompt.
- User mentions one of: `RACE`, `RISE`, `STAR`, `SOAP`, `CLEAR`, `PASTOR`, `FAB`, `5W1H`, `GROW`.
- User says: `toi uu prompt`, `viet prompt theo mau`, `tao cau lenh chatgpt`.

## Decision map

- `RACE`: role + task clarity for direct execution prompts.
- `RISE`: identify a core problem and execute stepwise.
- `STAR`: retrospective/project incident summaries.
- `SOAP`: concise briefing with clear plan.
- `CLEAR`: learning loops, measurable progress, review.
- `PASTOR`: persuasive messaging and change narrative.
- `FAB`: product/value proposition writing.
- `5W1H`: discovery and investigation framing.
- `GROW`: coaching, planning, and commitment.

## Workflow

1. Identify user objective (planning, analysis, persuasion, reporting, coaching).
2. Select 1 primary framework; optionally 1 backup framework.
3. Explain selection in 2-4 bullets tied to the user objective.
4. Output a short fill-in template for immediate use.
5. If user is unsure, provide 2 options with tradeoffs.

## Output format

```markdown
Framework de xuat: <NAME>
Ly do:
- ...
- ...

Template nhanh:
- <field 1>
- <field 2>
- <field 3>

Phuong an du phong: <NAME> (khi ...)
```

## Guardrails

- Do not over-explain theory when user asked for execution.
- Keep recommendations specific to the user's goal.
- If context is missing, make reasonable assumptions and state them.
