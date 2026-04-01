---
name: codexkit-memory-ledgermind-upgrade
description: Use when improving CodexKit memory quality, conflict handling, or migration from file-based storage toward SQLite-backed durable memory.
---

# codexkit-memory-ledgermind-upgrade

Use this skill for memory backend hardening: quality scoring, conflict resolution, and safer durable-memory persistence.

## Operating Notes
- Treat file memory as canonical input until migration is verified.
- Score memory entries by durability, evidence, and reuse value.
- Resolve fact conflicts explicitly instead of silently overwriting older memory.
- Prefer SQLite-first migration with rollback paths before any networked backend.
