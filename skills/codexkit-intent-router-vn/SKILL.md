---
name: codexkit-intent-router-vn
description: Use when a message starts with or contains "Sử dụng codexKit", "Su dung codexKit", "su dung codexkit", "su dung codex kit", "use codexkit", direct workflow names like "codexkit-ios-implement-feature" or "codekit-ios-debug", or pseudo slash commands like "/plan", "/debug", "/debug-live", "/review", "/test", "/deploy", "/status", "/mobile", "/qa", "/ci", "/pr-comments", "/brainstorm", "/product", "/frontend-design", "/ui-design", "/foend-design", "/react-best-practices", "/vite-react", "/intent", "/route", "/route-score", "/auto-memory", "/auto-dream", "/session-memory", "/memory-ledger", "/memory-lifecycle", "/ledgermind", "/neural-memory", "/brain-health", "/associative-recall", "/gliclass-guard", "/hallucination-guard", "/gsd", "/gsd-loop", "/rag", "/rag-upgrade", "/nexusrag", "/ultrathink", "/ultrathink-upgrade", "/beads", "/beads-ready", "/beads-graph", "/beads-blocked", "/paul", "/paul-loop", "/paul-unify", "/ios-feature", "/ios-debug", "/ios-test", "/ios-analytics", "/ios-architecture", "/ios-code-review", "/ios-performance", "/ios-refactor", "/ios-release", "/ios-figma", "/ios-design", "/ios-figma-to-code", "/ios-refactor-view", "/ios-navigation", "/ios-swiftui-performance", "/ios-di", "/ios-async-vm", "/fix-bugs". Route automatically to the matching CodexKit workflow.
metadata:
  short-description: Trigger router for phrase Su dung codexKit
---

# CodexKit Intent Router (VN)

## Goal

When user invokes `Sử dụng codexKit`, immediately classify intent and start the correct workflow without asking broad questions.

## Smart Routing Model (UltraThink-inspired)

Use weighted intent signals instead of first-match routing:

1. Explicit command signal (highest weight)
- Exact slash/direct command such as `/ios-debug`, `ios-refactor`, `codexkit-plan`.

2. Domain keyword signal (high weight)
- Clusters like planning/debug/review/test/deploy/mobile/iOS/design/analytics.

3. Context signal (medium weight)
- Mentions of PR, CI logs, stack traces, Xcode, simulator, App Store, crash, architecture.

4. Tooling signal (medium weight)
- If task requires iOS runtime checks and XcodeBuildMCP is available, prefer iOS debugger/performance flows.

5. iOS specialization bias (medium weight)
- If prompt includes `SwiftUI`, `Xcode`, `Simulator`, `Swift Testing`, or `MVVM` cues, prefer `ios-*` specialist skills over generic `codexkit-*` routes.
- Only fall back to generic routing if no matching `ios-*` intent exists.

6. Web QA specialization bias (medium weight)
- If prompt includes `qa web`, `webapp`, `browser test`, `playwright`, or `local web`, prefer `codexkit-webapp-testing` over `codexkit-qa`.

7. CI specialization bias (medium weight)
- If prompt includes `CI`, `GitHub Actions`, or `check fail`, prefer `codexkit-gh-fix-ci` over `codexkit-debug` even if `debug` is present.

8. Mobile QA specialization bias (medium weight)
- If prompt includes `qa mobile`, `kiểm thử mobile`, or mobile validation language plus `simulator`, `permission`, or `deep link`, prefer `codexkit-mobile-qa` over `ios-debug` or generic `codexkit-qa`.

9. iOS product-work bias (medium weight)
- If prompt includes `ios analytics`, `swiftui analytics`, `ios feature`, `implement ios`, or `onboarding`, prefer the matching `ios-*` specialist over `codexkit-mobile-developer`.

10. Explicit-command dominance (high weight)
- If the prompt starts with `/status`, `/test`, `/debug`, `/review`, or another explicit slash command, do not let later secondary keywords override that primary route unless the command itself is ambiguous.

11. Memory signal (medium weight)
- For plan/review/mobile architecture outputs, recall memory before final routing decision.

