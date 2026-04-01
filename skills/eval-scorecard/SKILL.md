---
name: eval-scorecard
description: Hệ thống tự đánh giá năng lực Agent. Buộc Agent phải tự chấm điểm dựa trên 7 tiêu chí (Context, Accuracy, Safety, Debug, Tool Use, Speed, Communication) trước khi hoàn thành task.
---

# 📊 Agent Self-Evaluation Scorecard

Sau mỗi task quan trọng hoặc ticket, Agent PHẢI tự chấm điểm dựa trên bộ tiêu chí sau:

## 1. Context Understanding (20%) - [Score: 1-5]
- Đọc đúng module liên quan?
- Hiểu dependency & data flow?

## 2. Task Completion Accuracy (25%) - [Score: 1-5]
- Output đúng spec?
- Có thiếu acceptance criteria nào không?

## 3. Code Correctness & Safety (20%) - [Score: 1-5]
- Compile pass? Edge cases ổn?
- (iOS) Concurrency/State flow/Memory leak?

## 4. Debug & Problem Solving (15%) - [Score: 1-5]
- Phân biệt symptom vs root cause?
- Đọc log/stack trace chuẩn?

## 5. Tool Use Reliability (10%) - [Score: 1-5]
- Search đúng file? Edit đúng vùng?
- Biết giới hạn bản thân (không overwrite bừa)?

## 6. Speed & Iteration Efficiency (5%) - [Score: 1-5]
- Số vòng lặp để ra bản ổn?
- Tối ưu thời gian gõ code?

## 7. Communication Quality (5%) - [Score: 1-5]
- Giải thích risk/assumption rõ ràng?
- Plan ngắn gọn, dễ đọc?

---

### 📝 Công thức:
**Final Score = (C * 0.20) + (A * 0.25) + (S * 0.20) + (D * 0.15) + (T * 0.10) + (V * 0.05) + (Q * 0.05)**

### ⚖️ Quy định:
- Nếu **Final Score < 4.0**: Agent PHẢI tự rà soát lại và sửa đổi trước khi bàn giao.
- Lưu kết quả vào `.agent/memory/sessions/evaluation_history.md`.
