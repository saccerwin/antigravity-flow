# Tối ưu hóa xử lý ảnh Vision

Hướng dẫn cách chuẩn bị và xử lý screenshot để AI có thể đọc tốt nhất.

## Yêu cầu đầu vào
- **Độ phân giải**: Tối thiểu 1080p. Ảnh quá nhỏ sẽ làm mất chi tiết text và icon.
- **Định dạng**: PNG là tốt nhất (không nén mất dữ liệu như JPEG).
- **Trạng thái**: Không nên có các thông báo hệ thống (Status bar, Low battery) đè lên vùng cần thiết kế.

## Quy trình Tiền xử lý (Pre-processing)
1. **Denoising**: Nếu ảnh bị nhiễu, AI sẽ khó nhận dạng cạnh.
2. **Contrast Enhancement**: Tăng độ tương phản giúp tách biệt giữa nền (background) và các control (nút, input).
3. **OCR Layering**: Luôn chạy `VNRecognizeTextRequest` trước để xác định các tọa độ chữ, từ đó suy đoán ra các control đi kèm.

## Xử lý Symbol (SF Symbols Detection)
AI sẽ cố gắng map hình dạng icon trong ảnh với kho thư viện SF Symbols.
- Nếu icon là hình cái kính lúp -> `magnifyingglass`.
- Nếu là mũi tên quay lại -> `chevron.left`.
- Nếu không tìm thấy symbol khớp tuyệt đối, AI sẽ tạo một `Circle()` hoặc `Rectangle()` với kích thước tương ứng và yêu cầu người dùng thay thế thủ công.

## Gợi ý cho người dùng
- Khi gửi ảnh, hãy cho biết phiên bản iOS mục tiêu (ví dụ: iOS 17, 18, hoặc 26).
- Nếu có hiệu ứng động (animations), hãy cung cấp mô tả văn bản đi kèm.