### Confidence Policy

- High confidence (`>= 0.75`): route immediately and start execution.
- Medium confidence (`0.45 - 0.74`): present top 2 routes only, recommended option first.
- Low confidence (`< 0.45`): ask one concise disambiguation question.
- Margin downgrade: if `top1 - top2 < 0.08`, downgrade one confidence band.

### Strict Route Resolution Loop

For UltraThink-style strict routing, run this loop:
1. Score candidate routes using weighted signals (explicit/direct/domain/context/tooling/memory).
2. Apply boosts and penalties from `codexkit-intent-scoreboard`.
3. Compute top-5, then apply confidence + margin downgrade rule.
4. Apply specialization tie-break rules when cues are explicit:
   - If iOS cue exists and a matching `ios-*` candidate is present, prefer it over `codexkit-mobile-developer` or generic `codexkit-*`.
   - If web QA cue exists, prefer `codexkit-webapp-testing` over `codexkit-qa`.
   - If CI cue exists, prefer `codexkit-gh-fix-ci` over `codexkit-debug`.
   - If mobile QA cue exists, prefer `codexkit-mobile-qa` over `ios-debug`.
   - If iOS analytics or iOS feature cue exists, prefer the matching `ios-*` specialist over `codexkit-mobile-developer`.
   - If prompt starts with an explicit slash command, keep that route as primary unless user clearly asks for route debugging or disambiguation.
5. If confidence is high, execute immediately.
6. If confidence is medium, present top-2 with one recommended choice.
7. If confidence is low, ask one concise disambiguation question.
8. For route-debug requests, emit scoreboard trace and JSONL diagnostics.

### Multi-intent Handling

If the prompt includes multiple intents, decompose in this order:
1. Primary delivery intent (implement/debug/review/test/deploy).
2. Secondary support intent (plan/brainstorm/architecture/performance).
3. Validation intent (test/review/release-readiness).

If decomposition is needed, announce the sequence briefly and execute phase 1 immediately.

## Trigger handling

If message includes one of these trigger phrases, parse remaining text and route:

- `Sử dụng codexKit`
- `Su dung codexKit`
- `su dung codexkit`
- `su dung codex kit`
- `use codexkit`

Also accept pseudo slash commands at message start:

