---
name: visual-grounding
description: Liên kết hình ảnh giao diện (UI screenshots) với mã nguồn. Sử dụng Vision AI để caption hình ảnh, bảng biểu và ánh xạ chúng vào các component SwiftUI tương ứng để đạt độ chính xác 100% trong phát triển Frontend.
skills:
  - screenshot-to-swiftui
  - ai-multimodal
---

# Visual Grounding Skill (Nexus Eye)

Kỹ năng này giúp Antigravity "nhìn" thấy kết quả thực tế của mã nguồn và đối chiếu với thiết kế mẫu.

## Quy trình làm việc

### 1. Captioning (Mô tả hình ảnh)
- Chụp ảnh màn hình ứng dụng hiện tại.
- Sử dụng Vision LLM để mô tả từng thành phần quan trọng (ví dụ: "Button màu xanh, bo góc 12pt, nằm ở góc dưới bên phải").
- Lưu caption vào metadata của component trong `CODEBASE.md`.

### 2. Page-Aware Correlation (Tương quan trang)
- Gán nhãn `page_id` và `view_hierarchy_level` cho các ảnh chụp.
- Khi người dùng yêu cầu sửa UI, tôi sẽ tìm các "Visual Assets" có cùng nhãn để hiểu trạng thái hiện tại trước khi sửa.

### 3. Visual Debugging
- Nếu UI bị lệch so với screenshot mẫu:
    1. Chụp ảnh UI hiện tại.
    2. So sánh 2 ảnh (Mẫu vs Hiện tại).
    3. Trích xuất các tham số sai lệch (màu sắc, spacing).
    4. Generate code sửa lỗi.

## Quy tắc thực thi
- LUÔN mô tả bằng văn bản những gì bạn thấy trong ảnh trước khi viết code sửa.
- Sử dụng SF Symbols làm cầu nối giữa hình ảnh và code.
