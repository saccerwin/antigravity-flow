---
name: antigravity-erp-accounting
description: Specialized knowledge for Vietnamese Accounting Standards (VAS), Circular 200 (TT200), and E-Invoice (NĐ123) compliance. Use for any Vietnam-specific financial systems.
---
# Vietnam Accounting Standards (VAS) & Compliance

When building accounting or financial software for the Vietnamese market, adhere STRICTLY to the following compliance standards:

## 1. Hệ thống Tài khoản Kế toán (Chart of Accounts - TT200)
- Ensure exact mapping to the Circular 200 (Thông tư 200/2014/TT-BTC) Chart of Accounts (COA).
- Implement hierarchical ledger structures: Level 1 (3-digit, e.g., `111` Tiền mặt), Level 2 (4-digit, e.g., `1111` Tiền Việt Nam).
- Maintain multi-currency support natively (VND as base currency, with strict exchange rate tracking for revaluation).

## 2. Hoá đơn điện tử (E-Invoice - NĐ123)
- Integrate XML data structures complying with Nghị định 123/2020/NĐ-CP and Thông tư 78.
- Digital Signatures: Handle XML signature flows (HSM/Token) before submission to the General Department of Taxation (TCT).
- Track mandatory fields: Ký hiệu hoá đơn, Mẫu số, MST (Mã số thuế) buyer/seller without failure.

## 3. Nhật ký Chung & Báo cáo Kế toán (General Journal & Reports)
- Báo cáo Tài chính (Financial Statements) including: Bảng cân đối kế toán (Balance Sheet), Báo cáo kết quả hoạt động kinh doanh (Income Statement), Lập lưu chuyển tiền tệ (Cash Flow).
- Bổ sung Audit Trails (Dấu vết kiểm toán) không thể xóa để phục vụ thanh tra thuế.
