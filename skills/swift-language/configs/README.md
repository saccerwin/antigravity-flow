# Swift Config Files

| File | Tool | Install |
|------|------|---------|
| `.swiftlint.yml` | [SwiftLint](https://github.com/realm/SwiftLint) | `brew install swiftlint` |
| `.swiftformat` | [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) | `brew install swiftformat` |
| `Package.template.swift` | SPM | Built-in |

## Usage

```bash
# Copy to project
cp .swiftlint.yml .swiftformat /path/to/project/

# SwiftLint
swiftlint          # Check
swiftlint --fix    # Auto-fix

# SwiftFormat
swiftformat . --dryrun  # Preview
swiftformat .           # Apply

# Package.swift
cp Package.template.swift /path/to/project/Package.swift
# Replace {{PACKAGE_NAME}}, remove unused sections
```

## Key Rules

**Safety:** No force unwrap, no force try, no implicitly unwrapped optionals
**Performance:** isEmpty over count==0, first(where:) over filter().first, reduce(into:) for mutations
**Limits:** 120 char lines, 50 line functions, complexity 10
**Style:** 4-space indent, trailing commas, sorted imports
