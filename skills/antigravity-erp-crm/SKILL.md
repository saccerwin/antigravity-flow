---
name: antigravity-erp-crm
description: Standards for Customer Relationship Management (CRM) tailored to Vietnamese business practices and Zalo/Facebook/Email integrations.
---
# Viet-ERP CRM Standards

When designing a CRM system for Vietnamese enterprises, apply these structural pillars:

## 1. Lead & Pipeline Management
- **Localized Funnels**: Implement multiple Sales Pipelines depending on B2B or B2C models. Include stages like: Lead (Tiềm năng), Qualified (Tiếp cận), Quotation (Báo giá - BGVN), Negotiation (Đàm phán), and Contract (Hợp đồng).
- **Omnichannel Intake**: Accommodate lead capture not just by email, but crucially through **Zalo OA (Zalo Official Account)** and **Facebook Messenger** webhooks, as these are the primary channels in VN.

## 2. Customer Master Data (Hồ sơ Khách hàng 360)
- Store Mã số thuế (Tax Code) directly in the B2B Company profile. Use public Vietnam General Department of Taxation APIs to auto-fill company names and addresses based on Tax Code.
- Manage "Người liên hệ" (Contact Persons) with specific titles mapping to Vietnamese hierarchy (Giám đốc, Kế toán trưởng, Buyer).

## 3. Order to Invoice (Tích hợp Sales-Accounting)
- Sales Orders seamlessly convert to Vouchers in `Accounting`. Once a sale is closed-won, it triggers an event via NATS.
- Quotes and Invoices must format currency correctly (e.g., "1.000.000 VNĐ" - dots for thousands, commas for decimals).
