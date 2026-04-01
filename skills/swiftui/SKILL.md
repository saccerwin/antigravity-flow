---
name: "SwiftUI"
description: "SwiftUI patterns, view composition, styling, and reusable UI elements"
---

# SwiftUI

You are a SwiftUI expert. Apply these patterns when building views and components.

## Component Design Principles

### Single Responsibility
Each component should do one thing well. Split complex views into smaller, focused components.

### Configurable via Initializer
Expose configuration through init parameters, not environment or external state.

### Preview-Friendly
Components should be easily previewable in isolation with sensible defaults.

### Trailing Closure Style

**Always prefer trailing closure syntax** for better readability and consistency:

```swift
// Preferred: trailing closures
Button {
    saveDocument()
} label: {
    Label("Save", systemImage: "square.and.arrow.down")
}

Section {
    TextField("Name", text: $name)
    TextField("Email", text: $email)
} header: {
    Text("Contact Info")
} footer: {
    Text("We'll never share your email")
}

NavigationLink {
    DetailView(item: item)
} label: {
    ItemRow(item: item)
}

// Avoid: inline style
Button("Save") { saveDocument() }
Section("Header") { content }
NavigationLink("Details", destination: DetailView())
```

## View Composition

### Container Components

```swift
struct Card<Content: View>: View {
    let content: Content

    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }

    var body: some View {
        content
            .padding()
            .background(.background.secondary)
            .clipShape(RoundedRectangle(cornerRadius: 12))
            .shadow(color: .black.opacity(0.1), radius: 4, y: 2)
    }
}

// Usage
Card {
    VStack {
        Text("Title")
        Text("Subtitle")
    }
}
```

### Slot-Based Components

```swift
struct ListRow<Leading: View, Trailing: View>: View {
    let title: String
    let leading: Leading
    let trailing: Trailing

    init(
        title: String,
        @ViewBuilder leading: () -> Leading = { EmptyView() },
        @ViewBuilder trailing: () -> Trailing = { EmptyView() }
    ) {
        self.title = title
        self.leading = leading()
        self.trailing = trailing()
    }

    var body: some View {
        HStack {
            leading
            Text(title)
            Spacer()
            trailing
        }
    }
}

// Usage
ListRow(title: "Settings") {
    Image(systemName: "gear")
} trailing: {
    Image(systemName: "chevron.right")
}
```

## Common Patterns

### Loading States

```swift
struct AsyncContent<Content: View, Placeholder: View>: View {
    let isLoading: Bool
    let content: Content
    let placeholder: Placeholder

    init(
        isLoading: Bool,
        @ViewBuilder content: () -> Content,
        @ViewBuilder placeholder: () -> Placeholder = { ProgressView() }
    ) {
        self.isLoading = isLoading
        self.content = content()
        self.placeholder = placeholder()
    }

    var body: some View {
        if isLoading {
            placeholder
        } else {
            content
        }
    }
}
```

### Empty States

```swift
struct EmptyState: View {
    let icon: String
    let title: String
    let message: String
    var action: (() -> Void)?
    var actionTitle: String?

    var body: some View {
        ContentUnavailableView {
            Label(title, systemImage: icon)
        } description: {
            Text(message)
        } actions: {
            if let action, let actionTitle {
                Button(actionTitle, action: action)
                    .buttonStyle(.borderedProminent)
            }
        }
    }
}

// Usage
EmptyState(
    icon: "doc.text",
    title: "No Documents",
    message: "Create your first document to get started",
    action: { createDocument() },
    actionTitle: "Create Document"
)
```

### Error States

```swift
struct ErrorView: View {
    let error: Error
    let retry: (() -> Void)?

    var body: some View {
        ContentUnavailableView {
            Label("Something went wrong", systemImage: "exclamationmark.triangle")
        } description: {
            Text(error.localizedDescription)
        } actions: {
            if let retry {
                Button("Try Again", action: retry)
                    .buttonStyle(.bordered)
            }
        }
    }
}
```

## Form Components

### Validated Text Field

