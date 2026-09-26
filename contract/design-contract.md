# Design Contract — Resume AI Manager

## Style Tier & Aesthetic Direction
- **style**: tech-dark
- **aesthetic**: refined tech-dark with cyan accent, glassmorphism cards, subtle gradient glow
- **tone keywords**: professional / high information density / precise / AI-powered

## Design Tokens

### Colors
```
color.primary:       #22d3ee    (cyan-400)
color.primary-hover: #67e8f9    (cyan-300)
color.primary-dim:   #0891b2    (cyan-600)
color.primary-glow:  rgba(34, 211, 238, 0.15)

color.bg:            #0a0e17    (deep navy)
color.bg-elevated:   #0f172a    (slate-900)
color.surface:       #1e293b    (slate-800)
color.surface-hover: #334155    (slate-700)
color.border:        #334155    (slate-700)
color.border-light:  #475569    (slate-600)

color.text:          #f1f5f9    (slate-100)
color.text-sub:      #94a3b8    (slate-400)
color.text-muted:    #64748b    (slate-500)

color.success:       #34d399    (emerald-400)
color.warning:       #fbbf24    (amber-400)
color.danger:        #f87171    (red-400)
color.info:          #60a5fa    (blue-400)
```

### Typography
- font.display: "SF Pro Display", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif
- font.body: "SF Pro Text", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif
- font.mono: "SF Mono", "JetBrains Mono", "Menlo", monospace
- font.scale: 12 / 13 / 14 / 16 / 18 / 20 / 24 / 28 / 32 (px)
- line-height: 1.5 (body) / 1.3 (heading)

### Radius & Shadow
- radius: sm (6px) / md (10px) / lg (14px) / xl (20px) / full (9999px)
- shadow:
  - sm: 0 1px 2px rgba(0,0,0,0.3)
  - md: 0 4px 12px rgba(0,0,0,0.4)
  - lg: 0 8px 32px rgba(0,0,0,0.5)
  - glow: 0 0 20px rgba(34, 211, 238, 0.2)

### Spacing
- base: 4px
- scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64

### Layout
- sidebar width: 240px
- content max-width: 1200px
- content padding: 24px

### Icons
- lib: Lucide (inline SVG for offline support)
- sizes: 16 / 18 / 20 / 24 px
- stroke: 1.75

### Motion
- page-load: staggered fade-in + translateY(8px)
- transition: 200ms cubic-bezier(0.4, 0, 0.2, 1)
- hover: scale(1.02) + subtle glow for primary actions

### Background Texture
- subtle radial gradient at top-left corner
- faint noise/grain overlay via CSS
- glassmorphism effect on cards (backdrop-filter)

## Component Spec

### Button
- variants: primary (cyan bg, white text) / secondary (surface bg, border) / ghost (transparent) / danger
- sizes: sm (32px) / md (38px) / lg (44px)
- states: default / hover / active / disabled / loading

### Input
- height: 38px (md)
- bg: surface
- border: 1px border color
- focus: border primary + glow ring
- variants: text / textarea / select / number

### Card
- bg: surface with backdrop-blur
- border: 1px border color
- radius: lg
- shadow: md
- padding: 20px

### Table
- header: bg-elevated, text-sub
- rows: hover → surface-hover
- divider: 1px border color

### Modal
- overlay: bg 0,0,0 / 0.7 opacity
- panel: surface, radius xl, shadow lg
- width: 560px (md) / 720px (lg) / 900px (xl)

### Nav Sidebar
- width: 240px, fixed left
- bg: bg-elevated with border right
- item: 40px height, hover → surface
- active item: left border 3px primary + primary text color + bg primary-glow

### Tag / Badge
- small pill shape, radius full
- variants: primary / success / warning / danger / info / default

## App Shell + Canonical Nav

### Shell Skeleton
```html
<body data-page="dashboard">
  <aside class="app-sidebar">
    <div class="sidebar-brand">...</div>
    <nav class="sidebar-nav">
      <a data-nav="dashboard" href="index.html">...</a>
      <a data-nav="editor" href="editor.html">...</a>
      <a data-nav="agents" href="agents.html">...</a>
      <a data-nav="ai-assist" href="ai-assist.html">...</a>
      <a data-nav="versions" href="versions.html">...</a>
    </nav>
    <div class="sidebar-footer">...</div>
  </aside>
  <main class="app-main">
    <header class="app-header">...</header>
    <div class="app-content">
      <!-- page-specific content -->
    </div>
  </main>
  <script src="js/nav.js"></script>
</body>
```

### Nav Items (frozen order)
| Label | Icon | href | data-nav |
|-------|------|------|----------|
| 仪表盘 | layout-dashboard | index.html | dashboard |
| 简历编辑 | file-text | editor.html | editor |
| AI Agents | bot | agents.html | agents |
| 智能补齐 | sparkles | ai-assist.html | ai-assist |
| 版本管理 | git-branch | versions.html | versions |

### Active Rule
- `body[data-page="X"]` → `a[data-nav="X"]` gets `.active` class
- JS in nav.js applies active class on load

## Page List

| Page | Responsibility | Key Components | Nav To |
|------|---------------|----------------|--------|
| Dashboard | 总览：简历状态、版本统计、AI使用概览、快捷入口 | Stat cards, recent versions, activity timeline | editor, agents, versions |
| Resume Editor | 结构化简历编辑，分模块管理 | Sectioned form, preview panel, save actions | ai-assist, versions |
| AI Agents | LLM Agent配置管理：增删改查、模型选择、token配置 | Agent list card, add/edit modal, model selector | ai-assist |
| AI Assist | 智能补齐：选择目标内容+Agent，生成优化结果，保存/归档 | Content selector, agent picker, generate flow, save/archive modal | editor, versions |
| Versions | 版本历史：版本列表、对比、归档/恢复、详情 | Version timeline, diff view, status filters | editor |

## Mock Schema

### Resume Data
```js
{
  id: string,
  basicInfo: { name, title, phone, email, location, summary },
  skills: [{ category, items: [] }],
  experiences: [{
    id, company, position, period, highlights: []
  }],
  projects: [{
    id, name, role, background, achievements: [], techStack: []
  }],
  education: [{ school, degree, period, details: [] }],
  certifications: [{ name, issuer, date }]
}
```

### LLM Agent
```js
{
  id: string,
  name: string,
  description: string,
  provider: 'openai' | 'anthropic' | 'google' | 'local' | 'custom',
  model: string,
  apiKey: string,
  baseUrl: string,
  maxTokens: number,
  temperature: number,
  systemPrompt: string,
  tokenLimit: number,
  usedTokens: number,
  status: 'active' | 'inactive',
  createdAt: string
}
```

### Version
```js
{
  id: string,
  version: string,  // e.g. "v1.2.0"
  resumeSnapshot: {...},  // full resume data at this version
  status: 'draft' | 'published' | 'archived',
  source: 'manual' | 'ai-generated',
  agentId: string | null,
  changeSummary: string,
  createdAt: string,
  createdBy: string
}
```
