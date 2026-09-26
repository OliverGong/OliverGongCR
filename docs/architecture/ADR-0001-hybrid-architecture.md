# ADR-0001：混合技术架构（Sprint 0）

- 状态：Accepted
- 日期：2026-09-26

## 决策

采用 pnpm + Maven Monorepo。Next.js 提供管理界面；Spring Boot 模块化单体承载事务型领域；Spring Boot AI Worker 隔离 AI 作业；Node.js Worker 承载文档导出。PostgreSQL、Redis、RabbitMQ、MinIO 分别用于持久化、缓存、消息与对象存储。

## 理由与后果

兼顾 Java 领域治理能力和 TypeScript 前端/导出生态。代价是双语言工具链，使用统一 Makefile、CI 与 SonarQube 缓解。