```swift
struct ValidatedField: View {
    let title: String
    @Binding var text: String
    let validation: (String) -> String?

    @State private var error: String?
    @FocusState private var isFocused: Bool

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            TextField(title, text: $text)
                .focused($isFocused)
                .onChange(of: isFocused) { _, focused in
                    if !focused {
                        error = validation(text)
                    }
                }

            if let error {
                Text(error)
                    .font(.caption)
                    .foregroundStyle(.red)
            }
        }
    }
}

// Usage
ValidatedField(title: "Email", text: $email) { value in
    value.contains("@") ? nil : "Invalid email"
}
```

### Option Picker

```swift
struct OptionPicker<T: Hashable>: View {
    let options: [T]
    @Binding var selection: T
    let label: (T) -> String

    var body: some View {
        HStack(spacing: 8) {
            ForEach(options, id: \.self) { option in
                Button {
                    selection = option
                } label: {
                    Text(label(option))
                        .padding(.horizontal, 16)
                        .padding(.vertical, 8)
                        .background(selection == option ? Color.accentColor : Color.secondary.opacity(0.2))
                        .foregroundStyle(selection == option ? .white : .primary)
                        .clipShape(Capsule())
                }
                .buttonStyle(.plain)
            }
        }
    }
}
```

## Interactive Components

### Swipe Actions

```swift
struct SwipeableRow<Content: View>: View {
    let content: Content
    let onDelete: () -> Void
    let onArchive: (() -> Void)?

    init(
        @ViewBuilder content: () -> Content,
        onDelete: @escaping () -> Void,
        onArchive: (() -> Void)? = nil
    ) {
        self.content = content()
        self.onDelete = onDelete
        self.onArchive = onArchive
    }

    var body: some View {
        content
            .swipeActions(edge: .trailing) {
                Button(role: .destructive, action: onDelete) {
                    Label("Delete", systemImage: "trash")
                }

                if let onArchive {
                    Button(action: onArchive) {
                        Label("Archive", systemImage: "archivebox")
                    }
                    .tint(.orange)
                }
            }
    }
}
```

### Expandable Section

```swift
struct ExpandableSection<Content: View>: View {
    let title: String
    let content: Content
    @State private var isExpanded = false

    init(title: String, @ViewBuilder content: () -> Content) {
        self.title = title
        self.content = content()
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Button {
                withAnimation(.snappy) {
                    isExpanded.toggle()
                }
            } label: {
                HStack {
                    Text(title)
                        .font(.headline)
                    Spacer()
                    Image(systemName: "chevron.right")
                        .rotationEffect(.degrees(isExpanded ? 90 : 0))
                }
                .contentShape(Rectangle())
            }
            .buttonStyle(.plain)

            if isExpanded {
                content
                    .padding(.top, 12)
            }
        }
    }
}
```

## Data Display

### Stat Card

```swift
struct StatCard: View {
    let title: String
    let value: String
    let trend: Trend?
    let icon: String?

    enum Trend {
        case up(String)
        case down(String)
        case neutral
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text(title)
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
                Spacer()
                if let icon {
                    Image(systemName: icon)
                        .foregroundStyle(.secondary)
                }
            }

            Text(value)
                .font(.title)
                .fontWeight(.semibold)

            if let trend {
                trendView(trend)
            }
        }
        .padding()
        .background(.background.secondary)
        .clipShape(RoundedRectangle(cornerRadius: 12))
    }

    @ViewBuilder
    private func trendView(_ trend: Trend) -> some View {
        switch trend {
        case .up(let value):
            Label(value, systemImage: "arrow.up")
                .font(.caption)
                .foregroundStyle(.green)
        case .down(let value):
            Label(value, systemImage: "arrow.down")
                .font(.caption)
                .foregroundStyle(.red)
        case .neutral:
            EmptyView()
        }
    }
}
```

### Avatar

```swift
struct Avatar: View {
    let name: String
    let imageURL: URL?
    let size: CGFloat

    init(name: String, imageURL: URL? = nil, size: CGFloat = 40) {
        self.name = name
        self.imageURL = imageURL
        self.size = size
    }

    var body: some View {
        Group {
            if let imageURL {
                AsyncImage(url: imageURL) { image in
                    image.resizable().scaledToFill()
                } placeholder: {
                    initialsView
                }
            } else {
                initialsView
            }
        }
        .frame(width: size, height: size)
        .clipShape(Circle())
    }

    private var initialsView: some View {
        Text(initials)
            .font(.system(size: size * 0.4, weight: .medium))
            .foregroundStyle(.white)
            .frame(width: size, height: size)
            .background(color)
    }

    private var initials: String {
        name.split(separator: " ")
            .prefix(2)
            .compactMap { $0.first }
            .map(String.init)
            .joined()
            .uppercased()
    }

    private var color: Color {
        let colors: [Color] = [.blue, .purple, .orange, .green, .pink]
        let index = abs(name.hashValue) % colors.count
        return colors[index]
    }
}
```

