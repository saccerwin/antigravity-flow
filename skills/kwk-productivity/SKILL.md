---
name: kwk-productivity
description: Quản lý công việc, lập kế hoạch ngày, và xây dựng bộ nhớ ngữ cảnh tổ chức. Đồng bộ với lịch, email, chat để sắp xếp mọi thứ. Dùng khi quản lý tasks, lên kế hoạch ngày làm việc, hoặc tra cứu thông tin nội bộ.
---

# Năng suất & Quản lý Kiến thức

> **Kỹ năng cốt lõi cho mọi phòng ban.** Quản lý công việc, lập kế hoạch ngày, và xây dựng bộ nhớ ngữ cảnh giúp AI Agent hiểu ngôn ngữ và quy trình nội bộ.

## Kỹ năng con

| Kỹ năng | Mục đích | Kích hoạt khi |
|---------|----------|---------------|
| `quản-lý-task` | Theo dõi tasks bằng TASKS.md (Đang làm, Chờ, Dự định, Hoàn thành) | "task của tôi", "việc gì đang chờ" |
| `lập-kế-hoạch-ngày` | Tạo kế hoạch ngày từ lịch + email + ưu tiên | "lên kế hoạch hôm nay", "nên tập trung gì" |
| `quản-lý-bộ-nhớ` | Xây dựng & tra cứu bộ nhớ tổ chức (người, thuật ngữ, dự án) | "ai là [tên]", "[viết tắt] nghĩa là gì" |
| `review-tuần` | Tổng hợp tuần: hoàn thành, đang làm, bị chặn | "review tuần", "tuần này làm được gì" |

## Quản lý Task

Theo dõi công việc bằng `TASKS.md` trong thư mục gốc:

```markdown
# Tasks
## Đang làm
- [ ] **Hoàn thành báo cáo Q1** - cho sếp Hùng, due 15/03
## Đang chờ
- [ ] **Feedback thiết kế** - chờ team Design, gửi 10/03
## Hoàn thành
- [x] ~~Setup môi trường staging~~ (08/03)
```

## Quản lý Bộ nhớ

Tra cứu ngữ cảnh nội bộ theo 3 tầng:

1. Kiểm tra `GEMINI.md` (hot cache) → phủ ~90% nhu cầu tra cứu
2. Tìm trong `memory/glossary.md` → bảng thuật ngữ đầy đủ
3. Kiểm tra `memory/people/`, `memory/projects/` → chi tiết chuyên sâu
4. Hỏi người dùng → thuật ngữ chưa biết, rồi lưu vào bộ nhớ

## Connector hỗ trợ

| Connector | Mục đích |
|-----------|----------|
| Google Calendar MCP | Đọc sự kiện, tìm thời gian rảnh |
| Gmail MCP | Quét inbox tìm action items |
| Slack MCP | Kiểm tra tin nhắn chưa đọc |
| Jira/Linear MCP | Đồng bộ task board bên ngoài |

## Workflow liên quan

- `/productivity-start` — Khởi tạo hệ thống: tạo TASKS.md và GEMINI.md
- `/productivity-update` — Đồng bộ tasks từ các nguồn, làm mới bộ nhớ
