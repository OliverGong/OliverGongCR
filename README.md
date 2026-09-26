# OliverGongCR

Resume Studio 是面向简历交付团队的 Monorepo。**当前为 Sprint 0**：交付可运行工程骨架、技术基线与治理流水线，不包含生产业务实现、真实密钥或任何个人简历数据。

## 架构

| 模块                 | 技术                                         | 职责                                              |
| -------------------- | -------------------------------------------- | ------------------------------------------------- |
| `apps/web`           | Next.js App Router、React、TypeScript strict | 中文管理首页、状态与模块导航                      |
| `apps/server`        | Java 21、Spring Boot 模块化单体              | REST API；profile/project/agent/resume/audit 边界 |
| `apps/ai-worker`     | Spring Boot                                  | 后台 AI 作业骨架                                  |
| `apps/export-worker` | Node.js、TypeScript                          | 导出作业骨架与最小 Vitest 测试                    |
| `deploy/compose`     | Docker Compose                               | PostgreSQL、Redis、RabbitMQ、MinIO                |

Java 与 JavaScript 分别由 Maven multi-module 和 pnpm workspace 管理，Makefile 提供统一入口。依赖采用 Sprint 0 创建时的保守稳定兼容版本；Dependabot 每周检查并提出后续更新。

## 环境要求

- Node.js 22、pnpm 9
- Java 21、Maven 3.9+
- Docker Engine 与 Compose v2

## 启动

```bash
cp .env.example .env        # 仅本地使用，并修改示例口令
make install
make infra-up
mvn -pl apps/server spring-boot:run
# 新终端
pnpm --filter @resume-studio/web dev
```

访问 `http://localhost:3000`。AI Worker 可运行 `mvn -pl apps/ai-worker spring-boot:run`；导出 Worker 在 Sprint 0 只提供可编译作业处理骨架。

## 验证

```bash
make verify
curl http://localhost:8080/api/v1/system/status
curl http://localhost:8080/actuator/health
```

也可分别运行 `pnpm lint && pnpm test && pnpm build` 与 `mvn verify`。SonarQube 聚合 JS lcov 和 Java JaCoCo XML；仓库 Secrets 需配置 `SONAR_HOST_URL` 与 `SONAR_TOKEN`，流水线会等待质量门禁结果。

## 环境变量

`.env.example` 列出数据库、Redis、RabbitMQ、MinIO 与浏览器 API 地址。所有值均为开发示例；生产环境必须由受控密钥系统注入，不得提交 `.env`、令牌或真实简历数据。

## 镜像与交付

每个应用均有 Dockerfile；根 Dockerfile 默认构建 Web。`build-images.yml` 仅在 `main` 或 `v*` tag 推送时发布 GHCR 镜像。部署与回滚步骤见 `docs/operations/`。

## 当前范围与限制

Sprint 0 只验证工程结构、状态接口、首页、Worker 骨架、质量与供应链治理。身份认证、授权、数据库迁移、消息消费、AI 提供方、对象上传、真实导出和生产可观测性留待后续迭代。开发 Compose 默认口令不得用于共享或生产环境。
