---
name: codexkit-paul-loop
description: Use when applying a strict execution loop that alternates planning, action, verification, and corrective follow-up for complex agent work.
---

# codexkit-paul-loop

Use a Paul-style loop when a task needs repeated inspect -> act -> verify cycles with explicit correction after each iteration.

## Operating Notes
- Keep each loop bounded to one concrete hypothesis or implementation slice.
- Do not claim progress without a verification artifact.
- Treat verification failures as signals to refine the loop, not as noise.
- End each loop with the next most defensible action.
