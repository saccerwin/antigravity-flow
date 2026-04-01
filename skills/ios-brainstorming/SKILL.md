---
name: ios-brainstorming
description: "iOS-specific brainstorming workflow. Decomposes feature requests into SwiftUI Views, ViewModels, and state requirements."
---

# iOS Brainstorming Orchestrator

## Purpose
Exploratory phase for new iOS architectural decisions or complex UI transitions.

## Decision Workflow
1. **User Goal:** What is the primary user intent?
2. **Screen Decomposition:** Identify the major Views and Subviews.
3. **State Discovery:** What data does the screen OWN? What data is INJECTED?
4. **ViewModel Mapping:** Define the intents (functions) and published properties needed.
5. **Platform Constraints:** Check Apple's HIG (Human Interface Guidelines) for this UI pattern.
6. **Trade-offs:** Compare local state vs. global state vs. persistence (SwiftData).

## Expected Outputs
- A design spec in `docs/superpowers/specs/`.
- Clear identification of View/ViewModel boundaries.
