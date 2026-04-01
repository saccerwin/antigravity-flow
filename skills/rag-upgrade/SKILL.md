---
name: codexkit-rag-intelligence-upgrade
description: Use when improving CodexKit retrieval quality, grounding, citation support, or codebase search behavior to reduce hallucination and missed context.
---

# codexkit-rag-intelligence-upgrade

Use this skill to harden retrieval with better chunking, reranking, grounding, and codebase-aware context selection.

## Operating Notes
- Prefer grounded retrieval over larger raw context windows.
- Measure retrieval quality with benchmark prompts and expected supporting evidence.
- Use reranking or graph-aware context only when it improves precision, not just breadth.
- Reduce hallucination by requiring evidence-bearing retrieval before high-confidence synthesis.
- Add a groundedness classification gate before final high-confidence answers, using `codexkit-gliclass-hallucination-guard` when available.
