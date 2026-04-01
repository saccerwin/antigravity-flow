---
name: antigravity-erp-mrp
description: Manufacturing Resource Planning (MRP) rules for inventory, BOM, and production in Viet-ERP architecture.
---
# Viet-ERP MRP (Sản Xuất) Standards

When building Manufacturing Resource Planning modules:

## 1. Bill of Materials (BOM - Định mức nguyên vật liệu)
- Support multi-level BOMs. Allow tracking "Hao hụt" (Scrap/Shrinkage percentage) in the production recipe.
- Tie directly to Vietnamese Warehousing (Kho) semantics for Raw Materials (NVL), Work in Progress (BTP), and Finished Goods (TP).

## 2. Production Planning (Kế hoạch sản xuất)
- Master Production Schedule (MPS) generating Work Orders (Lệnh sản xuất).
- Include Work Centers (Tổ máy / Dây chuyền) and Routings (Quy trình sản xuất) tracking standard cycle times.

## 3. TPM (Total Productive Maintenance)
- Pre-integrate predictive maintenance scheduling to prevent line downtime.
- Collect machine telemetry (IoT) via backend events or edge APIs to flag required maintenance before producing scrap.
