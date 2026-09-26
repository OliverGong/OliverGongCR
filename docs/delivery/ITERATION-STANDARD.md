# 迭代与 GitHub 治理标准

## 目标

所有需求、设计、代码、质量证据和发布记录都通过 GitHub 可追溯；LLM 生成代码与人工代码执行同一标准。

## 两周 Sprint 流程

```text
Backlog Refinement → Planning → Design Review → Development
→ Pull Request → Staging Acceptance → Release → Retrospective
```

## GitHub 对象

- Epic：Milestone + Epic Issue。
- Story/Task/Bug：Issue，必须包含目标、范围、验收标准、风险、测试和文档影响。
- 技术决策：`docs/architecture/ADR-*.md`。
- 代码评审：Pull Request，必须关联 Issue。
- 发布：SemVer Tag + GitHub Release。
- 看板：GitHub Projects，禁止维护第二套状态源。

## Definition of Ready

Issue 进入 Sprint 前必须满足：目标与价值明确、范围清晰、验收标准可测试、API/数据/权限/LLM 影响已识别、依赖与风险明确、Owner 和估算确定。

## 分支与提交

- `main` 为唯一长期分支，禁止直接 push、force push 和删除。
- 使用 `feature/<issue>-<slug>`、`fix/<issue>-<slug>`、`hotfix/<issue>-<slug>`。
- 采用 Conventional Commits，例如 `feat(agent): add immutable agent version`。
- 一个 PR 聚焦一个可审阅目标；生成代码必须由提交人理解并负责。

## Pull Request 门禁

PR 必须说明关联 Issue、变更边界、API/Schema/Migration 变化、测试证据、安全与 LLM 影响、部署与回滚方式。至少一名 CODEOWNER 批准；高风险改动要求领域/架构与安全/运维双重评审。

Required Checks：

```text
node-lint
node-test
node-build
java-verify
sonarqube-quality-gate
codeql
```

后续 Sprint 按实现进度增加 `migration-check`、`contract-check`、`integration-test`、`e2e-smoke`、`secret-scan` 与 `container-scan`。

## 阶段门禁

| Gate | 条件 | 批准角色 |
|---|---|---|
| G0 立项 | Product Brief、范围、指标、风险 | Product Owner |
| G1 需求 | PRD、原型、验收标准、DoR | Product Owner + Tech Lead |
| G2 设计 | ADR、API、数据与安全设计 | Architect + Security Owner |
| G3 开发 | Required Checks 全通过 | CODEOWNERS |
| G4 Staging | 集成、E2E、质量门禁、验收通过 | QA + Product Owner |
| G5 Production | Release、备份、迁移、回滚就绪 | Release Manager |
| G6 关闭 | 观察期结束并完成复盘 | Tech Lead |

## Definition of Done

- 验收标准全部通过。
- 单元、集成、契约及适用的 E2E 测试已补充。
- ESLint、Java 静态检查、SonarQube、CodeQL 通过。
- API、Schema、Migration、Agent Contract 与文档同步。
- 日志、指标、Trace 与错误处理覆盖关键路径。
- 不含密钥、生产个人数据或未经确认的简历事实。
- 部署与回滚方案已验证。
- Staging 验收通过并更新 Release Notes。

## 版本规则

应用使用 SemVer；数据库使用 Flyway 版本；AgentVersion 与 ResumeVersion 独立演进；容器以 Git SHA 为不可变标识。任何门禁例外都必须建立风险 Issue，记录批准人、补偿措施和到期时间。