- `/plan` -> `codexkit-plan`
- `/debug` -> `codexkit-debug`
- `/debug-live` -> `codexkit-debugger-live`
- `/review` -> `codexkit-review` (or `codexkit-pr-review` for PR context)
- `/test` -> `codexkit-test`
- `/qa` -> `codexkit-qa` (or `codexkit-webapp-testing` for web)
- `/deploy` -> `codexkit-deploy`
- `/status` -> `codexkit-status`
- `/mobile` -> `codexkit-mobile-developer`
- `/mobile-qa` -> `codexkit-mobile-qa`
- `/ci` -> `codexkit-gh-fix-ci`
- `/pr-comments` -> `codexkit-gh-address-comments`
- `/brainstorm` -> `cm-brainstorm-idea`
- `/product` -> `codexkit-product-strategy`
- `/frontend-design` -> `codexkit-frontend-design`
- `/ui-design` -> `codexkit-frontend-design`
- `/foend-design` -> `codexkit-frontend-design`
- `/react-best-practices` -> `codexkit-react-best-practices`
- `/vite-react` -> `codexkit-react-best-practices`
- `/intent` -> `codexkit-intent-scoreboard`
- `/route` -> `codexkit-intent-scoreboard`
- `/route-score` -> `codexkit-intent-scoreboard`
- `/auto-memory` -> `codexkit-auto-memory`
- `/auto-dream` -> `codexkit-auto-dream`
- `/session-memory` -> `codexkit-session-memory`
- `/memory-ledger` -> `codexkit-memory-ledgermind-upgrade`
- `/memory-lifecycle` -> `codexkit-memory-ledgermind-upgrade`
- `/ledgermind` -> `codexkit-memory-ledgermind-upgrade`
- `/neural-memory` -> `codexkit-neural-memory`
- `/brain-health` -> `codexkit-neural-memory`
- `/associative-recall` -> `codexkit-neural-memory`
- `/gliclass-guard` -> `codexkit-gliclass-hallucination-guard`
- `/hallucination-guard` -> `codexkit-gliclass-hallucination-guard`
- `/gsd` -> `codexkit-get-shit-done`
- `/gsd-loop` -> `codexkit-get-shit-done`
- `/rag` -> `codexkit-rag-intelligence-upgrade`
- `/rag-upgrade` -> `codexkit-rag-intelligence-upgrade`
- `/nexusrag` -> `codexkit-rag-intelligence-upgrade`
- `/ultrathink` -> `codexkit-ultrathink-upgrade`
- `/ultrathink-upgrade` -> `codexkit-ultrathink-upgrade`
- `/ultrathink-v2` -> `codexkit-ultrathink-upgrade`
- `/ultrathink-strict` -> `codexkit-ultrathink-upgrade`
- `/beads` -> `codexkit-beads-workgraph`
- `/beads-ready` -> `codexkit-beads-workgraph`
- `/beads-graph` -> `codexkit-beads-workgraph`
- `/beads-blocked` -> `codexkit-beads-workgraph`
- `/paul` -> `codexkit-paul-loop`
- `/paul-loop` -> `codexkit-paul-loop`
- `/paul-unify` -> `codexkit-paul-loop`
- `/ios-feature` -> `ios-implement-feature`
- `/ios-debug` -> `ios-debug`
- `/ios-test` -> `ios-testing`
- `/ios-analytics` -> `ios-analytics`
- `/ios-architecture` -> `ios-architecture`
- `/ios-code-review` -> `ios-code-review`
- `/ios-performance` -> `ios-performance`
- `/ios-refactor` -> `ios-refactor`
- `/ios-release` -> `ios-release-readiness`
- `/ios-figma` -> `ios-figma-to-code`
- `/ios-design` -> `ios-figma-to-code`
- `/ios-figma-to-code` -> `ios-figma-to-code`
- `/ios-refactor-view` -> `ios-refactor-view`
- `/ios-navigation` -> `ios-navigation`
- `/ios-swiftui-performance` -> `ios-swiftui-performance`
- `/ios-di` -> `ios-di`
- `/ios-async-vm` -> `ios-async-vm`
- `/fix-bugs` -> `ios-fix-bugs`

Also accept direct skill-like commands in plain text:

