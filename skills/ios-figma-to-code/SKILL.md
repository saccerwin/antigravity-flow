---
name: ios-figma-to-code
description: Use when converting Figma designs or UI screenshots into production SwiftUI code with component reuse checks, MVVM-safe structure, and pixel-accurate spacing and layout.
---

# CodexKit iOS Figma To Code

Use this skill when the source of truth is visual design and the output must be real SwiftUI code, not mock markup.

## Workflow
1. Recall durable memory before final architecture or implementation planning output.
2. Ingest design input from one of these sources:
- Figma URL or node via Figma MCP.
- Screenshot from any UI source when Figma node is missing.
3. Extract layout spec first: spacing, sizing, typography, colors, corner radius, shadows, states, and variants.
4. Scan the app codebase for reusable common components, tokens, and modifiers before writing new views.
5. Build a reuse map:
- Design element -> existing component/token.
- Missing element -> new component with clear ownership.
6. Implement SwiftUI code using project architecture defaults:
- SwiftUI-first UI.
- MVVM-safe boundaries.
- Minimal blast radius.
7. Run pixel parity pass:
- Spacing and alignment.
- Typography scale and weight.
- Interaction states.
- Dynamic Type and accessibility checks.
8. Validate output with side-by-side comparison and fix deltas until layout fidelity is production-ready.

## Non-Negotiable Quality Bar
- Prefer existing common components over creating duplicates.
- Keep spacing and sizing exact to design intent.
- No visual drift in paddings, gaps, corner radius, or type hierarchy.
- Keep code composable and maintainable for future screens.
- Do not move business logic into SwiftUI Views.

## When Not To Use
- No visual source exists and user wants exploration only.
- Task is a broad product brainstorm, not implementation.
- Project is UIKit-only and user explicitly does not want SwiftUI.

## Related Skills
- `figma-to-swiftui`
- `swiftui-design-principles`
- `swiftui-ui-patterns`
- `ios-implement-feature`
- `mvvm-architecture`
- `swiftui-viewmodels`
- `swiftui-state-management`
- `ios-refactor`
