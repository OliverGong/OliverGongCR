# 部署手册（Sprint 0）

1. 确认 CI、CodeQL、SonarQube 全部通过。
2. 从受控密钥系统注入环境变量，严禁使用 `.env.example` 默认值。
3. 拉取与 Git tag 对应的 GHCR 镜像并核对摘要。
4. 先部署基础设施，再部署 server、workers、web。
5. 验证 `/actuator/health`、`/api/v1/system/status` 和管理首页。
6. 观察日志、队列积压和资源指标；异常立即执行回滚手册。