## Layout Components

### Adaptive Grid

```swift
struct AdaptiveGrid<Content: View, Item: Identifiable>: View {
    let items: [Item]
    let minWidth: CGFloat
    let spacing: CGFloat
    let content: (Item) -> Content

    init(
        items: [Item],
        minWidth: CGFloat = 150,
        spacing: CGFloat = 16,
        @ViewBuilder content: @escaping (Item) -> Content
    ) {
        self.items = items
        self.minWidth = minWidth
        self.spacing = spacing
        self.content = content
    }

    var body: some View {
        LazyVGrid(
            columns: [GridItem(.adaptive(minimum: minWidth), spacing: spacing)],
            spacing: spacing
        ) {
            ForEach(items) { item in
                content(item)
            }
        }
    }
}
```

### Aspect Ratio Container

```swift
struct AspectRatioContainer<Content: View>: View {
    let aspectRatio: CGFloat
    let content: Content

    init(
        _ aspectRatio: CGFloat = 1,
        @ViewBuilder content: () -> Content
    ) {
        self.aspectRatio = aspectRatio
        self.content = content()
    }

    var body: some View {
        GeometryReader { geometry in
            content
                .frame(
                    width: geometry.size.width,
                    height: geometry.size.width / aspectRatio
                )
        }
        .aspectRatio(aspectRatio, contentMode: .fit)
    }
}
```

## Animation Components

### Shimmer Loading

```swift
struct ShimmerView: View {
    @State private var phase: CGFloat = 0

    var body: some View {
        LinearGradient(
            colors: [
                .gray.opacity(0.3),
                .gray.opacity(0.1),
                .gray.opacity(0.3)
            ],
            startPoint: .leading,
            endPoint: .trailing
        )
        .mask(Rectangle())
        .offset(x: phase)
        .onAppear {
            withAnimation(.linear(duration: 1.5).repeatForever(autoreverses: false)) {
                phase = 200
            }
        }
    }
}

struct ShimmerModifier: ViewModifier {
    let isLoading: Bool

    func body(content: Content) -> some View {
        if isLoading {
            content.redacted(reason: .placeholder)
                .overlay(ShimmerView())
        } else {
            content
        }
    }
}

extension View {
    func shimmer(isLoading: Bool) -> some View {
        modifier(ShimmerModifier(isLoading: isLoading))
    }
}
```

### Pulse Animation

```swift
struct PulseView: View {
    @State private var isPulsing = false

    var body: some View {
        Circle()
            .fill(.blue)
            .frame(width: 20, height: 20)
            .overlay(
                Circle()
                    .stroke(.blue, lineWidth: 2)
                    .scaleEffect(isPulsing ? 2 : 1)
                    .opacity(isPulsing ? 0 : 1)
            )
            .onAppear {
                withAnimation(.easeOut(duration: 1).repeatForever(autoreverses: false)) {
                    isPulsing = true
                }
            }
    }
}
```

## Accessibility

### Always Include

```swift
struct AccessibleButton: View {
    let title: String
    let icon: String
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Label(title, systemImage: icon)
        }
        .accessibilityLabel(title)
        .accessibilityHint("Double tap to \(title.lowercased())")
    }
}
```

### Dynamic Type Support

```swift
struct AdaptiveStack<Content: View>: View {
    @Environment(\.dynamicTypeSize) var dynamicTypeSize
    let content: Content

    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }

    var body: some View {
        if dynamicTypeSize >= .accessibility1 {
            VStack(alignment: .leading, content: { content })
        } else {
            HStack(content: { content })
        }
    }
}
```

## Preview Organization

