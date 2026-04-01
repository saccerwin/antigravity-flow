# Template Inventory

Complete list of all templates available for scaffolding.

## Common Templates

### CLAUDE.md.template
Project-level AI assistant instructions. References cursor rules based on project type.

### AGENTS.md (symlink)
Created as a symlink to CLAUDE.md for cross-tool compatibility (Codex, Copilot, etc.).

### gitignore.template
Comprehensive .gitignore covering:
- Node.js (node_modules, dist)
- Python (.venv, __pycache__, .egg-info)
- IDE files (.idea, .vscode)
- Environment files (.env, .dev.vars)
- Test/coverage artifacts
- Secrets (*.pem, *.key)

### config/wt.toml.template
Worktrunk configuration for worktree management:
- Post-start hooks for dependency installation
- Environment file copying
- Dev vars copying
- Tmp directory copying

## TypeScript Templates

### Single Package

| File | Purpose |
|------|---------|
| `.oxlintrc.json` | Oxlint linter config with strict category defaults + type-aware rules |
| `.oxfmtrc.json` | Oxfmt formatter config (Prettier-compatible, import sorting) |
| `tsconfig.json` | Strict TypeScript configuration |
| `package.json.template` | Package manifest with dev dependencies |
| `vitest.config.ts.template` | Vitest test runner configuration (colocated unit tests) |

### Monorepo

| File | Purpose |
|------|---------|
| `.oxlintrc.json` | Monorepo-aware oxlint config with overrides for generated files |
| `.oxfmtrc.json` | Oxfmt formatter config with monorepo ignore patterns |
| `package.json.template` | Root workspace config with pnpm workspaces |
| `vitest.config.ts.template` | Root vitest configuration (colocated unit tests across packages) |


## Python Templates

### Single Package

| File | Purpose |
|------|---------|
| `ruff.toml` | Ruff linter configuration with ALL rules |
| `pyrightconfig.json` | BasedPyright strict type checking |
| `pyproject.toml.template` | uv-managed project with dev dependencies |
| `conftest.py.template` | Pytest shared fixtures |

### Monorepo

| File | Purpose |
|------|---------|
| `ruff.toml` | Monorepo ruff config with FastAPI extensions |
| `pyrightconfig.json` | Monorepo paths and execution environments |
| `pyproject.toml.template` | uv workspace with members config |
| `conftest.py.template` | Root pytest shared fixtures for all packages |

## Testing Templates

### vitest-setup.ts.template
Vitest setup file that runs before each test file. Use for global mocks, extending expect, etc.

### vitest-browser.config.ts.template
Vitest browser mode configuration using Playwright provider.

### vitest-multiproject.config.ts.template
Multi-project vitest configuration with environment-aware file naming:
- **unit-node** - Node tests: `*.node.test.ts` or `*.test.ts` (default)
- **unit-browser** - Browser tests via Playwright: `*.browser.test.ts`
- **integration-browser** - Integration tests in browser: `tests/integration/**/*.browser.test.ts`

E2E tests use Playwright directly (see playwright.config.ts)

### playwright.config.ts.template
Playwright E2E testing setup with:
- Chromium project
- Web server configuration
- HTML reporter
- Retry and trace settings

### Test Location & Naming Conventions

**TypeScript file naming determines environment:**
| Pattern | Environment | Location |
|---------|-------------|----------|
| `*.test.ts` | Node (default) | Colocated in `src/` |
| `*.node.test.ts` | Node (explicit) | Colocated in `src/` |
| `*.browser.test.ts` | Browser (Playwright) | Colocated in `src/` or `tests/integration/` |
| `*.spec.ts` | Playwright E2E | `tests/e2e/` |

**Example structure:**
```
src/
├── utils.ts
├── utils.test.ts           # Node unit test (default)
├── utils.node.test.ts      # Node unit test (explicit)
└── Component.browser.test.tsx  # Browser unit test (React)
tests/
├── integration/
│   └── api.browser.test.ts # Browser integration test
└── e2e/
    └── login.spec.ts       # Playwright E2E test
```

**Python test pattern** (colocated):
```
packages/py_core/
└── py_core/
    ├── models.py
    └── models_test.py  # Colocated with *_test.py suffix
```

## Swift Templates

### Single Package

| File | Purpose |
|------|---------|
| `Package.swift.template` | SPM manifest with test target |
| `.swiftlint.yml` | SwiftLint strict config with SwiftUI rules |
| `.swiftformat` | SwiftFormat config (4-space indent, Swift 6.0) |

