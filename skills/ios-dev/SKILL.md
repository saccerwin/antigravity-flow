---
name: ios-dev
description: iOS development skill for Swift, SwiftUI, Live Activities, WidgetKit, and XCTest. Use when implementing iOS features.
---

# iOS Development Skill

Platform-specific knowledge for iOS development.

## Tech Stack

| Component | Technology |
|-----------|------------|
| Language | Swift 5.9+ |
| UI Framework | SwiftUI |
| Architecture | MVVM or TCA (follow project) |
| Testing | XCTest, XCUITest |
| Live Activities | ActivityKit |
| Widgets | WidgetKit |

## Coding Standards

### Naming
- Variables/Functions: `lowerCamelCase`
- Types/Protocols: `UpperCamelCase`
- Constants: `lowerCamelCase` (not SCREAMING_CASE)
- Language: English

### File Organization
```swift
// 1. Imports
import SwiftUI
import ActivityKit

// 2. Types (protocol, struct, class, enum)
struct ContentView: View {
    // 3. Properties (static, @State, let, var)
    // 4. Initializer
    // 5. Body / Methods
}

// 6. Extensions
extension ContentView {
    // ...
}

// 7. Previews
#Preview {
    ContentView()
}
```

### SwiftUI Patterns
```swift
// Prefer small, composable views
struct FeatureView: View {
    @StateObject private var viewModel = FeatureViewModel()

    var body: some View {
        VStack {
            HeaderSection(title: viewModel.title)
            ContentSection(items: viewModel.items)
        }
        .task {
            await viewModel.load()
        }
    }
}
```

### Comments
- Japanese OK for complex logic
- Avoid obvious comments
- Use `// MARK: -` for sections

## Build Commands

```bash
# Build
xcodebuild -scheme <Scheme> -destination 'generic/platform=iOS' build

# Test
xcodebuild test \
  -scheme <Scheme> \
  -destination 'platform=iOS Simulator,name=iPhone 15'

# Clean
xcodebuild clean -scheme <Scheme>
```

## Live Activities

### Setup Checklist
- [ ] Add `NSSupportsLiveActivities` to Info.plist
- [ ] Create ActivityAttributes struct
- [ ] Create ActivityContent struct
- [ ] Implement start/update/end logic

### Basic Pattern
```swift
struct MyActivityAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var value: String
    }
    var name: String
}

// Start
let attributes = MyActivityAttributes(name: "Example")
let state = MyActivityAttributes.ContentState(value: "Initial")
let activity = try Activity.request(
    attributes: attributes,
    content: .init(state: state, staleDate: nil)
)

// Update
await activity.update(
    ActivityContent(state: newState, staleDate: nil)
)

// End
await activity.end(nil, dismissalPolicy: .immediate)
```

## WidgetKit

### Setup Checklist
- [ ] Add Widget Extension target
- [ ] Configure App Groups for data sharing
- [ ] Implement TimelineProvider
- [ ] Create Widget views

### Data Sharing
```swift
// Write (main app)
let defaults = UserDefaults(suiteName: "group.com.example.app")
defaults?.set(value, forKey: "sharedKey")
WidgetCenter.shared.reloadAllTimelines()

// Read (widget)
let defaults = UserDefaults(suiteName: "group.com.example.app")
let value = defaults?.string(forKey: "sharedKey")
```

## Testing

### Unit Test Pattern
```swift
final class FeatureTests: XCTestCase {
    var sut: FeatureViewModel!

    override func setUp() {
        super.setUp()
        sut = FeatureViewModel()
    }

    override func tearDown() {
        sut = nil
        super.tearDown()
    }

    func test_initialState_isEmpty() {
        XCTAssertTrue(sut.items.isEmpty)
    }

    func test_load_populatesItems() async {
        await sut.load()
        XCTAssertFalse(sut.items.isEmpty)
    }
}
```

## Common Issues

### "Signing requires a development team"
- Open Xcode, select target, set Team in Signing & Capabilities

### "No such module"
- Clean build folder: `xcodebuild clean`
- Check Swift Package dependencies

### Widget not updating
- Call `WidgetCenter.shared.reloadAllTimelines()`
- Check App Groups configuration
