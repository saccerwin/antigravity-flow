# Debugger-First iOS Debugging

Use XcodeBuildMCP and simulator tooling before falling back to print-debugging when live runtime state matters.

## Prefer This Order

1. confirm session defaults
2. build or run and capture logs
3. inspect UI or view hierarchy if the bug is visible on screen
4. attach debugger or use debugger-capable workflow if enabled
5. inspect stack, locals, and parent frames
6. fix only after the earliest critical failure is proven

## Good Breakpoint Targets

- state transition in a ViewModel
- async completion that mutates UI state
- navigation trigger or route state mutation
- network response mapping boundary
- persistence write or read boundary
- permission or entitlement gate

## Anti-Patterns

- adding prints everywhere before checking logs
- debugging only the final crash site when the corrupt state was created earlier
- blaming SwiftUI rendering before validating ViewModel state
- changing architecture before proving the failing transition
