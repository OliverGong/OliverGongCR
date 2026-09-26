const modules = [
  ['人才档案', '管理候选人的结构化资料'],
  ['项目管理', '维护职位与交付项目'],
  ['AI Agent', '编排内容生成任务'],
  ['简历工作室', '编辑、预览与版本管理'],
  ['审计中心', '追踪关键操作与变更'],
];

export default function Home() {
  return (
    <main>
      <header>
        <span className="badge">Sprint 0</span>
        <h1>Resume Studio 管理台</h1>
        <p>面向简历交付团队的安全、可审计工作空间</p>
      </header>
      <section className="status">
        <div>
          <strong>系统状态</strong>
          <span className="online">● API 骨架就绪</span>
        </div>
        <div>
          <strong>基础设施</strong>
          <span>PostgreSQL · Redis · RabbitMQ · MinIO</span>
        </div>
      </section>
      <h2>模块导航</h2>
      <section className="grid">
        {modules.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
            <button type="button" disabled>
              即将开放
            </button>
          </article>
        ))}
      </section>
      <footer>OliverGongCR · 当前范围：Sprint 0 工程治理与技术基线</footer>
    </main>
  );
}
