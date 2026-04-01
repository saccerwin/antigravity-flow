---
name: prompt-framework-all-in-one-vn
description: All-in-one prompt framework operator for Vietnamese and English. Route to the best framework (RACE, RISE, STAR, SOAP, CLEAR, PASTOR, FAB, 5W1H, GROW), write production-ready prompts, review and upgrade existing prompts, or run full-cycle optimize in one flow.
metadata:
  short-description: Router + Writer + Reviewer trong mot skill
---

# Prompt Framework All-In-One (VN)

## Goal

Handle the full prompt lifecycle in one skill:
- choose framework,
- draft prompt,
- review quality,
- rewrite stronger final prompt.

## Use this skill when

- User asks to choose framework and write prompt quickly.
- User asks to optimize/review existing prompt.
- User asks for one-command workflow from idea to final prompt.
- User mentions any of: `RACE`, `RISE`, `STAR`, `SOAP`, `CLEAR`, `PASTOR`, `FAB`, `5W1H`, `GROW`.

## Modes

1. `route`
Use when user asks "nen dung framework nao".
Output: best-fit framework + brief reason + quick template.

2. `write`
Use when user asks to create a new prompt.
Output: full prompt + short version + reusable template.

3. `review`
Use when user provides a prompt and asks to improve it.
Output: score + key weaknesses + rewritten prompt.

4. `full-cycle` (default)
Use when objective is unclear or user wants end-to-end support.
Output: framework selection -> first draft -> self-review -> upgraded final prompt.

## Decision map

- `RACE`: execution prompts with clear role and outcome.
- `RISE`: problem-solving with explicit steps.
- `STAR`: retrospective and evidence-based storytelling.
- `SOAP`: concise operational briefing with plan.
- `CLEAR`: learning/improvement loops with measurement.
- `PASTOR`: persuasion and change messaging.
- `FAB`: product marketing/value communication.
- `5W1H`: discovery, analysis, and investigation.
- `GROW`: coaching, planning, commitment.

## Full-cycle workflow

1. Infer objective and audience.
2. Choose 1 primary framework and 1 fallback.
3. Draft first prompt version.
4. Review draft using checklist (0-14):
- role clarity
- task clarity
- context completeness
- constraints specificity
- output format explicitness
- success criteria
- actionability
5. Rewrite to final optimized prompt.
6. Return final prompt with assumptions and usage tip.

## Output format

```markdown
Che do: <route|write|review|full-cycle>

Framework de xuat: <name>
Ly do:
- ...
- ...

Prompt ban dau:
<draft prompt>

Danh gia nhanh:
- Diem: <x>/14
- Van de chinh:
- ...

Prompt toi uu cuoi:
<final prompt>

Ghi chu su dung:
- ...
```

## Guardrails

- Keep user intent unchanged.
- Be concise and operational, avoid theory dump.
- Always include explicit output format in final prompt.
- For high-risk domains (medical/legal/finance), require uncertainty handling and stricter constraints.
