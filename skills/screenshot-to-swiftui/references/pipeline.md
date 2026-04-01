# Pipeline Phân tích UI từ Screenshot

Tài liệu này hướng dẫn cách phân tích một hình ảnh UI để chuẩn bị cho việc sinh mã SwiftUI.

## Bước 1: Xác định Vùng chứa Gốc (Root Container)
- Nếu giao diện có thanh điều hướng ở trên hoặc dưới: Sử dụng `NavigationStack` hoặc `TabView`.
- Nếu nội dung dài hơn màn hình: Sử dụng `ScrollView`.
- Nếu giao diện dạng bảng: Sử dụng `List` hoặc `LazyVStack` bên trong `ScrollView`.

## Bước 2: Phân tích Phân cấp (Hierarchy Analysis)
Chia màn hình thành các khu vực chính:
1. **Header**: Navigation bar, title, profile button.
2. **Main Content**: Các card, danh sách, biểu đồ.
3. **Sticky Elements**: Floating action buttons, tab bar.

Sử dụng nguyên tắc:
- Các phần tử nằm dọc chồng lên nhau -> `VStack`.
- Các phần tử nằm ngang cạnh nhau -> `HStack`.
- Các phần tử đè lên nhau (nền, overlay) -> `ZStack` hoặc `.overlay()`, `.background()`.

## Bước 3: Đo lường Spacing & Alignment
- **Spacing**: Khoảng cách mặc định thường là 8pt, 16pt, hoặc 20pt.
- **Padding**: Kiểm tra khoảng cách từ mép màn hình (thường là 16pt hoặc 20pt).
- **Alignment**: Các phần tử căn lề trái, phải hay giữa? Dùng `alignment: .leading` hoặc `.trailing`.

## Bước 4: Trích xuất Thành phần (Component Extraction)
Dành cho mỗi phần tử:
- **Button**: Xác định label (text/icon), màu nền, độ bo góc.
- **TextField**: Xác định placeholder, border style.
- **Image**: Nếu là icon, ưu tiên dùng **SF Symbols**. Nếu là ảnh thực, dùng placeholder `Image(systemName: "photo")`.

## Bước 5: Áp dụng Liquid Glass (Tùy chọn)
Nếu ảnh có hiệu ứng mờ (blur), trong suốt, hoặc bóng mờ cao cấp:
- Sử dụng `.glassEffect()` hoặc `.background(.ultraThinMaterial)`.
- Kết hợp với màu sắc có độ trong suốt (`Color.white.opacity(0.1)`).
