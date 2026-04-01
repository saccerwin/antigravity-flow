---
name: antigravity-anti-hallucination
description: Prevent hallucinations and enforce structured validation across agent outputs using zero-shot GLiClass patterns.
---
# GLiClass Anti-Hallucination Protocol

This methodology adapts the principles of [GLiClass](https://github.com/Knowledgator/GLiClass) (Generalized Language-Instruction Classification) to prevent AI hallucination in the Antigravity ecosystem. By using a strict, zero-shot classification framework, agents validate claims against provided context before responding to users.

### 1. Entailment-First Reasoning (Zero-Shot Validation)
- Treat the provided user context (local files, previous prompts, logs) as the **Premise**.
- Treat your planned output as the **Hypothesis**.
- Only allow the Hypothesis to pass if it is directly entailed by the Premise. Do not substitute missing information with external parametric memory unless explicitly requested to "brainstorm" or "research outside."

### 2. Strict Entity Classification
Whenever extracting or generating structural data (e.g., API endpoints, variables, file paths):
- You must classify each entity as: `Verified in Context`, `Extrapolated from Context`, or `External Assumption`.
- If an entity is an `External Assumption`, you MUST warn the user or restrict its usage.

### 3. "I don't know" Thresholds
GLiClass excels at rejecting classes that do not fit the instruction. Apply the same rigorous threshold for uncertainty:
- If a method signature or API behavior is not explicitly visible in the retrieved context, admit the unknown constraint.
- Request `view_file`, or `search` tools to retrieve the exact source of truth rather than guessing.

### 4. Grounding and Citations
Every technical claim in a complicated explanation must be traceable back to a specific file or line number in the user's workspace. Embed inline references like `(see Path/To/File.swift)` to ground the response.

*Applying this protocol enforces the determinism of your reasoning and suppresses hallucination by acting as a zero-shot post-computation classifier before final transmission.*
