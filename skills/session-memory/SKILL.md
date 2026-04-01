---
name: codexkit-session-memory
description: Use when capturing or recalling high-signal session-specific context that should persist across the current or nearby Codex sessions.
---

# codexkit-session-memory

Use session memory for short-horizon continuity across related sessions. It sits between transient conversation state and durable long-term memory.

## Operating Notes
- Tool entrypoint: `~/.codex/tools/codexkit-session-memory`
- Store current-task constraints, confirmed context, and useful near-term decisions.
- Do not promote speculative debugging notes until verified.
- Periodically compact stable items into durable memory.