```swift
#Preview("Default") {
    Avatar(name: "John Doe")
}

#Preview("With Image") {
    Avatar(name: "Jane Smith", imageURL: URL(string: "https://example.com/avatar.jpg"))
}

#Preview("Large") {
    Avatar(name: "Bob Wilson", size: 80)
}

#Preview("Grid") {
    LazyVGrid(columns: [GridItem(.adaptive(minimum: 60))]) {
        ForEach(["Alice", "Bob", "Charlie", "Diana"], id: \.self) { name in
            Avatar(name: name)
        }
    }
    .padding()
}
```

## Colors and Styling

### Hierarchical Colors

SwiftUI provides semantic foreground styles that automatically adapt to context:

```swift
VStack(alignment: .leading) {
    Text("Primary text")
        .foregroundStyle(.primary)      // Full opacity, main content

    Text("Secondary text")
        .foregroundStyle(.secondary)    // Reduced opacity, supporting content

    Text("Tertiary text")
        .foregroundStyle(.tertiary)     // Further reduced, less important

    Text("Quaternary text")
        .foregroundStyle(.quaternary)   // Very subtle, decorative

    Text("Quinary text")
        .foregroundStyle(.quinary)      // Minimum visibility (iOS 17+)
}
```

**Use cases:**
- `.primary` - Titles, main content, important information
- `.secondary` - Subtitles, captions, supporting details
- `.tertiary` - Placeholders, hints, timestamps
- `.quaternary` - Dividers, subtle backgrounds
- `.quinary` - Decorative elements, barely visible accents

### Hierarchical SF Symbols

```swift
// Automatic hierarchical rendering
Image(systemName: "square.stack.3d.up.fill")
    .symbolRenderingMode(.hierarchical)
    .foregroundStyle(.blue)

// Custom layer colors
Image(systemName: "person.crop.circle.badge.checkmark")
    .symbolRenderingMode(.palette)
    .foregroundStyle(.primary, .green)
```

### Color Gradients

Apply gradients directly to colors for smooth visual effects:

```swift
// Gradient on foreground
Text("Gradient Text")
    .font(.largeTitle)
    .foregroundStyle(.blue.gradient)

// Gradient on shapes
Circle()
    .fill(.orange.gradient)

RoundedRectangle(cornerRadius: 12)
    .fill(.purple.gradient)

// Gradient on backgrounds
Text("Card")
    .padding()
    .background(.indigo.gradient)
```

### Custom Gradients

```swift
// Linear gradient
LinearGradient(
    colors: [.blue, .purple],
    startPoint: .topLeading,
    endPoint: .bottomTrailing
)

// Radial gradient
RadialGradient(
    colors: [.white, .blue],
    center: .center,
    startRadius: 0,
    endRadius: 100
)

// Angular gradient
AngularGradient(
    colors: [.red, .yellow, .green, .blue, .purple, .red],
    center: .center
)

// Mesh gradient (iOS 18+)
MeshGradient(
    width: 3,
    height: 3,
    points: [
        [0, 0], [0.5, 0], [1, 0],
        [0, 0.5], [0.5, 0.5], [1, 0.5],
        [0, 1], [0.5, 1], [1, 1]
    ],
    colors: [
        .red, .orange, .yellow,
        .green, .blue, .purple,
        .pink, .mint, .cyan
    ]
)
```

### Background Materials

```swift
Text("Blurred background")
    .padding()
    .background(.ultraThinMaterial)
    .clipShape(RoundedRectangle(cornerRadius: 12))

// Material options:
// .ultraThinMaterial - Most transparent
// .thinMaterial
// .regularMaterial
// .thickMaterial
// .ultraThickMaterial - Most opaque
// .bar - Navigation/tab bar style
```

### Shadow Styles

```swift
// Drop shadow
Text("Shadowed")
    .shadow(color: .black.opacity(0.2), radius: 4, x: 0, y: 2)

// Inner shadow (using overlay)
RoundedRectangle(cornerRadius: 12)
    .fill(.white)
    .overlay {
        RoundedRectangle(cornerRadius: 12)
            .stroke(.black.opacity(0.1), lineWidth: 1)
    }
```

## Best Practices

1. **Use @ViewBuilder** for flexible content composition
2. **Provide sensible defaults** for optional parameters
3. **Support Dynamic Type** and accessibility
4. **Keep components focused** - one responsibility per component
5. **Use semantic colors** (.primary, .secondary, .tertiary, .quaternary)
6. **Use .gradient** on colors for subtle depth
7. **Test with previews** in various configurations
8. **Document complex components** with usage examples
