# Resume AI Manager — 智能简历管理系统

一个基于 AI 的个人简历在线管理平台，支持多 LLM Agent 配置、智能内容补齐、版本管理与归档。

## ✨ 功能特性

### 📝 简历结构化管理
- 模块化简历编辑：基本信息、工作经历、项目经历、技能、教育、证书
- 所见即所得的编辑体验
- 支持自定义模块和内容组织

### 🤖 多 LLM Agent 配置
- 支持多种 LLM 提供商：OpenAI、Anthropic、Google Gemini、本地模型（Ollama）、自定义 API
- 可配置模型参数：max tokens、temperature、system prompt
- Token 使用量统计与配额管理
- 每个 Agent 独立配置，面向不同优化场景

### ⚡ AI 智能补齐
- 针对不同内容类型优化：项目经历、工作经历、个人简介、技能描述
- 预设优化指令：优化描述、STAR 法则重构、技术增强、中英翻译
- 自定义指令支持，灵活满足个性化需求
- 生成结果可预览、可编辑、可直接保存为新版本

### 🔄 版本管理与归档
- 完整的版本历史记录
- 版本状态管理：草稿、已发布、已归档
- 版本对比功能，高亮差异
- AI 生成版本溯源，记录使用的 Agent 和指令
- 一键恢复任意历史版本

### 📊 仪表盘概览
- 简历版本统计
- Token 使用情况
- Agent 运行状态
- 最近活动时间线

## 🛠️ 技术架构

### 前端原型
- 纯 HTML + CSS + Vanilla JavaScript
- 暗色科技风格设计
- 离线可用，零外部依赖
- 响应式布局

### 数据结构
```
resume-ai-manager/
├── index.html           # 仪表盘
├── editor.html          # 简历编辑器
├── agents.html          # AI Agent 管理
├── ai-assist.html       # 智能补齐
├── versions.html        # 版本管理
├── css/
│   └── styles.css       # 全局样式 + 组件库
├── js/
│   ├── mock.js          # Mock 数据
│   ├── api.js           # API Stub（后端接口契约）
│   └── nav.js           # 导航 + 通用 UI 组件
└── contract/
    ├── design-contract.md    # 设计契约
    └── backend-handoff.md    # 后端交接文档
```

## 🚀 快速开始

### 本地预览
直接在浏览器中打开 `index.html` 即可体验完整原型。

```bash
# 方式一：直接打开
open resume-ai-manager/index.html

# 方式二：使用本地服务器（推荐）
cd resume-ai-manager
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

## 📖 使用流程

### 1. 配置 AI Agent
1. 进入 **AI Agents** 页面
2. 点击「新建 Agent」
3. 选择 LLM 提供商和模型
4. 填写 API Key 和其他参数
5. 保存后 Agent 即可使用

### 2. 智能补齐内容
1. 进入 **智能补齐** 页面
2. 选择要优化的目标（项目经历/工作经历等）
3. 选择一个已配置的 Agent
4. 选择预设指令或输入自定义指令
5. 点击「开始生成」
6. 预览生成结果，满意后点击「保存为新版本」

### 3. 版本管理
1. 进入 **版本管理** 页面
2. 查看所有历史版本
3. 可以发布、归档、恢复版本
4. 支持版本对比，查看差异

## 🔌 API 接口

所有 API 定义在 `js/api.js` 中，包含以下模块：

| 模块 | 接口 | 说明 |
|------|------|------|
| 简历 | `fetchCurrentResume` / `updateResume` | 简历 CRUD |
| Agent | `fetchAgents` / `createAgent` / `updateAgent` / `deleteAgent` | Agent 管理 |
| AI | `generateWithAI` / `fetchAIHistory` | AI 生成 |
| 版本 | `fetchVersions` / `createVersion` / `publishVersion` / `archiveVersion` | 版本管理 |
| 仪表盘 | `fetchDashboardStats` | 统计数据 |

详细接口定义请查看 [backend-handoff.md](contract/backend-handoff.md)。

## 🎨 设计规范

- **风格**：Tech-dark（暗色科技风）
- **主色**：Cyan-400 (#22d3ee)
- **字体**：SF Pro / PingFang SC / Microsoft YaHei
- **图标**：Lucide Icons（内联 SVG）

完整设计契约请查看 [design-contract.md](contract/design-contract.md)。

## 📋 后端开发

前端原型已包含完整的 API Stub 层，后端开发可参考：

- 数据模型设计
- RESTful API 接口规范
- LLM Provider 适配层设计
- 三阶段上线路径建议

详见 [backend-handoff.md](contract/backend-handoff.md)。

## 📄 License

MIT License
