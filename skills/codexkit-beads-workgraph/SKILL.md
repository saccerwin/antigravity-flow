---
name: codexkit-beads-workgraph
description: Use when work needs a dependency-aware task graph, ready queue, and blocker visibility across long-running or multi-agent execution.
---

# codexkit-beads-workgraph

Use Beads-style work graphs when chat state is not enough to manage a long execution chain. Model work as explicit tasks with blockers, ready items, and handoff state.

## Operating Notes
- Prefer a ready-first loop: execute unblocked items, close them, then refresh the queue.
- Separate blocking edges from related-but-nonblocking context links.
- Keep session handoff state in the graph, not only in chat.
- Fall back to a structured markdown queue if `bd` is unavailable.