## Cursor Templates

### rules/swift-rules.md
Swift/SwiftUI coding standards:
- No Any type, no force unwraps/casts
- @Observable over ObservableObject
- MVVM with @Observable ViewModels
- Swift Testing framework
- SwiftLint/SwiftFormat tool commands

### rules/ts-rules.md
TypeScript coding standards:
- No `any` type
- Use `satisfies` over `as` casts
- Strict types everywhere
- Descriptive naming
- Zod schema derivation
- Oxlint/Oxfmt/vitest tool commands

### rules/python-rules.md
Python coding standards:
- Import typing as `t`
- Pydantic v2 models
- pytest-mock for mocking
- Arrange/Act/Assert testing
- uv commands for linting/testing

### rules/monorepo-rules.md
Monorepo structure and boundaries:
- uv workspaces for Python
- pnpm workspaces for TypeScript
- Absolute imports only
- Project structure guidelines

### hooks/hooks.json
Cursor IDE hook configuration for afterFileEdit event.

### hooks/after-edit.sh.template
Post-edit hook script that runs:
- Oxlint check + Oxfmt format for TS/JS/JSON/CSS files
- TypeScript type checking
- Ruff + BasedPyright for Python files
- SwiftFormat + SwiftLint for Swift files

## Claude Templates

### hooks/check.sh.template
PostToolUse hook for Claude Code:
- Oxlint check with auto-fix + Oxfmt format
- TypeScript type checking summary
- Ruff + BasedPyright for Python
- SwiftFormat + SwiftLint for Swift

### settings.local.json.template
Claude Code configuration with permissions and hooks:

**Permissions:**
- Git operations
- Package managers (pnpm, npm, uv)
- Linting tools (oxlint, oxfmt, ruff, tsc)
- Testing tools (vitest, pytest)
- File operations (ls, cat, find, mkdir, etc.)
- MCP tools (deepwiki, context7)
- Denies: rm -rf, rm -r

**Hooks:**
- PostToolUse hook on Edit|Write that runs `.claude/hooks/check.sh`

## Monorepo Structure

### apps/.gitkeep
Placeholder for application projects.

### packages/.gitkeep
Placeholder for shared library packages.
- Python: `py_*` prefix
- TypeScript: `ts-*` or `ts_*` prefix

### services/.gitkeep
Placeholder for backend service projects.

## Linter Rule Details

### Oxlint Rules

Category defaults (strict with sanity):
- `correctness`: error -- definitely wrong code
- `suspicious`: warn -- likely wrong, some auto-fixable
- `style`: off -- too many noisy rules (197 total); specific rules enabled individually
- `perf`: warn -- performance advisory
- `pedantic`/`restriction`/`nursery`: off

Key rule overrides:
- `typescript/no-explicit-any`: error
- `typescript/no-non-null-assertion`: error
- `typescript/no-floating-promises`: error (type-aware)
- `typescript/await-thenable`: error (type-aware)
- `typescript/explicit-function-return-type`: error
- `typescript/consistent-type-imports`: warn (auto-fixable)
- `typescript/no-unused-vars`: warn (ignores `_` prefixed)
- `no-param-reassign`: error
- `import/no-cycle`: error (monorepo only)

### Ruff Rules

Configuration:
- `select = ['ALL']` - All rules enabled
- `line-length = 160`
- `indent-width = 4`
- Import conventions: numpy=np, pyarrow=pa, typing=t
- Banned from imports: typing (must use `import typing as t`)

### BasedPyright Rules

Strict mode with:
- `typeCheckingMode`: strict
- `pythonVersion`: 3.12
- All report* flags set to error/warning
- Import cycle detection
- Unused code detection

### SwiftLint Rules

Configuration:
- `strict: true` - Strict mode enabled
- Opt-in safety rules: force_unwrapping, force_cast, implicitly_unwrapped_optional
- SwiftUI rules: private_swiftui_state, accessibility_label_for_image, accessibility_trait_for_button
- Line length: warning 160, error 200
- Function body length: warning 50, error 100

### SwiftFormat Rules

Configuration:
- `--indent 4` - 4-space indentation
- `--self remove` - Remove explicit self
- `--swiftversion 6.0` - Swift 6.0 syntax
- `--maxwidth 160` - Maximum line width
- `--wraparguments preserve` - Preserve manual wrapping in view builders
- `--wrapcollections preserve` - Preserve collection formatting
