---
name: antigravity-erp-otb
description: Open To Buy (OTB) and Purchase Planning principles for retail/wholesale inventory management in Viet-ERP.
---
# Viet-ERP OTB (Kế hoạch mua hàng)

When designing purchasing and Open-To-Buy (OTB) modules for Vietnamese modern retail and distribution:

## 1. Demand Forecasting (Dự báo nhu cầu)
- Analyze historical sales data and seasonal spikes (e.g., Tết Nguyên Đán, Black Friday).
- Establish minimum safety stock levels (Tồn kho an toàn) and calculate replenishment orders autonomously.

## 2. OTB Budget Execution (Ngân sách mua)
- Segment budgets by Category / Department (Ngành hàng).
- Calculate Open To Buy: `Planned Sales + Planned Markdowns + Planned End of Month Inventory - Planned Beginning of Month Inventory`.
- Synchronize limits with the Accounting module to freeze Purchase Orders (PO) that exceed liquid budget caps.

## 3. Supplier Management (Quản lý Nhà cung cấp)
- Compare multiple quotes (Báo giá nhà cung cấp). Track lead times and delivery precision.
- Incorporate VAT logic and import tax handling for international suppliers upon receipt of goods (Phiếu nhập kho).
