# Backend Handoff Contract — Resume AI Manager

> 本文件定义了前端原型与后端实现之间的接口契约。前端所有 API 调用均通过 `js/api.js` 中的 stub 函数，后端实现需保持相同的函数签名和数据结构。

---

## 1. 技术栈建议

| 层级 | 推荐方案 | 说明 |
|------|---------|------|
| 前端 | React 18 + TypeScript + Vite + TailwindCSS | 原型已验证交互，可迁移至 React |
| 后端 | Node.js (NestJS) 或 Java (Spring Boot) | 按团队技术栈选择 |
| 数据库 | PostgreSQL + Redis | 结构化数据 + 缓存/会话 |
| 认证 | JWT + OAuth2 | 支持第三方登录 |
| 对象存储 | S3 兼容存储 | 存简历附件、导出文件 |
| LLM 接入 | 统一抽象层 + Provider 适配器 | 支持多模型厂商 |

---

## 2. 数据模型

### 2.1 User 用户表
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255),
  avatar_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2.2 Resume 简历表
```sql
CREATE TABLE resumes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  basic_info JSONB NOT NULL,  -- { name, title, phone, email, location, summary }
  skills JSONB NOT NULL,      -- [{ category, items: [] }]
  experiences JSONB NOT NULL, -- [{ id, company, position, period, highlights: [] }]
  projects JSONB NOT NULL,    -- [{ id, name, role, category, background, achievements, techStack, outcome }]
  education JSONB NOT NULL,   -- [{ id, school, degree, period, details: [] }]
  certifications JSONB NOT NULL, -- [{ id, name, issuer, date }]
  other JSONB,                -- { testing: [], agile: [], honors: [] }
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2.3 LLM Agent 表
```sql
CREATE TABLE llm_agents (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  provider VARCHAR(50) NOT NULL,  -- openai / anthropic / google / local / custom
  model VARCHAR(100) NOT NULL,
  api_key_encrypted VARCHAR(500) NOT NULL,
  base_url VARCHAR(500),
  max_tokens INTEGER DEFAULT 4096,
  temperature FLOAT DEFAULT 0.7,
  system_prompt TEXT,
  token_limit BIGINT DEFAULT 1000000,
  used_tokens BIGINT DEFAULT 0,
  status VARCHAR(20) DEFAULT 'active', -- active / inactive
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2.4 Resume Version 版本表
```sql
CREATE TABLE resume_versions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  resume_id UUID REFERENCES resumes(id),
  version VARCHAR(20) NOT NULL,  -- e.g. "v1.2.0"
  resume_snapshot JSONB NOT NULL, -- full resume data copy
  status VARCHAR(20) DEFAULT 'draft', -- draft / published / archived
  source VARCHAR(20) DEFAULT 'manual', -- manual / ai-generated
  agent_id UUID REFERENCES llm_agents(id),
  change_summary TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  created_by UUID REFERENCES users(id)
);
```

### 2.5 AI Generation History 生成记录表
```sql
CREATE TABLE ai_generations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  agent_id UUID REFERENCES llm_agents(id),
  target_type VARCHAR(50) NOT NULL, -- project / experience / summary / skill
  target_id VARCHAR(100),
  target_name VARCHAR(255),
  prompt TEXT NOT NULL,
  result TEXT,
  tokens_used INTEGER,
  status VARCHAR(20) DEFAULT 'pending', -- pending / success / failed
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 3. API 接口清单

### 3.1 认证接口
| Method | Path | 说明 |
|--------|------|------|
| POST | `/api/auth/login` | 邮箱密码登录 |
| POST | `/api/auth/register` | 注册 |
| POST | `/api/auth/logout` | 登出 |
| GET | `/api/auth/me` | 获取当前用户信息 |

### 3.2 简历接口
| Method | Path | 说明 |
|--------|------|------|
| GET | `/api/resume/current` | 获取当前简历 |
| PUT | `/api/resume` | 更新简历 |
| POST | `/api/resume/projects` | 新增项目 |
| PUT | `/api/resume/projects/:id` | 更新项目 |
| DELETE | `/api/resume/projects/:id` | 删除项目 |

### 3.3 Agent 接口
| Method | Path | 说明 |
|--------|------|------|
| GET | `/api/agents` | 获取 Agent 列表 |
| GET | `/api/agents/:id` | 获取 Agent 详情 |
| POST | `/api/agents` | 创建 Agent |
| PUT | `/api/agents/:id` | 更新 Agent |
| DELETE | `/api/agents/:id` | 删除 Agent |
| GET | `/api/llm-providers` | 获取支持的提供商及模型列表 |

### 3.4 AI 生成接口
| Method | Path | 说明 |
|--------|------|------|
| POST | `/api/ai/generate` | 调用 AI 生成内容 |
| GET | `/api/ai/history` | 获取生成历史 |

**POST /api/ai/generate Request:**
```json
{
  "agentId": "uuid",
  "targetType": "project",
  "targetId": "proj-001",
  "content": "原始内容...",
  "instruction": "优化描述"
}
```

**POST /api/ai/generate Response:**
```json
{
  "code": 0,
  "data": {
    "result": "优化后的内容...",
    "tokensUsed": 1250
  }
}
```

### 3.5 版本接口
| Method | Path | 说明 |
|--------|------|------|
| GET | `/api/versions` | 获取版本列表 |
| GET | `/api/versions/:id` | 获取版本详情（含快照） |
| POST | `/api/versions` | 创建新版本 |
| POST | `/api/versions/:id/publish` | 发布版本 |
| POST | `/api/versions/:id/archive` | 归档版本 |
| POST | `/api/versions/:id/restore` | 恢复版本为当前 |
| GET | `/api/versions/compare?a=v1&b=v2` | 对比两个版本 |

### 3.6 仪表盘接口
| Method | Path | 说明 |
|--------|------|------|
| GET | `/api/dashboard/stats` | 获取统计数据 |

---

## 4. LLM Provider 适配层

后端需要实现统一的 LLM 调用抽象层，支持多种 Provider：

```typescript
interface LLMProvider {
  id: string;
  name: string;
  
  generate(params: {
    model: string;
    messages: Array<{ role: string; content: string }>;
    temperature?: number;
    maxTokens?: number;
    apiKey: string;
    baseUrl?: string;
  }): Promise<{
    content: string;
    tokensUsed: number;
    finishReason: string;
  }>;
}
```

已支持的 Provider：
- OpenAI (GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo)
- Anthropic (Claude 3 Opus/Sonnet/Haiku)
- Google Gemini (Gemini 1.5 Pro/Flash)
- Ollama 本地模型 (Llama 3, Qwen 2, Mistral 等)
- 自定义 OpenAI 兼容 API

---

## 5. 安全注意事项

1. **API Key 加密存储**：所有 LLM API Key 必须使用 AES-256 加密后存储
2. **Token 用量审计**：每次调用记录 token 消耗，支持超额告警
3. **版本数据隔离**：用户只能访问自己的简历和版本
4. **输入验证**：AI 生成指令需做内容安全检查，防止 prompt injection
5. **导出文件**：生成的 PDF/DOCX 文件需病毒扫描后提供下载

---

## 6. 部署建议

- 前端：静态部署到 CDN（Vercel / Netlify / OSS）
- 后端：容器化部署（Docker + K8s）
- 数据库：托管 PostgreSQL（RDS / 云数据库）
- 缓存：Redis 用于会话和限流
- 异步任务：AI 生成建议走异步队列（BullMQ / Celery）

---

## 7. 三阶段上线路径

### Phase 1: MVP（1-2 周）
- 前端原型 → React 实现
- 后端基础 CRUD + 数据库
- 单用户本地存储
- 基础 AI 调用（OpenAI）

### Phase 2: 多用户 + 多模型（2-4 周）
- 用户认证系统
- 多 Agent 配置管理
- 版本管理完整功能
- 多模型 Provider 适配

### Phase 3: 高级功能（4-6 周）
- 团队协作 / 分享
- 简历模板市场
- AI 智能推荐岗位匹配
- 导出多种格式（PDF/DOCX/网页）
- 数据分析与优化建议