- `ios-implement-feature`, `codexkit-ios-implement-feature`, or `codekit-ios-implement-feature` -> `ios-implement-feature`
- `ios-debug`, `codexkit-ios-debug`, or `codekit-ios-debug` -> `ios-debug`
- `ios-testing`, `codexkit-ios-testing`, or `codekit-ios-testing` -> `ios-testing`
- `ios-analytics`, `codexkit-ios-analytis`, `codekit-ios-analytics`, or `codekit-ios-analytis` -> `ios-analytics`
- `ios-architecture`, `codexkit-ios-architecture`, or `codekit-ios-architecture` -> `ios-architecture`
- `ios-code-review`, `codexkit-ios-code-review`, or `codekit-ios-code-review` -> `ios-code-review`
- `ios-performance`, `codexkit-ios-performance`, or `codekit-ios-performance` -> `ios-performance`
- `ios-refactor`, `codexkit-ios-refactor`, or `codekit-ios-refactor` -> `ios-refactor`
- `ios-release-readiness`, `codexkit-ios-release-readiness`, `codekit-ios-release-readiness`, `codexkit-ios-release`, or `codekit-ios-release` -> `ios-release-readiness`
- `ios-figma`, `ios-design`, `ios-figma-to-code`, `codexkit-ios-figma-to-code`, `codekit-ios-figma-to-code`, `codexkit-ios-figma-to-swiftui`, `codekit-ios-figma-to-swiftui`, `figma-to-swiftui`, `figma-to-swiftui-skill`, `codexkit-ios-design-principles`, `codekit-ios-design-principles`, or `swiftui-design-principles` -> `ios-figma-to-code`
- `ios-refactor-view`, `codexkit-ios-view-refactor`, `codekit-ios-view-refactor`, or `swiftui-view-refactor` -> `ios-refactor-view`
- `ios-performance-audit`, `codexkit-ios-performance-audit`, `codekit-ios-performance-audit`, or `swiftui-performance-audit` -> `ios-performance-audit`
- `ios-ui-patterns`, `codexkit-ios-ui-patterns`, `codekit-ios-ui-patterns`, or `swiftui-ui-patterns` -> `ios-ui-patterns`
- `ios-debugger-agent`, `codexkit-ios-debugger-agent`, or `codekit-ios-debugger-agent` -> `ios-debugger-agent`
- `ios-swift-concurrency-expert`, `codexkit-ios-swift-concurrency-expert`, `codekit-ios-swift-concurrency-expert`, or `swift-concurrency-expert` -> `ios-swift-concurrency-expert`
- `ios-navigation`, `codexkit-ios-swiftui-navigation`, `codekit-ios-swiftui-navigation`, or `swiftui-navigation` -> `ios-navigation`
- `ios-swiftui-performance`, `codexkit-ios-swiftui-performance`, `codekit-ios-swiftui-performance`, or `swiftui-performance` -> `ios-swiftui-performance`
- `ios-di`, `codexkit-ios-dependency-injection-lightweight`, `codekit-ios-dependency-injection-lightweight`, or `dependency-injection-lightweight` -> `ios-di`
- `ios-async-vm`, `codexkit-ios-async-viewmodel-patterns`, `codekit-ios-async-viewmodel-patterns`, or `async-viewmodel-patterns` -> `ios-async-vm`
- `ios-brainstorming` or `codekit-brainstorming` -> `ios-brainstorming`
- `ios-fix-bugs` or `codekit-fix-bugs` -> `ios-fix-bugs`
- `codexkit-intent-scoreboard`, `intent-scoreboard`, `route-debug`, or `router-debug` -> `codexkit-intent-scoreboard`
- `codexkit-auto-memory`, `auto-memory`, or `memory-sync` -> `codexkit-auto-memory`
- `codexkit-auto-dream`, `auto-dream`, or `dream-sync` -> `codexkit-auto-dream`
- `codexkit-session-memory`, `session-memory`, or `session-recall` -> `codexkit-session-memory`
- `codexkit-memory-ledgermind-upgrade`, `ledgermind`, `ledgermind-memory`, `memory-ledger`, `memory-lifecycle`, `phase memory`, or `decision lifecycle memory` -> `codexkit-memory-ledgermind-upgrade`
- `codexkit-neural-memory`, `neural-memory`, `neural memory`, `brain health`, `purity score`, `associative recall`, `memory sidecar`, `semantic memory`, `brain consolidate`, `memory consolidate`, or `embeddings-eval` -> `codexkit-neural-memory`
- `codexkit-gliclass-hallucination-guard`, `gliclass guard`, `gliclass hallucination`, `hallucination guard`, `groundedness classifier`, or `evidence support classification` -> `codexkit-gliclass-hallucination-guard`
- `codexkit-debugger-live`, `debug-live`, `live debugger`, `breakpoint debug`, `stack inspect`, `inspect frames`, `lldb`, or `dap debug` -> `codexkit-debugger-live`
- `codexkit-get-shit-done`, `get-shit-done`, `gsd`, or `gsd-loop` -> `codexkit-get-shit-done`
- `codexkit-rag-intelligence-upgrade`, `rag-upgrade`, `nexusrag`, or `rag-intelligence` -> `codexkit-rag-intelligence-upgrade`
- `codexkit-ultrathink-upgrade`, `ultrathink`, `ultrathink-oss`, or `ultrathink integration` -> `codexkit-ultrathink-upgrade`
- `codexkit-frontend-design`, `frontend-design`, `ui-design`, `foend-design`, `foend design`, `design web`, `design frontend`, or `beautify ui` -> `codexkit-frontend-design`
- `codexkit-react-best-practices`, `react best practices`, `vite react best practices`, `react vite`, `vite react`, or `react performance review` -> `codexkit-react-best-practices`
- `ultrathink-v2`, `ultrathink strict`, `confidence-gated routing`, or `router quality gate` -> `codexkit-ultrathink-upgrade`
- `codexkit-beads-workgraph`, `beads`, `bd`, `beads workflow`, or `beads task graph` -> `codexkit-beads-workgraph`
- `codexkit-paul-loop`, `paul`, `paul-loop`, `plan apply unify`, `workflow unify`, `single next action`, `done_with_concerns`, or `needs_context` -> `codexkit-paul-loop`

