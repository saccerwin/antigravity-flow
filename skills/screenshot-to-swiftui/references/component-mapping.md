# Bản đồ Thành phần UI (Visual-to-SwiftUI Mapping)

Bảng dưới đây liệt kê cách chuyển đổi các dấu hiệu hình ảnh thành mã nguồn SwiftUI tương ứng.

| Dấu hiệu hình ảnh | SwiftUI Component / Modifier | Lưu ý |
|-------------------|-----------------------------|-------|
| Khung bo góc có nền mờ | `.background(.ultraThinMaterial)` | Thường dùng cho Card hoặc Toolbar |
| Chữ to, đậm ở trên cùng | `Text(content).font(.largeTitle).bold()` | Title chính |
| Các hàng có vạch phân cách | `List { ... }` hoặc `Divider()` | Tùy vào độ phức tạp |
| Công tắc bật/tắt | `Toggle(isOn: $state) { ... }` | Thường nằm trong List row |
| Các thẻ xếp cạnh nhau | `HStack`, `LazyHGrid` | Responsive layout |
| Nút bấm có màu nổi bật | `Button { ... } label: { ... }.buttonStyle(.borderedProminent)` | Action chính |
| Biểu đồ (Cột, Đường) | `import Charts` -> `Chart { ... }` | Xem [swift-charts](file:///Users/saccerwin/.gemini/antigravity/skills/swift-charts/SKILL.md) |
| Bóng đổ mềm | `.shadow(color: .black.opacity(0.1), radius: 10, x: 0, y: 5)` | Hiệu ứng chiều sâu |
| Icon hình răng cưa, chuông | `Image(systemName: "gearshape")`, `Image(systemName: "bell")` | Luôn dùng SF Symbols |

## Quy ước màu sắc (Color Conventions)

Khi đọc screenshot, nếu không có HEX cụ thể, ưu tiên dùng các màu hệ thống (Semantic Colors) để hỗ trợ Dark Mode tự động:
- `Color.primary` / `Color.secondary`
- `Color.accentColor`
- `Color(uiColor: .systemBackground)`

## Xử lý Custom Components

Nếu bắt gặp một thành phần không có trong hệ thống (ví dụ: một thẻ (card) tập luyện đặc biệt):
1. **Phân tích layout**: VStack cho nội dung gộp, HStack cho icon đi kèm label.
2. **Triển khai**: Tạo một `struct CustomComponentView: View` riêng để mã nguồn tinh gọn.
