---
name: codexkit-intent-scoreboard
description: Use when debugging CodexKit routing, comparing candidate skills, or logging why a specific workflow was selected for a prompt.
---

# codexkit-intent-scoreboard

Track routing decisions with explicit scores, confidence, and selection reasons so wrong routes can be debugged quickly.

## Operating Notes
- Log top candidate skills, top-1 vs top-2 margin, and the reason the winner was chosen.
- Mark low-confidence or small-margin routes for clarification or downgrade.
- Use this skill when measuring router quality, route precision, or skill-trigger overlap.
- Keep the log schema stable so route-quality benchmarks can be compared over time.
