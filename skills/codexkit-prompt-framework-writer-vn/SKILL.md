---
name: prompt-framework-writer-vn
description: Write high-quality prompts using RACE, RISE, STAR, SOAP, CLEAR, PASTOR, FAB, 5W1H, or GROW. Use when users ask to create prompts, rewrite commands, or generate reusable prompt templates in Vietnamese or English.
metadata:
  short-description: Tao prompt theo 9 framework
---

# Prompt Framework Writer (VN)

## Goal

Turn user intent into a ready-to-run prompt using one selected framework.

## Use this skill when

- User says: `tao prompt`, `viet prompt`, `viet prompt theo RACE/STAR/...`.
- User asks to convert rough notes into structured prompt.
- User needs reusable prompt templates for team workflows.

## Core workflow

1. Detect target framework.
If not specified, choose based on intent.
2. Collect minimum inputs:
- objective
- audience or role
- context
- constraints
- expected output
3. Write one production-ready prompt.
4. Provide one shorter variant for quick chat usage.
5. Provide an optional parameterized template for reuse.

## Framework skeletons

- `RACE`: Role -> Action -> Context -> Expectation.
- `RISE`: Role -> Identify -> Steps -> Expectation.
- `STAR`: Situation -> Task -> Action -> Result.
- `SOAP`: Subject -> Objective -> Action -> Plan.
- `CLEAR`: Context -> Learn -> Evaluate -> Action -> Review.
- `PASTOR`: Problem -> Amplify -> Story -> Transformation -> Offer -> Response.
- `FAB`: Features -> Advantages -> Benefits.
- `5W1H`: Who -> What -> When -> Where -> Why -> How.
- `GROW`: Goal -> Reality -> Options -> Will.

## Output format

```markdown
Prompt chinh:
<full prompt>

Ban ngan:
<short version>

Template tai su dung:
- Framework: <name>
- Fields: <...>
```

## Quality checks

- Prompt must include explicit output format.
- Prompt must include constraints and assumptions.
- Keep language direct and operational, avoid vague wording.
