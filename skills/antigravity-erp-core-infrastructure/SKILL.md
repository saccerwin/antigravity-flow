---
name: antigravity-erp-core-infrastructure
description: Core infrastructure packages for Enterprise applications based on Viet-ERP. Includes Auth (Keycloak), Events (NATS), Meilisearch, Audit, and Metrics.
---
# Vietnam ERP Core Infrastructure

When building shared packages and microservice backbones for enterprise applications in Vietnam, rely on the following architecture:

## 1. Authentication & Security (Keycloak + CORS)
- **SSO Authentication**: Centralize user management across 14+ modules using Keycloak. Tokens must be verified via API Gateways/Middlewares.
- **Security Headers & CORS**: Implement strictly configured CORS rules tailored to multi-tenant subdomains. Inject security headers (HSTS, X-Content-Type-Options) in a dedicated `packages/security` module.

## 2. Event-Driven Architecture (NATS)
- **NATS Bus**: All inter-service communication (e.g., from CRM to Accounting) flows through NATS via publish/subscribe events instead of tight HTTP coupling.
- Real-time pushes to the frontend are handled by a `packages/notifications` module translating NATS events to WebSockets.

## 3. Audit Trails & Observability
- **Audit Logging**: Every CUD (Create/Update/Delete) action across any module must be tracked by `packages/audit`. Essential for SOX compliance and Vietnamese tax audits.
- **Metrics**: Exposed via `packages/metrics` to Prometheus (HTTP latency, query times, error rates) and visualized in Grafana.

## 4. Unified Search (Meilisearch)
- Decouple full-text search from SQL queries.
- In `packages/search`, configure listeners that push incremental database updates (Postgres/MySQL) into Meilisearch indexes.
