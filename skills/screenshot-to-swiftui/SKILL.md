---
name: screenshot-to-swiftui
description: Chuyên đọc screenshot (ảnh chụp màn hình) và chuyển đổi thành mã nguồn SwiftUI chính xác. Sử dụng Vision AI để phân tích bố cục, thành phần UI, và phong cách thiết kế, sau đó thực thi việc triển khai mã nguồn SwiftUI chuẩn hóa, bao gồm cả hiệu ứng iOS 26+ Liquid Glass nếu cần.
skills:
  - swiftui-expert-skill
  - frontend-design
---

# Screenshot to SwiftUI Skill

Kỹ năng này cho phép Antigravity phân tích hình ảnh giao diện người dùng và tự động tạo ra mã nguồn SwiftUI tương ứng với độ chính xác cao.

## Quy trình làm việc (Workflow)

### 1. Phân tích Screenshot (Analysis)
- **Nhận dạng Bố cục**: Xác định các vùng chứa chính (VStack, HStack, ZStack, List, ScrollView).
- **Phát hiện Thành phần**: Nhận diện Button, TextField, Toggle, Image, List rows, và các custom components.
- **Trích xuất Text**: Sử dụng OCR để lấy nội dung văn bản, nhận diện font style (size, weight).
- **Phân tích Màu sắc & Style**: Lấy mã màu (RGB/Hex), độ bo góc (cornerRadius), độ bóng (shadow), và độ trong suốt (opacity).

### 2. Thiết kế Cấu trúc Mã (Architecture)
- Ưu tiên tách các thành phần con thành các subviews độc lập.
- Sử dụng `@State` cho các trạng thái tương tác đơn giản.
- Áp dụng các modifier hệ thống để đảm bảo giao diện thích ứng (Responsive).

### 3. Triển khai (Implementation)
- Viết mã SwiftUI hoàn chỉnh và có khả năng chạy ngay (ready-to-run).
- Tích hợp các icon hệ thống (SF Symbols) thay cho placeholder nếu phù hợp.
- Nếu người dùng yêu cầu phong cách hiện đại, áp dụng `glassEffect` (Liquid Glass) cho các vùng chứa.

## Các Quy tắc Hiện thực

- **P0**: Mã phải sạch, dễ đọc và tuân thủ [swiftui-expert-skill](file:///Users/saccerwin/.gemini/antigravity/skills/swiftui-expert-skill/SKILL.md).
- **P1**: Đảm bảo spacing và padding khớp với screenshot tối đa (pixel-perfect).
- **P2**: Sử dụng các biến màu sắc (Color) hằng số để dễ dàng thay đổi theme.
- **P3**: Luôn cung cấp mã đầy đủ trong một file `.swift` có kèm theo `#Preview`.

## Router Chủ đề

Xem chi tiết hướng dẫn cho từng giai đoạn:

| Giai đoạn | Hướng dẫn chi tiết |
|-----------|--------------------|
| Phân tích UI | `references/pipeline.md` |
| Bản đồ Thành phần | `references/component-mapping.md` |
| Tối ưu hóa Ảnh | `references/image-processing.md` |

## Danh sách Kiểm tra (Checklist)

- [ ] Các Stack (VStack/HStack) được sử dụng đúng để tái hiện layout?
- [ ] Các Button có đầy đủ action placeholder?
- [ ] Màu sắc và Font chữ đã khớp với mẫu?
- [ ] Các phần tử tương tác đã được gán `@State`?
- [ ] Đã kiểm tra khả năng hiển thị trên các kích thước màn hình khác nhau (iPhone/iPad)?
- [ ] Đã thêm `#Preview` để người dùng xem trước?
