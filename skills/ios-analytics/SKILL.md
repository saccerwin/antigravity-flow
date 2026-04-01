---
name: ios-analytics
description: "Standardized iOS analytics instrumentation workflow. Focuses on consistency, privacy, and valid data capture."
---

# iOS Analytics Orchestrator

## Purpose
Define and implement event tracking for user behavior and app health.

## Decision Workflow
1. **Taxonomy check:** Is the event name consistent with the existing project naming convention (e.g., `screen_view_home`)?
2. **De-duplication:** Is this event already tracked elsewhere?
3. **Data mapping:** Define the properties/parameters needed for the event.
4. **Implementation:** Use a centralized Analytics service.
5. **Verification:** Print event names to debug console to verify triggers.

## Quality Checklist
- [ ] NO PII (Personally Identifiable Information) in events.
- [ ] Events triggered at the correct lifecycle point (not during View init).
- [ ] Property types are consistent (Strings, Ints, Booleans).

## Related Skills
- `analytics-instrumentation`
- `analytics-verification-playbook`
