---
name: "Swift"
description: "Swift and iOS development with modern patterns and best practices"
---

# Swift

You are a Swift and iOS development expert. Apply these guidelines when working on Swift code.

## Target Requirements

- Swift 6+ with modern Swift concurrency
- SwiftUI with `@Observable` for shared data
- No third-party frameworks without explicit approval
- Avoid UIKit unless explicitly requested
- Follow Apple Human Interface Guidelines

## Code Organization

### Extension-Based Grouping

Organize related functionality using extensions:

```swift
// MARK: - Main View
struct BooksView: View {
    @State private var books: [Book] = []

    var body: some View {
        List(books) { book in
            BookCell(book: book)
        }
    }
}

// MARK: - Subviews
extension BooksView {
    struct BookCell: View {
        let book: Book

        var body: some View {
            HStack {
                BookCover(url: book.coverURL)
                BookInfo(book: book)
            }
        }
    }

    struct BookCover: View {
        let url: URL?
        var body: some View { /* ... */ }
    }

    struct BookInfo: View {
        let book: Book
        var body: some View { /* ... */ }
    }
}

// MARK: - View Model
extension BooksView {
    @Observable
    @MainActor
    final class ViewModel {
        var books: [Book] = []
        var isLoading = false

        func loadBooks() async { /* ... */ }
    }
}
```

### File Structure

- Place each struct/class/enum in separate Swift files
- Don't break views into computed properties; use separate `View` structs
- Organize by feature, not layer

```
Features/
├── Books/
│   ├── BooksView.swift
│   ├── BookDetailView.swift
│   └── Models/
├── Settings/
│   └── SettingsView.swift
└── Shared/
    ├── Components/
    └── Extensions/
```

## Naming Conventions

```swift
// Types: UpperCamelCase
struct UserProfile { }
enum NetworkError { }
protocol DataFetching { }

// Properties and methods: lowerCamelCase
var currentUser: User
func fetchUserData() async throws -> User

// Boolean properties: use assertion form
var isEnabled: Bool
var hasUnreadMessages: Bool
var canSubmit: Bool

// Collections: use plural nouns
var users: [User]
var selectedItems: Set<Item>

// Mutating vs non-mutating
func add(_ item: Item)           // mutates
func adding(_ item: Item) -> [Item]  // returns new
```

## SwiftUI Patterns

### State Management

```swift
// Local UI state only
@State private var searchText = ""

// Observable objects (iOS 17+) - prefer @Observable over ObservableObject
@Observable
@MainActor
final class ProfileViewModel {
    var user: User?
    var isLoading = false
}

// In views
@State private var viewModel = ProfileViewModel()

// For passed-in observable objects
@Bindable var viewModel: ProfileViewModel
```

### Modern Modifiers (Use These)

```swift
.foregroundStyle(.primary)           // NOT foregroundColor()
.clipShape(.rect(cornerRadius: 12))  // NOT cornerRadius()
.bold()                              // NOT fontWeight(.bold)
.scrollIndicators(.hidden)           // to hide scroll bars

// Modern Tab API - NOT tabItem()
TabView {
    Tab("Home", systemImage: "house") {
        HomeView()
    }
    Tab("Settings", systemImage: "gear") {
        SettingsView()
    }
}
```

### Deprecated Patterns to Avoid

```swift
// DON'T use single-parameter onChange
.onChange(of: value) { newValue in }  // DEPRECATED

// DO use two-parameter version
.onChange(of: value) { oldValue, newValue in }

// For iOS 17+, prefer @Observable over ObservableObject
class MyViewModel: ObservableObject { }  // Legacy (iOS 13-16)

@Observable class MyViewModel { }        // Modern (iOS 17+)
```

### Layout

```swift
// DON'T use UIScreen.main.bounds
let width = UIScreen.main.bounds.width  // BAD

// DO use containerRelativeFrame or visualEffect
.containerRelativeFrame(.horizontal) { width, _ in
    width * 0.8
}

// Prefer containerRelativeFrame() or visualEffect() over GeometryReader

// Use ImageRenderer instead of UIGraphicsImageRenderer
let renderer = ImageRenderer(content: myView)
if let image = renderer.uiImage { }
```

### Buttons and Gestures

```swift
// DON'T use onTapGesture for buttons
Image(systemName: "plus")
    .onTapGesture { action() }  // BAD

// DO use Button with labels
Button {
    action()
} label: {
    Label("Add Item", systemImage: "plus")
}

// Only use onTapGesture when tracking tap location or count
```

### Navigation

```swift
// Modern navigation with type-safe destinations
NavigationStack {
    List(items) { item in
        NavigationLink(value: item) {
            ItemRow(item: item)
        }
    }
    .navigationDestination(for: Item.self) { item in
        ItemDetailView(item: item)
    }
}
```

### Collections

```swift
// DO use enumerated directly
ForEach(Array(items.enumerated()), id: \.element.id) { index, item in
    Text("\(index): \(item.name)")
}

// DON'T convert to array first unnecessarily
```

## Modern Swift APIs

### Concurrency

