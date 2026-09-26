# 阶段交付物与退出标准

## G0 立项

交付：`PRODUCT-BRIEF.md`、Roadmap、Epic、Milestone、非功能需求。退出条件：MVP 范围、指标和主要风险获批。

## G1 需求与原型

交付：PRD、用户旅程、页面原型、Stories、验收标准、追踪矩阵、隐私数据清单。退出条件：P0/P1 场景和异常路径可测试。

必须覆盖：模型连接、Agent 版本、项目事实/展示双层卡、JD 输入、候选 Diff、草稿/版本/归档/派生、Markdown/DOCX 导出。

## G2 架构设计

交付：系统上下文、容器设计、ERD、OpenAPI、事件 Schema、AI Agent 设计、安全设计与 ADR。退出条件：事务、幂等、权限、Prompt Injection、敏感数据、迁移和回滚策略通过评审。

## G3A 工程底座

交付：Next.js Web、Spring Boot Server/AI Worker、Node Export Worker、Maven/pnpm 构建、Docker/Compose、GitHub Actions、ESLint、Java 扫描、SonarQube、CodeQL、CODEOWNERS 和 Issue/PR 模板。

退出条件：仓库可从零构建；Required Checks 生效；SonarQube Quality Gate 能回传；IDE 可用 Connected Mode；无密钥进入仓库。

## G3B 功能开发

每个 PR 同步代码、测试、OpenAPI/Schema/Migration、用户/运维文档和追踪矩阵。退出条件：全部检查通过、CODEOWNERS 批准、无 Blocker/Critical。

## G4 测试验收

交付：测试计划、自动化报告、SonarQube/CodeQL/SCA/Secret/镜像扫描结果和验收报告。

重点验证：LLM 不直接覆盖事实；无引用事实不能发布；消息幂等；模型失败可恢复；正式版本不可变；跨用户访问被拒绝。

## G5 发布

交付：Release Notes、部署/回滚/备份恢复手册、Migration 和配置差异、Release Checklist。Staging 必须使用同一 SHA 镜像通过验证，Production 经环境审批。

## G6 运行复盘

交付：监控与事件 Runbook、迭代 Review、改进 Issues。观察 API/队列、LLM 成本和失败率、候选采纳率、导出成功率、安全告警和质量趋势。

## 文档规则

文档与实现同 PR 或双向关联；Accepted ADR 不原地重写，用新 ADR 替代；关键决策不得只保留在聊天或个人文件中。
