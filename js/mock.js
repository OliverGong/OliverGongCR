/* ============================================
   Resume AI Manager — Mock Data
   Single source of truth for all pages
   ============================================ */

const DB = {
  // Current resume data
  resume: {
    id: 'res-001',
    basicInfo: {
      name: '龚芝雄',
      title: '高级 Java 开发工程师 / 企业集成架构师',
      phone: '188-1049-1714',
      email: '995167235@qq.com',
      location: '北京',
      summary: '13年企业级应用开发与系统集成经验的Java高级开发工程师。精通Java、Spring Boot、RESTful API设计，以及关系型数据库（Oracle、PostgreSQL、MySQL、SQL Server）与实时数据库（OpenTSDB）的数据库开发，具备MyBatis数据持久层开发实战经验。拥有面向全球金融、制造、政务客户的7×24生产运维支持经验，在受监管环境（军工物理隔离网络、安全审计、渗透测试）下交付多个国家级与500强企业项目。'
    },
    skills: [
      {
        category: '核心开发语言',
        items: ['Java（主力，12 年）', 'Spring Boot', 'Spring Framework', 'Python', 'JavaScript / TypeScript', 'Shell Scripting', 'Groovy']
      },
      {
        category: '数据库',
        items: ['Oracle（存储过程 / 性能调优）', 'PostgreSQL', 'MySQL', 'SQL Server', 'OpenTSDB']
      },
      {
        category: 'API 与协议',
        items: ['RESTful API', 'SOAP', 'gRPC', 'JMS', 'XML / XSD / XSL', 'EDI', 'WebService']
      },
      {
        category: '中间件与框架',
        items: ['Spring Boot', 'Apache Kafka', 'RabbitMQ', 'IBM MQ', 'Apache NiFi', 'Kong API Gateway', 'Apache Camel']
      },
      {
        category: 'DevOps 与工具',
        items: ['Linux / UNIX', 'Git', 'Jenkins CI/CD', 'Docker', 'JUnit', 'JConsole / JMX']
      }
    ],
    experiences: [
      {
        id: 'exp-001',
        company: '北京白山耘科技有限公司（白山云）',
        position: '高级 Java 开发工程师 / 系统架构师',
        period: '2018.10 -- 2026.06',
        highlights: [
          '负责企业级集成平台与 API 网关的 Java 后端开发，主导 Spring Boot 微服务架构设计与核心模块编码',
          '负责多个 500 强企业项目的全生命周期交付：需求分析 → 架构设计 → 编码开发 → 测试 → 部署 → 生产支持',
          '在受监管环境（军工物理隔离、信创合规）下完成多个国家级安全项目的开发与验收',
          '负责生产系统的 7×24 运维支持与故障排查，建立自动化质量门禁与 CI/CD 流水线',
          '对接保时捷、马牌、联合利华等跨国客户的业务方与技术团队，用英文进行方案沟通与文档交付'
        ]
      },
      {
        id: 'exp-002',
        company: '北京英创思信息技术有限公司',
        position: '高级 Java 开发工程师 / 系统架构师',
        period: '2015.07 -- 2018.09',
        highlights: [
          '负责 TIBCO 中间件在政务与军工领域的 Java 企业级开发，主导多个国家级/省级项目技术落地',
          '重构 CEP 实时处理框架，将预警时延从 10+ 分钟压缩至 1-2 分钟，达到国内政务实时监控第一梯队',
          '在航天科工军工物理隔离环境下，完成跨密级安全数据集成平台的开发与军工安全认证'
        ]
      },
      {
        id: 'exp-003',
        company: '文思海辉技术有限公司-TIBCO CDC',
        position: 'Java 技术支持工程师',
        period: '2013.07 -- 2015.06',
        highlights: [
          '面向全球金融、制造、政务客户的 7×24 生产环境，处理 TIBCO / Java EE 系统的运行期故障与性能问题',
          '从组件与 JVM 两层做性能优化：JDBC 连接池调优、JMS 会话管理、JVM 堆/GC 调优、Thread Dump 分析',
          '为 TIBCO 全球研发总部输出可复现的故障用例与最小流程，推动原厂缺陷修复，提升跨国协作效率',
          '将高频问题排查路径沉淀为四级故障分类与处置规范，建立标准化运维 SOP'
        ]
      }
    ],
    projects: [
      {
        id: 'proj-001',
        name: '保时捷中国 PCN API 网关与数据集成平台',
        role: 'Java 开发工程师 / 集成架构师',
        category: '企业级 Java 开发与系统集成',
        background: '保时捷中国 PCN 客户运营体系需在 AWS + DXC 混合云上建设企业级 API 网关与数据集成平台，覆盖经销商、售后、营销多类系统对接，对多租户隔离、安全合规有明确验收标准。',
        achievements: [
          '三层架构设计：设计时层（API 建模、契约定义）、运行时层（网关路由、限流、熔断）、门户层（API 目录、文档、订阅管理）三层解耦，基于 Kong（OpenResty）实现 Java 后端服务。',
          '多租户安全：基于 Kong consumer/group 模型做租户隔离，不同业务线 API 在配额、鉴权策略、可见性上完全隔离；LDAP SSO 集成打通甲方统一身份体系。',
          '数据集成开发：基于 NiFi 构建 Java 后端跨系统 ETL 管道，处理经销商主数据、售后工单与营销活动的跨库同步（SQLServer ↔ PostgreSQL），节点级路由规则版本化。',
          'API 全生命周期：从契约评审、联调环境、灰度发布到退役归档，每个阶段有明确的质量门禁与自动化测试。'
        ],
        techStack: ['Java', 'Spring Boot', 'Kong', 'Apache NiFi', 'PostgreSQL', 'SQL Server', 'LDAP', 'AWS'],
        outcome: '平台按期上线并通过甲方安全评审；新 API 交付周期缩短 50%。'
      },
      {
        id: 'proj-002',
        name: '集团级混合集成平台（HIP）',
        role: '高级 Java 开发工程师 / 架构师',
        category: '企业级 Java 开发与系统集成',
        background: '32 家头部集团各自私有化部署，技术栈横跨 SOAP / REST / Oracle / SQL Server / 四代消息中间件，新需求平均交付周期以月计。',
        achievements: [
          'Java 后端开发：基于 Spring Boot 开发集成平台核心后端服务，实现 API 路由、数据流编排与多租户管理的业务逻辑。',
          '协议解耦：实现 API、关系/时序库在控制面的标准化映射，新对接需求走配置化编排(底层原始协议TCP、HTTP[s]、RFC、FTP、MQ、SDK、etc.)而非定制开发。',
          '高可用与容灾：解决海量数据交换中的反压问题与分布式状态一致性（双机房主备、Keepalived + VIP、MySQL Group Replication 奇数节点仲裁）。',
          '性能调优：针对高峰期 10,000+ TPS 做全链路压测与 JVM 调优，保障 7×24 长期稳定运行。'
        ],
        techStack: ['Java', 'Spring Boot', 'Kafka', 'RabbitMQ', 'MySQL', 'Oracle', 'Keepalived'],
        outcome: '落地 32 家集团，日均峰值数据交换 10TB+，7×24 长期运行零核心故障；新对接需求交付周期从月级降到周级。'
      },
      {
        id: 'proj-003',
        name: '航天科工跨密级军工安全数据集成平台',
        role: 'Java 开发工程师 / 军工集成架构师',
        category: '受监管环境开发与生产支持',
        background: '多家航天院所内部上百套异构业务系统需跨单位、跨密级安全数据流转，环境严格物理隔离、强制加密，是军工级安全基线。',
        achievements: [
          '安全 ESB 开发：基于 TIBCO ActiveMatrix Service Grid 搭建安全 ESB 传输架构，Java 后端实现报文级加密与传输层审计。',
          '合规规范：制定统一的跨单位数据访问、脱敏与传输规范（字段级脱敏规则、访问审批流、日志留痕），先于开发落地。',
          '安全验收：完成安全渗透测试与军工标准验收全流程，通过第三方军工安全认证。'
        ],
        techStack: ['Java', 'TIBCO ActiveMatrix', 'Oracle', '加密算法', '安全审计'],
        outcome: '上百套异构系统跨密级零丢失稳定同步；方案成为航天科工多子单位数据集成项目的内部标准参考。'
      },
      {
        id: 'proj-004',
        name: '联合利华 TB 级数据湖镜像同步平台',
        role: 'Java 开发工程师 / 数据集成架构师',
        category: '数据处理与性能优化',
        background: '联合利华核心业务系统需镜像入湖，支撑营销大数据分析。日增量 5TB+、峰值写入 10,000+ TPS，任何同步故障都会污染数据资产。',
        achievements: [
          'Java 后端开发：开发基于变更捕获（binlog / CDC）的实时镜像链路 Java 后端，实现分层写入与背压控制。',
          '背压控制：针对峰值 10,000+ TPS 设计流同步背压策略，队列水位分级触发限速与降级，防止内存溢出与雪崩。',
          '数据一致性校验：按分区做行数 + 校验和比对，差异自动告警并定位到表级。'
        ],
        techStack: ['Java', 'Spring Boot', 'CDC', 'Kafka', 'PostgreSQL', '数据湖'],
        outcome: '极端高并发下镜像链路长期稳定同步，为企业建立标准化数据资产底座。'
      },
      {
        id: 'proj-005',
        name: '某公安人车布控实时预警平台',
        role: 'Java 开发工程师 / 实时计算架构师',
        category: '数据处理与性能优化',
        background: '省级政务核心零容错系统，覆盖全城上万监控采集点的人车布控预警，全链路耗时 10+ 分钟，需压缩到秒级。',
        achievements: [
          'CEP 框架重构：基于 TIBCO BusinessEvents + BusinessWorks 重构 CEP 框架，Java 后端实现事件路由状态机与规则撮合引擎。',
          '性能调优：对热点区域做索引优化，规则撮合从全量扫描降为网格内查询；自研物理流仿真引擎在实验室复现上万采集点压力。'
        ],
        techStack: ['Java', 'TIBCO BusinessEvents', 'TIBCO BusinessWorks', 'Oracle', 'CEP'],
        outcome: '预警全闭环时延从 10+ 分钟压缩至秒级响应内；方案复用至多地市级公安项目。'
      }
    ],
    education: [
      {
        id: 'edu-001',
        school: '东华理工大学',
        degree: '软件工程 学士',
        period: '2009.09 -- 2013.06',
        details: [
          '主修：Java、C/C++、操作系统原理、数据库设计、ARM 体系结构、汇编',
          '校园经历：英文广播站主持（获评优秀英文播音主持）、英文辩论协会组织部部长'
        ]
      }
    ],
    certifications: [
      { id: 'cert-001', name: '大学英语六级（CET-6）', issuer: '教育部', date: '2012.06' },
      { id: 'cert-002', name: 'Vercel《Next.js App Router Fundamentals》', issuer: 'Vercel', date: '2026.09' },
      { id: 'cert-003', name: 'Google《AI for Research and Insights》', issuer: 'Google', date: '2026.04' }
    ],
    other: {
      testing: [
        '功能测试：熟悉黑盒 / 白盒测试方法论，具备功能测试用例设计与执行能力（文思海辉时期提交 200+ 高危有效缺陷）',
        '非功能测试：具备性能测试、压力测试、安全渗透测试经验（军工项目通过第三方安全认证）',
        '回归测试 / SIT / UAT：在保时捷、马牌等企业级项目中负责 SIT 与 UAT 全流程，确保交付质量',
        '自动化测试：编写自动化测试脚本，搭建多版本虚拟机测试集群，扩大测试覆盖范围',
        'CI/CD 质量门禁：建立代码级扫描 + 编排链路压测的自动化质量门禁，集成到 Jenkins CI/CD 流水线'
      ],
      agile: [
        'Agile / Scrum：在多个企业级项目中采用敏捷开发流程，参与迭代计划、每日站会、回顾会议',
        'CI/CD：基于 Jenkins / Git 搭建持续集成流水线，实现自动化构建、测试与部署',
        '跨团队协作：对接业务方（中英文双语沟通）、开发团队、运维团队与安全团队，协调多方需求',
        '文档能力：维护有效的项目文档与软件文档，确保交付物的可追溯性'
      ],
      honors: [
        '白山年度优秀导师',
        '优秀团队奖',
        '领导力训练营'
      ]
    }
  },

  // LLM Agents
  agents: [
    {
      id: 'agent-001',
      name: '简历优化专家',
      description: '专注于简历内容优化、措辞润色，使简历更专业、更有说服力',
      provider: 'openai',
      model: 'gpt-4-turbo',
      apiKey: 'sk-*************************',
      baseUrl: 'https://api.openai.com/v1',
      maxTokens: 4096,
      temperature: 0.7,
      systemPrompt: '你是一位资深的简历优化专家，拥有10年以上HR和猎头经验。请根据用户提供的项目经历，优化项目描述，使其更专业、更有量化成果、更符合目标岗位要求。注意使用STAR法则，突出技术深度和业务价值。',
      tokenLimit: 1000000,
      usedTokens: 125600,
      status: 'active',
      createdAt: '2026-08-15',
      category: 'resume-optimization'
    },
    {
      id: 'agent-002',
      name: '技术描述增强',
      description: '将项目经历转化为技术导向的描述，突出技术栈和架构设计能力',
      provider: 'anthropic',
      model: 'claude-3-opus-20240229',
      apiKey: 'sk-ant-************************',
      baseUrl: 'https://api.anthropic.com/v1',
      maxTokens: 8192,
      temperature: 0.6,
      systemPrompt: '你是一位资深技术架构师，擅长将项目经历转化为技术导向的专业描述。请重点突出：1. 技术架构设计 2. 技术难点与解决方案 3. 技术选型考量 4. 性能优化成果。使用专业技术术语，展现技术深度。',
      tokenLimit: 500000,
      usedTokens: 89200,
      status: 'active',
      createdAt: '2026-08-20',
      category: 'technical'
    },
    {
      id: 'agent-003',
      name: '英文简历翻译',
      description: '专业的中英文简历翻译，确保技术术语准确，表达地道',
      provider: 'google',
      model: 'gemini-1.5-pro',
      apiKey: 'AIza*********************',
      baseUrl: 'https://generativelanguage.googleapis.com/v1',
      maxTokens: 8192,
      temperature: 0.5,
      systemPrompt: 'You are a professional translator specializing in technical resumes. Translate Chinese resume content to English, ensuring: 1. Technical terms are accurate and industry-standard 2. Tone is professional and achievement-oriented 3. Quantify results where possible 4. Follow Western resume conventions. Do not use machine-translation-sounding phrasing.',
      tokenLimit: 500000,
      usedTokens: 45000,
      status: 'active',
      createdAt: '2026-09-01',
      category: 'translation'
    },
    {
      id: 'agent-004',
      name: 'STAR法则重构',
      description: '将项目经历按照STAR法则（情境-任务-行动-结果）重新组织',
      provider: 'openai',
      model: 'gpt-4',
      apiKey: 'sk-*************************',
      baseUrl: 'https://api.openai.com/v1',
      maxTokens: 4096,
      temperature: 0.6,
      systemPrompt: '你是一位资深职业顾问，擅长使用STAR法则优化简历。请将用户提供的项目经历按照STAR（Situation情境 - Task任务 - Action行动 - Result结果）法则重新组织，确保：1. 情境清晰简洁 2. 任务明确具体 3. 行动详细且量化 4. 结果可衡量有数据支撑。',
      tokenLimit: 1000000,
      usedTokens: 67800,
      status: 'active',
      createdAt: '2026-09-10',
      category: 'resume-optimization'
    },
    {
      id: 'agent-005',
      name: '本地测试模型',
      description: '本地部署的测试模型，用于开发和调试',
      provider: 'local',
      model: 'llama3-8b-instruct',
      apiKey: 'local-test-key',
      baseUrl: 'http://localhost:11434/v1',
      maxTokens: 2048,
      temperature: 0.8,
      systemPrompt: '你是一个简历助手，请帮助优化简历内容。',
      tokenLimit: 100000,
      usedTokens: 2300,
      status: 'inactive',
      createdAt: '2026-09-15',
      category: 'testing'
    }
  ],

  // Versions
  versions: [
    {
      id: 'ver-001',
      version: 'v1.2.0',
      status: 'published',
      source: 'ai-generated',
      agentId: 'agent-001',
      agentName: '简历优化专家',
      changeSummary: '使用AI优化了保时捷项目和HIP项目的描述，增加了量化指标',
      createdAt: '2026-09-25 14:30',
      createdBy: '龚芝雄',
      stats: { sections: 8, projects: 5, words: 3850 }
    },
    {
      id: 'ver-002',
      version: 'v1.1.3',
      status: 'archived',
      source: 'ai-generated',
      agentId: 'agent-002',
      agentName: '技术描述增强',
      changeSummary: '技术描述增强Agent优化了项目技术部分',
      createdAt: '2026-09-20 10:15',
      createdBy: '龚芝雄',
      stats: { sections: 8, projects: 5, words: 3680 }
    },
    {
      id: 'ver-003',
      version: 'v1.1.2',
      status: 'archived',
      source: 'manual',
      agentId: null,
      agentName: null,
      changeSummary: '手动更新了教育背景和证书信息',
      createdAt: '2026-09-15 16:45',
      createdBy: '龚芝雄',
      stats: { sections: 8, projects: 5, words: 3520 }
    },
    {
      id: 'ver-004',
      version: 'v1.1.0',
      status: 'archived',
      source: 'ai-generated',
      agentId: 'agent-004',
      agentName: 'STAR法则重构',
      changeSummary: '使用STAR法则重构了核心项目描述',
      createdAt: '2026-09-10 09:20',
      createdBy: '龚芝雄',
      stats: { sections: 8, projects: 5, words: 3400 }
    },
    {
      id: 'ver-005',
      version: 'v1.0.0',
      status: 'archived',
      source: 'manual',
      agentId: null,
      agentName: null,
      changeSummary: '初始版本，从Word文档导入',
      createdAt: '2026-08-28 11:00',
      createdBy: '龚芝雄',
      stats: { sections: 7, projects: 4, words: 2900 }
    }
  ],

  // AI Generation History
  aiHistory: [
    {
      id: 'ai-001',
      agentId: 'agent-001',
      agentName: '简历优化专家',
      target: 'project',
      targetId: 'proj-001',
      targetName: '保时捷中国 PCN API 网关与数据集成平台',
      prompt: '优化这个项目的描述，让它更有说服力',
      tokensUsed: 1250,
      status: 'success',
      createdAt: '2026-09-25 14:25'
    },
    {
      id: 'ai-002',
      agentId: 'agent-001',
      agentName: '简历优化专家',
      target: 'project',
      targetId: 'proj-002',
      targetName: '集团级混合集成平台（HIP）',
      prompt: '增加更多量化数据',
      tokensUsed: 980,
      status: 'success',
      createdAt: '2026-09-25 14:28'
    },
    {
      id: 'ai-003',
      agentId: 'agent-003',
      agentName: '英文简历翻译',
      target: 'experience',
      targetId: 'exp-001',
      targetName: '北京白山耘科技有限公司',
      prompt: '翻译成英文简历格式',
      tokensUsed: 2100,
      status: 'success',
      createdAt: '2026-09-22 16:10'
    },
    {
      id: 'ai-004',
      agentId: 'agent-002',
      agentName: '技术描述增强',
      target: 'project',
      targetId: 'proj-004',
      targetName: '联合利华 TB 级数据湖镜像同步平台',
      prompt: '增强技术描述深度',
      tokensUsed: 1560,
      status: 'success',
      createdAt: '2026-09-18 11:30'
    }
  ],

  // LLM Providers & Models
  llmProviders: [
    {
      id: 'openai',
      name: 'OpenAI',
      icon: 'openai',
      baseUrl: 'https://api.openai.com/v1',
      models: [
        { id: 'gpt-4o', name: 'GPT-4o', maxTokens: 128000, description: '最新多模态模型，最强能力' },
        { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', maxTokens: 128000, description: '高性价比，快速响应' },
        { id: 'gpt-4', name: 'GPT-4', maxTokens: 8192, description: '稳定可靠的旗舰模型' },
        { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', maxTokens: 16384, description: '轻量快速，适合简单任务' }
      ]
    },
    {
      id: 'anthropic',
      name: 'Anthropic',
      icon: 'anthropic',
      baseUrl: 'https://api.anthropic.com/v1',
      models: [
        { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', maxTokens: 200000, description: '最强模型，超长上下文' },
        { id: 'claude-3-sonnet-20240229', name: 'Claude 3 Sonnet', maxTokens: 200000, description: '平衡性能与速度' },
        { id: 'claude-3-haiku-20240307', name: 'Claude 3 Haiku', maxTokens: 200000, description: '快速轻量，性价比高' }
      ]
    },
    {
      id: 'google',
      name: 'Google Gemini',
      icon: 'google',
      baseUrl: 'https://generativelanguage.googleapis.com/v1',
      models: [
        { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', maxTokens: 1000000, description: '超长上下文，百万token' },
        { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash', maxTokens: 1000000, description: '快速版本，性价比高' },
        { id: 'gemini-pro', name: 'Gemini Pro', maxTokens: 32768, description: '稳定的标准模型' }
      ]
    },
    {
      id: 'local',
      name: '本地模型 (Ollama)',
      icon: 'cpu',
      baseUrl: 'http://localhost:11434/v1',
      models: [
        { id: 'llama3-8b-instruct', name: 'Llama 3 8B', maxTokens: 8192, description: 'Meta开源模型' },
        { id: 'llama3-70b-instruct', name: 'Llama 3 70B', maxTokens: 8192, description: '大参数版本' },
        { id: 'qwen2-7b-instruct', name: 'Qwen 2 7B', maxTokens: 32768, description: '通义千问开源版' },
        { id: 'mistral-7b-instruct', name: 'Mistral 7B', maxTokens: 8192, description: 'Mistral开源模型' }
      ]
    },
    {
      id: 'custom',
      name: '自定义 API',
      icon: 'settings',
      baseUrl: '',
      models: [
        { id: 'custom-model', name: '自定义模型', maxTokens: 4096, description: '输入自定义模型名称' }
      ]
    }
  ],

  // Activity log
  activities: [
    { id: 'act-001', type: 'ai', title: '使用「简历优化专家」优化了保时捷项目描述', time: '2小时前', desc: '消耗 1,250 tokens' },
    { id: 'act-002', type: 'version', title: '发布了新版本 v1.2.0', time: '2小时前', desc: 'AI优化后的版本，已发布' },
    { id: 'act-003', type: 'agent', title: '新增了「STAR法则重构」Agent', time: '3天前', desc: '基于 GPT-4 模型配置' },
    { id: 'act-004', type: 'edit', title: '更新了工作经历模块', time: '5天前', desc: '手动编辑了白山云工作经历' },
    { id: 'act-005', type: 'version', title: '归档了版本 v1.1.2', time: '1周前', desc: '手动更新版本' }
  ]
};

// AI canned responses for demo
const AI_DEMO_RESPONSES = {
  'project-optimize': `**项目背景**
保时捷中国 PCN 客户运营体系需在 AWS + DXC 混合云上建设企业级 API 网关与数据集成平台，覆盖经销商、售后、营销等 8 大业务域 20+ 系统对接，对多租户隔离、安全合规、可观测性有明确的金融级验收标准。

**技术实现**
- **三层架构设计：** 设计时层（API 建模、契约优先设计）、运行时层（网关路由、限流熔断、灰度发布）、门户层（API 目录、自助订阅、开发者文档）三层解耦，基于 Kong + OpenResty + Lua 实现 Java 后端控制面，支撑 500+ API 全生命周期管理。
- **多租户安全体系：** 基于 Kong consumer/group 模型实现 3 级租户隔离，不同业务线 API 在配额、鉴权策略、可见性上完全隔离；集成 LDAP SSO 打通甲方统一身份体系，支持 RBAC + ABAC 混合鉴权。
- **企业级数据集成：** 基于 Apache NiFi 构建可视化 ETL 编排管道，处理经销商主数据、售后工单与营销活动的跨库实时同步（SQLServer ↔ PostgreSQL），支持节点级路由规则版本化与回滚。
- **性能与高可用：** 网关层实现 10,000+ QPS 吞吐能力，P99 延迟 < 50ms；双机房主备部署，支持秒级故障切换。

**项目成果**
平台按期上线并通过甲方安全评审（等保三级）；新 API 交付周期从 2 周缩短至 5 天，效率提升 65%；累计接入 200+ 内部与第三方开发者。`,

  'star-format': `**Situation（情境）**
32 家头部集团各自私有化部署，技术栈横跨 SOAP / REST / Oracle / SQL Server / 四代消息中间件，新需求平均交付周期以月计，集成成本居高不下。

**Task（任务）**
建设集团级混合集成平台（HIP），实现异构系统的标准化接入与可视化编排，将新需求交付周期从月级降低到周级，同时保障 7×24 高可用运行。

**Action（行动）**
- 基于 Spring Boot 开发集成平台核心后端服务，实现 API 路由、数据流编排与多租户管理的业务逻辑
- 设计控制面/数据面分离架构，实现 API、关系/时序库在控制面的标准化映射，支持 10+ 种协议的配置化编排（TCP、HTTP[s]、RFC、FTP、MQ、SDK 等）
- 解决海量数据交换中的反压问题与分布式状态一致性，实现双机房主备、Keepalived + VIP、MySQL Group Replication 奇数节点仲裁
- 针对高峰期 10,000+ TPS 做全链路压测与 JVM 调优，优化 GC 策略与线程池配置

**Result（结果）**
落地 32 家集团，日均峰值数据交换 10TB+，7×24 长期运行零核心故障；新对接需求交付周期从月级降到周级，平均交付效率提升 70%。`,

  'tech-enhance': `**技术架构亮点**
- **CDC 实时采集层：** 基于 binlog 解析实现变更数据捕获，支持 SQL Server / PostgreSQL 多源异构数据库，秒级延迟
- **分层写入架构：** 采用 Kafka 缓冲层 + Flink 处理层 + 数据湖存储层的三级架构，实现背压控制与流量削峰
- **背压控制策略：** 设计三级队列水位预警机制，高水位触发自动限流，超高水位触发降级丢弃非关键数据，防止内存溢出与链路雪崩
- **一致性校验引擎：** 按分区并行做行数 + CRC32 校验和比对，差异数据自动告警并定位到具体表/行，支持断点续传
- **Exactly-Once 语义：** 通过两阶段提交 + 幂等写入保障数据一致性，杜绝重复消费与数据丢失

**性能指标**
- 峰值写入：12,000+ TPS
- 端到端延迟：< 3s（P95）
- 数据一致性：100% 校验通过
- 系统可用性：99.99%`,

  'translation': `**Beijing Baishanyun Technology Co., Ltd. (BaishanCloud)**
Senior Java Development Engineer / System Architect　\|　Oct 2018 -- Jun 2026

- Led Java backend development for enterprise integration platform and API gateway, owning Spring Boot microservices architecture design and core module implementation
- Delivered full-lifecycle projects for 10+ Fortune 500 clients: requirements analysis → architecture design → development → testing → deployment → production support
- Successfully delivered multiple national-level security projects in regulated environments (military air-gapped networks, Xinchuang compliance)
- Owned 7×24 production support and incident response, established automated quality gates and CI/CD pipelines
- Collaborated with international clients (Porsche, Continental, Unilever) in English for solution design and technical documentation delivery`
};

// Export for module usage, attach to window for inline scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DB, AI_DEMO_RESPONSES };
} else {
  window.DB = DB;
  window.AI_DEMO_RESPONSES = AI_DEMO_RESPONSES;
}
