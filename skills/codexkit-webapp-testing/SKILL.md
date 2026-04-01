---
name: codexkit-webapp-testing
description: Test local web apps with a reconnaissance-first browser workflow, then run targeted checks with Playwright-style automation. Use for qa web, local browser testing, frontend smoke test, or debug UI behavior in a running app.
---

# codexkit-webapp-testing

Handle web app testing as a browser workflow, not just a unit-test exercise. For static pages, inspect the markup and identify stable selectors quickly. For dynamic apps, prefer a reconnaissance-first flow: load the running app, wait for the rendered state to settle, inspect the DOM or capture screenshots, then design targeted browser interactions around what is actually on screen. Keep the output grounded in user-visible behavior, likely selector targets, and the smallest next automation step.

## Capabilities

- browser-reconnaissance
- selector-discovery
- playwright-smoke-planning
- frontend-behavior-debugging


## Automation Hooks

- local-server-detection
- browser-smoke-flow
- screenshot-capture


## Expected Output

- Start with rendered-state reconnaissance before proposing selectors or assertions for dynamic apps.
- Distinguish between static-page inspection and dynamic-app testing so the user gets the right test approach.
- Report the exact user flow checked, the visible result, and the next failing observation instead of a vague pass or fail.
