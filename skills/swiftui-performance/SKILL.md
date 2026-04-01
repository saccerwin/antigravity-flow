---
name: swiftui-performance
description: Use when auditing or improving SwiftUI rendering performance, including view update churn, list jank, layout cost, identity instability, and expensive state-driven recomposition.
---

# SwiftUI Performance

## Purpose
Use this skill to diagnose and fix SwiftUI runtime inefficiencies without sacrificing correctness.

## When to Use
- Scroll jank in list-heavy screens
- Unexpected CPU spikes from frequent view updates
- Slow screen transitions or expensive body recomputation
- Memory growth tied to view lifetime or image-heavy content

## When Not to Use
- Network latency issues unrelated to rendering
- Premature optimization without observed symptoms

## Expected Inputs
- Affected screens and user paths
- Observed symptom and severity
- Any profiling signals available
- Recent changes in state management, layout, or async logic

## Decision Workflow
1. Reproduce under realistic data and device conditions.
2. Measure before changing code.
3. Prioritize identity stability and update frequency first.
4. Reduce expensive rendering work near hot paths.
5. Re-measure and confirm user-visible improvement.

## Operating Procedure
1. Identify expensive regions (lists, nested stacks, images, formatting).
2. Review state writes that trigger broad invalidation.
3. Stabilize IDs, memoize or cache where appropriate, and reduce redundant modifiers.
4. Ensure async updates do not flood UI with unnecessary state mutations.
5. Validate no regression in accessibility or behavior.

## Required Outputs
- Bottleneck hypothesis with evidence
- Proposed minimal optimization set
- Before/after measurement notes
- Residual risk and follow-up suggestions

## Validation Checklist
- Rendering churn is reduced
- List and scroll behavior are smoother
- CPU and memory regressions are addressed
- UI correctness is preserved
- Optimization remains maintainable and testable

## Common Mistakes
- Optimizing without baseline measurement
- Breaking semantics to chase micro gains
- Ignoring identity issues in `ForEach` and list rows
- Overusing global state causing wide invalidations

## Related Skills
- `swiftui-state-management`
- `async-viewmodel-patterns`
- `codexkit-ios-performance`
- `swiftui-performance-audit`
