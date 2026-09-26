# 静态代码扫描与质量门禁

## 三层防线

```text
IDE 左移检查 → PR 新代码阻断 → main/release 全量分析
```

- TypeScript：ESLint、Prettier、TypeScript strict。
- Java：Spotless、Checkstyle、SpotBugs、ArchUnit/Spring Modulith Verify。
- IDE：SonarQube for IDE（原 SonarLint）Connected Mode。
- 中央质量：SonarQube Server New Code Quality Gate。
- 安全：CodeQL、Secret Scan、SCA、SBOM、容器扫描。

## SonarQube New Code Gate

| 指标 | 门槛 |
|---|---:|
| Reliability Rating | A |
| Security Rating | A |
| Maintainability Rating | A |
| 新增 Blocker/Critical | 0 |
| Security Hotspots Reviewed | 100% |
| Coverage | ≥ 80% |
| Duplicated Lines Density | ≤ 3% |

PR 相对目标分支定义 New Code；`main` 使用 Previous Version 或 Reference Branch。历史债务先作为趋势，新增代码采用 Clean as You Code。

## TypeScript 规则

- `eslint . --max-warnings=0`。
- 禁止隐式 `any`、未处理 Promise、危险断言、未声明环境变量。
- API、消息和 Agent 输出必须做运行时 Schema 校验。
- 生成的 OpenAPI Client 不得人工修改。

## Java 规则

- Controller 不得直接访问 Repository。
- Domain 不依赖 Web、JPA、消息或模型 SDK。
- 外部调用不得占用长数据库事务。
- 消费者必须幂等。
- 日志不得包含 Prompt 全文、密钥或简历敏感字段。

## LLM/Agent 契约检查

- Agent Schema 必须可解析并带版本。
- Prompt 变量必须全部声明。
- 已发布 AgentVersion 不可修改。
- 事实性输出必须引用有效 `factRefs`。
- 数字、日期、公司、项目、技术必须能映射到授权事实。
- 未确认事实与保密字段不能进入对外版本。
- LLM Key、Authorization、Cookie 不得进入日志或队列。
- Base URL 必须经过 SSRF 检查。
- 外部 JD/文档不能覆盖系统策略。
- Golden Set 回归失败时不得发布 Agent 版本。

## CI 要求

Scanner 上报成功不代表通过；Workflow 必须等待 SonarQube Quality Gate。SonarQube 与 CodeQL 同时保留：前者负责综合质量和趋势，后者补充安全数据流分析。

## 参考

- [SonarQube New Code](https://docs.sonarsource.com/sonarqube-server/2026.3/user-guide/about-new-code)
- [SonarQube Analysis](https://docs.sonarsource.com/sonarqube-server/2025.2/analyzing-source-code/analysis-overview)
- [GitHub CodeQL](https://docs.github.com/en/code-security/concepts/code-scanning/codeql)
