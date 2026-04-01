---
name: antigravity-erp-architecture
description: Enterprise-scale architecture framework referencing the Viet-ERP codebase. Monorepo (Turborepo), Event-Driven (NATS), Observability.
---
# Viet-ERP Enterprise Architecture Guide

When asked to design a scalable ERP system or microservices architecture inspired by Viet-ERP, follow this structural blueprint:

## 1. Monorepo Strategy (Turborepo)
- **`apps/`**: Applications organized per domain (Accounting, CRM, HRM, MRP).
- **`packages/`**: Highly reusable internal packages: 
  - `auth`: Unified Keycloak / SSO logic.
  - `events`: NATS publishing/subscribing interfaces.
  - `metrics`: Standardized Prometheus tracking.
  - `vietnam`: Country-specific rules and constants.

## 2. Event-Driven Backbone (Microservices)
- Use **NATS** as the central high-performance message bus.
- Decouple modules: E.g., when `HRM` creates an employee, fire a `UserCreated` event. `Accounting` picks this up to map payroll ledgers asynchronously.
- Use WebSocket for real-time notifications pushed to clients via an independent `notifications` package.

## 3. Observability & Deployment
- Embed **Prometheus + Grafana** for multi-app metric querying (Latency, Drop Rate, DB Queries).
- Rely on **Loki** for raw container log aggregations.
- Deployment via **Docker Compose** for dev/staging and **Helm Charts** + Kubernetes for production cloud (AWS/GCP/Azure).

## 4. Search Functionality
- Unified, cross-module fast-search via **Meilisearch**. Sync relational DB (Postgres/MySQL) triggers into Meilisearch indexes via NATS events.