- planning keywords (`lập kế hoạch`, `plan`, `scope`, `thiết kế`) -> `codexkit-plan`
- debugging keywords (`gỡ lỗi`, `bug`, `error`, `failing`) -> `codexkit-debug`
- code review keywords (`review code`, `review`, `risk`, `PR review`) -> `codexkit-review` or `codexkit-pr-review`
- test/QA keywords (`test`, `regression`) -> `codexkit-test` or `codexkit-qa`
- deploy/release keywords (`chuẩn bị deploy`, `release`, `ship`) -> `codexkit-deploy` or `codexkit-ship`
- status keywords (`kiểm tra trạng thái`, `status`, `progress`) -> `codexkit-status`
- CI/GitHub keywords (`fix ci`, `github actions`, `check fail`, `ci fail`) -> `codexkit-gh-fix-ci`
- web QA keywords (`qa web`, `webapp`, `browser test`, `playwright`, `local web`) -> `codexkit-webapp-testing`
- PR comment keywords (`address comment`, `review thread`) -> `codexkit-gh-address-comments`
- routing debug keywords (`route sai`, `router sai`, `intent score`, `route confidence`, `why this route`) -> `codexkit-intent-scoreboard`
- auto memory keywords (`auto memory`, `sync memory`, `refresh memory`) -> `codexkit-auto-memory`
- auto dream keywords (`auto dream`, `daily dream`, `memory synthesis`) -> `codexkit-auto-dream`
- session memory keywords (`session memory`, `cross session`, `recall sessions`, `ghi nhớ phiên`) -> `codexkit-session-memory`
- ledgermind memory keywords (`ledgermind`, `memory lifecycle`, `pattern emergent canonical`, `self-healing memory`, `evidence-linked memory`, `conflict-safe supersede`) -> `codexkit-memory-ledgermind-upgrade`
- neural memory keywords (`neural memory`, `brain health`, `purity score`, `associative recall`, `memory sidecar`, `semantic memory`, `brain consolidate`, `embeddings eval`) -> `codexkit-neural-memory`
- hallucination guard keywords (`gliclass`, `groundedness classification`, `support risk label`, `unsupported or speculative`, `contradicted by evidence`, `hallucination gate`) -> `codexkit-gliclass-hallucination-guard`
- live debugger keywords (`live debugger`, `breakpoint`, `stack inspect`, `inspect frames`, `lldb`, `dap debug`, `debugger first`) -> `codexkit-debugger-live`
- gsd delivery keywords (`get shit done`, `phase loop`, `assumptions first`, `wave execution`, `delivery forensics`) -> `codexkit-get-shit-done`
- rag intelligence keywords (`rag`, `retrieval`, `rerank`, `knowledge graph retrieval`, `nexusrag`, `citation grounding`, `hybrid retrieval`) -> `codexkit-rag-intelligence-upgrade`
- ultrathink upgrade keywords (`ultrathink`, `ultrathink-v2`, `skill mesh`, `intent scoring`, `layer-aware routing`, `memory policy`, `hook quality gate`, `confidence-gated routing`, `route margin`) -> `codexkit-ultrathink-upgrade`
- beads workflow keywords (`beads`, `bd ready`, `dependency graph`, `blocked queue`, `long-horizon task graph`, `issue dependency`) -> `codexkit-beads-workgraph`
- paul loop keywords (`paul`, `plan apply unify`, `single next action`, `unify phase`, `done with concerns`, `needs context`, `intent spec code`) -> `codexkit-paul-loop`
- mobile keywords (`làm app mobile`, `iOS`, `Android`, `Flutter`, `React Native`) -> `codexkit-mobile-developer`
- mobile QA keywords (`qa mobile`, `kiểm thử mobile`) -> `codexkit-mobile-qa`
- iOS implementation keywords (`ios feature`, `swiftui feature`, `implement ios`, `ios onboarding`, `swiftui onboarding`) -> `ios-implement-feature`
- iOS debug keywords (`ios debug`, `xcode`, `simulator`, `swiftui crash`, `swift concurrency bug`) -> `ios-debug`
- iOS testing keywords (`ios test`, `swift testing`, `xctest`, `xctest migration`) -> `ios-testing`
- iOS analytics keywords (`ios analytics`, `swiftui analytics`, `telemetry`, `metrickit`) -> `ios-analytics`
- iOS architecture keywords (`ios architecture`, `mvvm architecture`, `swiftui mvvm`, `screen boundaries`) -> `ios-architecture`
- iOS code review keywords (`ios review`, `swiftui review`, `review ios code`) -> `ios-code-review`
- iOS performance keywords (`ios performance`, `swiftui jank`, `scroll performance`) -> `ios-performance`
- iOS refactor keywords (`ios refactor`, `swiftui cleanup`, `refactor viewmodel`, `swiftui refactor`) -> `ios-refactor`
- iOS release keywords (`ios release`, `release readiness`, `ship ios`) -> `ios-release-readiness`
- Figma/design to SwiftUI keywords (`figma swiftui`, `figma to swiftui`, `convert figma`, `figma node-id`, `ui screenshot to swiftui`, `pixel perfect`, `design to code`) -> `ios-figma-to-code`
- iOS view refactor keywords (`view refactor`, `swiftui refactor view`) -> `ios-refactor-view`
- iOS performance audit keywords (`performance audit`, `swiftui audit`) -> `ios-performance-audit`
- iOS debugger automation keywords (`simulator debug`, `xcodebuildmcp`) -> `ios-debugger-agent`
- iOS concurrency expert keywords (`sendable error`, `actor isolation`, `swift 6 concurrency`) -> `ios-swift-concurrency-expert`
- iOS navigation keywords (`swiftui navigation`, `navigationstack`, `sheet fullscreencover`) -> `ios-navigation`
- iOS SwiftUI performance keywords (`swiftui recomposition`, `list jank`, `view update churn`) -> `ios-swiftui-performance`
- iOS DI keywords (`dependency injection`, `constructor injection`, `lightweight di`) -> `ios-di`
- iOS async ViewModel keywords (`async viewmodel`, `stale response`, `cancellation flow`) -> `ios-async-vm`
- brainstorming/discovery keywords (`brainstorm`, `ý tưởng`, `discovery`) -> `cm-brainstorm-idea` or `codexkit-think-about`
- product/requirements keywords (`PRD`, `feature framing`, `tradeoff`) -> `codexkit-product-strategy`
- frontend design keywords (`frontend design`, `ui design`, `foend design`, `landing page design`, `dashboard design`, `design web`, `beautify ui`, `polish ui`) -> `codexkit-frontend-design`
- react vite quality keywords (`vite spa`, `react vite`, `vite rewrites`, `vite caching`, `route splitting`, `react query`, `swr`, `cls image`, `vite preview before push`) -> `codexkit-react-best-practices`

## Default fallback

If user only writes `Sử dụng codexKit` with no task detail:

1. Ask exactly one concise clarification question with quick options:
   - Plan
   - Debug
   - Review
   - Test/QA
   - Deploy
   - Mobile
2. As soon as user picks one, start that flow directly.

If user provides mixed signals but no explicit command:

1. Return exactly 2 likely routes with confidence notes.
2. Put recommended route first and include one-line reason.
3. If user does not choose, proceed with the recommended route.

## Response behavior

- Keep startup response short.
- State selected workflow explicitly.
- Begin execution immediately.
- Avoid long theory unless user asks for explanation.
- For plan/review/mobile architecture outputs, confirm memory recall happened before final answer.
- After completing major decisions, suggest storing durable outcomes via `codexkit-memory`.

## Output format

```markdown
CodexKit flow da chon: <skill-name>
Ly do route: <1 dong>
Bat dau thuc thi:
- <first concrete action>
```
