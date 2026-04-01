---
name: codexkit-auto-dream
description: Use when maintaining CodexKit's scheduled dream and consolidation loop for durable memory cleanup, summarization, and cross-session pattern extraction.
---

# codexkit-auto-dream

Use the daily dream loop to consolidate durable learnings out of recent session memory and SQLite memory state. Prefer this when the task is about memory compaction, recurring reflection, or scheduled durable summarization.

## Operating Notes
- Tool entrypoint: `~/.codex/tools/codexkit-auto-dream`
- Schedule target in this setup: 09:00 local time.
- Run auto-memory before dream so fresh session material is captured.
- Keep dream output factual. Do not promote unverified guesses into durable memory.
