---
name: swiftui-state-bug-playbook
description: "Decision tree for fixing 'State not updating' or 'Infinite render loops' in SwiftUI."
---

# SwiftUI State Bug Playbook

## Symptom 1: UI not updating when data changes
1. **Check Object Observation:** If using `ObservableObject`, is the property marked with `@Published`?
2. **MainActor:** Is the update happening on a background thread? UI updates MUST be on `@MainActor`.
3. **Reference vs Value:** Is the object a `class` (reference) or `struct` (value)? SwiftUI works best when `@State` is a value type.
4. **Init Issues:** Is the ViewModel being re-initialized inside the View's `init` or `body`? (Use `@State` or `@StateObject` to preserve it).

## Symptom 2: Infinite Render Loop / Body being called constantly
1. **State mutation in body:** Are you changing a `@State` variable directly inside the `body` property? (Move it to `.onAppear` or ViewModel).
2. **Computed property side-effects:** Does a computed property used in the UI trigger a network request?
3. **Equality check:** If using custom `Equatable`, is the comparison logic correct?

## Resolution
- Use `Self._printChanges()` inside the `body` to see which property is triggering the update.