```swift
// Modern sleep - NOT Task.sleep(nanoseconds:)
try await Task.sleep(for: .seconds(1))

// NEVER use DispatchQueue.main.async()
DispatchQueue.main.async { }  // BAD

// DO use MainActor
await MainActor.run { }
// or mark with @MainActor

// All @Observable classes should be @MainActor
@Observable
@MainActor
final class ViewModel { }
```

### Modern Foundation

```swift
// Directory access
let documents = URL.documentsDirectory
let cache = URL.cachesDirectory

// Path manipulation
let file = documents.appending(path: "data.json")

// String operations - NOT replacingOccurrences(of:with:)
let result = text.replacing("old", with: "new")

// Text filtering - NOT contains()
items.filter { $0.name.localizedStandardContains(searchText) }
```

### Text Formatting

```swift
// Use format parameter - NOT C-style or NumberFormatter
Text(price, format: .currency(code: "USD"))
Text(date, format: .dateTime.month().day())
Text(count, format: .number.precision(.fractionLength(2)))
```

### Static Member Lookup

```swift
// Prefer static members over initializers
.buttonStyle(.borderedProminent)  // NOT BorderedProminentButtonStyle()
.clipShape(.capsule)              // NOT Capsule()
.clipShape(.circle)               // NOT Circle()
.background(.ultraThinMaterial)
```

## SwiftUI Colors

```swift
// DON'T use UIKit colors in SwiftUI
Color(UIColor.systemBackground)  // BAD

// DO use SwiftUI colors
Color(.systemBackground)         // OK
Color.primary
Color.secondary
```

## Dynamic Type

```swift
// DON'T override Dynamic Type
.font(.system(size: 16))  // BAD - fixed size

// DO respect system font sizing
.font(.body)
.font(.headline)

// Avoid hard-coded padding and spacing values
```

## SwiftData

### Basic Setup

```swift
@Model
final class Book {
    var title: String
    var author: String
    var publishedDate: Date
    var rating: Int?

    @Relationship(deleteRule: .cascade)
    var chapters: [Chapter]?

    init(title: String, author: String, publishedDate: Date) {
        self.title = title
        self.author = author
        self.publishedDate = publishedDate
    }
}
```

### CloudKit Compatibility

When using iCloud sync:
- NEVER use `@Attribute(.unique)`
- All properties need default values or be optional
- Mark ALL relationships as optional

## Error Handling

```swift
// Define specific error types
enum DataError: LocalizedError {
    case networkUnavailable
    case invalidResponse(statusCode: Int)
    case decodingFailed(underlying: Error)

    var errorDescription: String? {
        switch self {
        case .networkUnavailable:
            return "Network connection unavailable"
        case .invalidResponse(let code):
            return "Server returned error \(code)"
        case .decodingFailed:
            return "Failed to process server response"
        }
    }
}

// Avoid force try and force unwrap (except truly unrecoverable cases)
do {
    let data = try await fetchData()
    let result = try decoder.decode(Response.self, from: data)
} catch {
    logger.error("Failed to load: \(error)")
    throw DataError.decodingFailed(underlying: error)
}
```

## Testing

### Swift Testing Framework

```swift
import Testing

struct AuthenticationTests {
    @Test("User can log in with valid credentials")
    func successfulLogin() async throws {
        let auth = AuthService()
        let result = try await auth.login(email: "test@example.com", password: "valid")
        #expect(result.isAuthenticated)
    }

    @Test("Login fails with wrong password")
    func failedLogin() async {
        let auth = AuthService()
        await #expect(throws: AuthError.invalidCredentials) {
            try await auth.login(email: "test@example.com", password: "wrong")
        }
    }
}
```

### Testing Guidelines

- Write unit tests for core application logic
- UI tests only when unit tests aren't feasible
- Place view logic in view models for testability

## iOS Version Features

### iOS 17+
- `@Observable` macro replaces `ObservableObject`
- `@Bindable` for bindings to observable objects
- SwiftData for persistence
- TipKit for onboarding hints

### iOS 18+
- Enhanced SwiftData with `#Index` and `#Unique`
- Control Center widgets
- `@Previewable` macro for simpler previews

### iOS 26+
- Liquid Glass design system
- New translucent materials
- Modern Tab API

## Things to Avoid

1. **Force unwrapping** - Use `if let`, `guard let`, or nil coalescing
2. **AnyView** - Use `@ViewBuilder` or concrete types
3. **GeometryReader** - Try `containerRelativeFrame` first
4. **UIScreen.main.bounds** - Use proper layout APIs
5. **ObservableObject** - Use `@Observable` instead (iOS 17+)
6. **DispatchQueue.main.async** - Use `@MainActor`
7. **Hard-coded sizes** - Respect Dynamic Type
8. **UIKit colors** - Use SwiftUI colors
9. **Computed property views** - Use separate View structs
10. **Single-param onChange** - Use two-parameter version

## Security

- NEVER commit secrets, API keys, or configuration data
- Use environment variables or secure storage
- Follow App Store Review Guidelines

## Before Committing

- Run SwiftLint; fix all warnings and errors
- Ensure no force unwraps without justification
- Verify async code uses proper actors
- Check that views support Dynamic Type
- Write tests for business logic
- Add documentation comments as needed
