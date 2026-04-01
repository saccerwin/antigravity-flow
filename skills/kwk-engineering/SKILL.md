---
name: kwk-engineering
description: Tối ưu quy trình kỹ thuật - standup, code review, quyết định kiến trúc, xử lý sự cố, và tài liệu kỹ thuật. Dùng khi cần standup summary, review code, hoặc xử lý incident production.
---

# Kỹ năng Kỹ thuật (Engineering)

> **Dành cho Software Engineers, DevOps, QA Engineers và Technical Leads.** Tối ưu quy trình kỹ thuật: standups, code review, quyết định kiến trúc, xử lý sự cố, và tài liệu kỹ thuật.

## Kỹ năng con

| Kỹ năng | Mục đích | Kích hoạt khi |
|---------|----------|---------------|
| `standup` | Tóm tắt standup từ commits, PRs, tickets | "standup hôm nay", "tóm tắt tiến độ" |
| `code-review` | Review code với checklist chất lượng | "review đoạn code này", "kiểm tra PR" |
| `kiến-trúc` | Đánh giá kiến trúc, ADR, so sánh phương án | "quyết định kiến trúc", "so sánh 2 cách" |
| `debug` | Phân tích lỗi có hệ thống, root cause analysis | "debug lỗi này", "tìm nguyên nhân" |
| `xử-lý-sự-cố` | Incident response: phân loại, hành động, thông báo | "API đang lỗi 503", "production incident" |
| `deploy-checklist` | Checklist triển khai trước khi lên production | "checklist deploy", "chuẩn bị release" |

## Ví dụ sử dụng

**Production incident:**
```
1. "API gateway đang trả 503, khách hàng đang bị ảnh hưởng"
   → Agent phân loại severity, đề xuất hành động ngay, soạn thông báo cho stakeholders

2. "Viết postmortem cho sự cố này"
   → Agent tạo tài liệu: timeline, root cause, impact, action items
```

## Workflow liên quan

- `/engineering-standup` — Tóm tắt standup tự động từ git/tickets
- `/engineering-review` — Code review có cấu trúc
- `/engineering-architecture` — Đánh giá kiến trúc và ADR
- `/engineering-debug` — Phân tích lỗi có hệ thống
- `/engineering-incident` — Quy trình xử lý sự cố production
- `/engineering-deploy-checklist` — Checklist triển khai production
