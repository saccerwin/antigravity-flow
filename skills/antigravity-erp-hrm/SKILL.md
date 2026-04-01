---
name: antigravity-erp-hrm
description: Human Resource Management (HRM) specifically localized for Vietnam Labor Law, Social Insurance, and Personal Income Tax (PIT).
---
# Vietnam HRM & Payroll Compliance

When building HR and Payroll features for Vietnam, enforce the following legal models:

## 1. Chế độ Bảo hiểm Bắt buộc (Social Insurance)
- BHXH (Social Insurance) - 8% (Employee) / 17.5% (Employer).
- BHYT (Health Insurance) - 1.5% (Employee) / 3% (Employer).
- BHTN (Unemployment) - 1% (Employee) / 1% (Employer).
- Biến động theo "Mức lương cơ sở" (Base Salary) và "Mức lương tối thiểu vùng" (Regional Minimum Wage). Ensure these are configurable constants rather than hardcoded values.

## 2. Thuế Thu nhập Cá nhân (PIT - Hợp đồng lao động)
- Áp dụng biểu thuế lũy tiến từng phần (Progressive Tax Brackets) theo Thông tư 111/2013/TT-BTC.
- Track Giảm trừ gia cảnh (Family Deductions): Bản thân (Personal deduction 11M VND), Người phụ thuộc (Dependents 4.4M VND).

## 3. Công & Ca (Time & Attendance)
- Chuẩn hóa quản lý OT (Overtime): 150% (Weekday), 200% (Weekend), 300% (Holidays/Night shifts).
- Nghỉ phép năm (Annual Leave): 12 ngày/năm (standard), tích lũy +1 ngày mỗi 5 năm thâm niên.
- Nghỉ chế độ (Maternity, Sick Leave). Ensure mapping to Vietnam labor code.
