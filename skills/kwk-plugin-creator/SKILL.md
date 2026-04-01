---
name: kwk-plugin-creator
description: Tạo, tùy chỉnh, và quản lý AI agent skills và workflows. Cấu hình MCP servers, điều chỉnh hành vi, và thích ứng templates cho phù hợp công cụ và quy trình của team.
---

# Kỹ năng Tạo Plugin (Skill Creator)

> **Dành cho AI Engineers, DevOps và bất kỳ ai muốn mở rộng hệ thống.** Tạo skills mới, tùy chỉnh workflows, và quản lý connectors.

## Kỹ năng con

| Kỹ năng | Mục đích | Kích hoạt khi |
|---------|----------|---------------|
| `tạo-skill` | Tạo skill mới theo chuẩn Antigravity | "tạo skill cho", "skill mới" |
| `tạo-workflow` | Tạo workflow mới với slash command | "tạo workflow", "workflow mới" |
| `cấu-hình-connector` | Thiết lập MCP server connectors | "kết nối với [tool]", "setup MCP" |
| `tùy-chỉnh-hành-vi` | Điều chỉnh trigger conditions và responses | "tùy chỉnh skill", "thay đổi hành vi" |

## Cấu trúc Skill chuẩn Antigravity

```
.agents/skills/
└── tên-skill/
    ├── SKILL.md          ← File chính (< 150 dòng, BẮT BUỘC)
    │   ├── YAML frontmatter (name, description)
    │   └── Nội dung hướng dẫn chính
    ├── references/       ← Tài liệu chi tiết (< 150 dòng/file)
    └── scripts/          ← Script tiện ích
```

## Cấu trúc Workflow

```
.agents/workflows/
└── tên-workflow.md
    ├── YAML frontmatter (description)
    └── Hướng dẫn từng bước
```

## Nguyên tắc thiết kế

| Nguyên tắc | Giải thích |
|------------|------------|
| **< 150 dòng** | SKILL.md phải gọn, references chứa chi tiết |
| **Trigger rõ ràng** | Mỗi skill cần trigger conditions cụ thể |
| **Progressive Disclosure** | Tier 1 (SKILL.md) → Tier 2 (references) → Tier 3 (scripts) |
| **Standalone hoạt động** | Skill phải dùng được khi không có connector |
