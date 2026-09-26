/* ============================================
   Resume AI Manager — API Stubs
   Shape matches future real API — replace internals later
   ============================================ */

// Utility: simulate network latency
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ========== Resume API ==========

/**
 * GET /api/resume/current
 * 获取当前简历数据
 */
async function fetchCurrentResume() {
  await delay(300);
  return { code: 0, data: window.DB.resume };
}

/**
 * PUT /api/resume
 * 更新简历数据
 */
async function updateResume(resumeData) {
  await delay(400);
  window.DB.resume = resumeData;
  return { code: 0, data: resumeData, message: '保存成功' };
}

/**
 * POST /api/resume/projects
 * 新增项目经历
 */
async function addProject(project) {
  await delay(400);
  const newProject = {
    ...project,
    id: 'proj-' + Date.now()
  };
  window.DB.resume.projects.push(newProject);
  return { code: 0, data: newProject, message: '项目已添加' };
}

/**
 * PUT /api/resume/projects/:id
 * 更新项目经历
 */
async function updateProject(projectId, project) {
  await delay(300);
  const idx = window.DB.resume.projects.findIndex(p => p.id === projectId);
  if (idx >= 0) {
    window.DB.resume.projects[idx] = { ...window.DB.resume.projects[idx], ...project };
    return { code: 0, data: window.DB.resume.projects[idx], message: '更新成功' };
  }
  return { code: 404, message: '项目不存在' };
}

// ========== Agent API ==========

/**
 * GET /api/agents
 * 获取Agent列表
 */
async function fetchAgents() {
  await delay(300);
  return { code: 0, data: window.DB.agents };
}

/**
 * GET /api/agents/:id
 * 获取单个Agent详情
 */
async function fetchAgent(agentId) {
  await delay(200);
  const agent = window.DB.agents.find(a => a.id === agentId);
  if (agent) {
    return { code: 0, data: agent };
  }
  return { code: 404, message: 'Agent不存在' };
}

/**
 * POST /api/agents
 * 创建新Agent
 */
async function createAgent(agentData) {
  await delay(500);
  const newAgent = {
    ...agentData,
    id: 'agent-' + Date.now(),
    usedTokens: 0,
    createdAt: new Date().toISOString().split('T')[0]
  };
  window.DB.agents.push(newAgent);
  return { code: 0, data: newAgent, message: 'Agent创建成功' };
}

/**
 * PUT /api/agents/:id
 * 更新Agent配置
 */
async function updateAgent(agentId, agentData) {
  await delay(400);
  const idx = window.DB.agents.findIndex(a => a.id === agentId);
  if (idx >= 0) {
    window.DB.agents[idx] = { ...window.DB.agents[idx], ...agentData };
    return { code: 0, data: window.DB.agents[idx], message: '更新成功' };
  }
  return { code: 404, message: 'Agent不存在' };
}

/**
 * DELETE /api/agents/:id
 * 删除Agent
 */
async function deleteAgent(agentId) {
  await delay(400);
  const idx = window.DB.agents.findIndex(a => a.id === agentId);
  if (idx >= 0) {
    window.DB.agents.splice(idx, 1);
    return { code: 0, message: 'Agent已删除' };
  }
  return { code: 404, message: 'Agent不存在' };
}

/**
 * GET /api/llm-providers
 * 获取LLM提供商及模型列表
 */
async function fetchLLMProviders() {
  await delay(200);
  return { code: 0, data: window.DB.llmProviders };
}

// ========== AI Generation API ==========

/**
 * POST /api/ai/generate
 * 调用AI生成内容
 * 
 * Request: { agentId, targetType, targetId, content, instruction }
 * Response: { result, tokensUsed }
 */
async function generateWithAI(params) {
  await delay(1500); // Simulate AI thinking time
  
  // Return canned demo response based on instruction type
  const instruction = params.instruction || '';
  let response;
  
  if (instruction.includes('STAR') || instruction.includes('star') || instruction.includes('法则')) {
    response = window.AI_DEMO_RESPONSES['star-format'];
  } else if (instruction.includes('翻译') || instruction.includes('英文') || instruction.includes('translate')) {
    response = window.AI_DEMO_RESPONSES['translation'];
  } else if (instruction.includes('技术') || instruction.includes('架构') || instruction.includes('tech')) {
    response = window.AI_DEMO_RESPONSES['tech-enhance'];
  } else {
    response = window.AI_DEMO_RESPONSES['project-optimize'];
  }
  
  // Update token usage
  const agent = window.DB.agents.find(a => a.id === params.agentId);
  if (agent) {
    agent.usedTokens += Math.floor(Math.random() * 1000) + 500;
  }
  
  return {
    code: 0,
    data: {
      result: response,
      tokensUsed: Math.floor(Math.random() * 1000) + 500
    }
  };
}

/**
 * GET /api/ai/history
 * 获取AI生成历史
 */
async function fetchAIHistory() {
  await delay(300);
  return { code: 0, data: window.DB.aiHistory };
}

// ========== Version API ==========

/**
 * GET /api/versions
 * 获取版本列表
 */
async function fetchVersions() {
  await delay(300);
  return { code: 0, data: window.DB.versions };
}

/**
 * GET /api/versions/:id
 * 获取版本详情（包含完整简历快照）
 */
async function fetchVersion(versionId) {
  await delay(300);
  const version = window.DB.versions.find(v => v.id === versionId);
  if (version) {
    return {
      code: 0,
      data: {
        ...version,
        resumeSnapshot: window.DB.resume // In real app, this would be the actual snapshot
      }
    };
  }
  return { code: 404, message: '版本不存在' };
}

/**
 * POST /api/versions
 * 创建新版本
 * 
 * Request: { resumeSnapshot, changeSummary, source, agentId }
 */
async function createVersion(params) {
  await delay(500);
  
  // Calculate next version number
  const latest = window.DB.versions[0];
  let nextVersion = 'v1.0.0';
  if (latest) {
    const parts = latest.version.replace('v', '').split('.');
    const major = parseInt(parts[0]);
    const minor = parseInt(parts[1]) + 1;
    nextVersion = `v${major}.${minor}.0`;
  }
  
  const newVersion = {
    id: 'ver-' + Date.now(),
    version: nextVersion,
    status: 'draft',
    source: params.source || 'manual',
    agentId: params.agentId || null,
    agentName: params.agentName || null,
    changeSummary: params.changeSummary || '',
    createdAt: new Date().toLocaleString('zh-CN'),
    createdBy: '龚芝雄',
    resumeSnapshot: params.resumeSnapshot,
    stats: {
      sections: 8,
      projects: params.resumeSnapshot?.projects?.length || 5,
      words: 3800
    }
  };
  
  window.DB.versions.unshift(newVersion);
  return { code: 0, data: newVersion, message: '版本创建成功' };
}

/**
 * POST /api/versions/:id/publish
 * 发布版本
 */
async function publishVersion(versionId) {
  await delay(300);
  const version = window.DB.versions.find(v => v.id === versionId);
  if (version) {
    // Unpublish current published version
    window.DB.versions.forEach(v => {
      if (v.status === 'published') v.status = 'archived';
    });
    version.status = 'published';
    return { code: 0, message: '版本已发布' };
  }
  return { code: 404, message: '版本不存在' };
}

/**
 * POST /api/versions/:id/archive
 * 归档版本
 */
async function archiveVersion(versionId) {
  await delay(300);
  const version = window.DB.versions.find(v => v.id === versionId);
  if (version) {
    version.status = 'archived';
    return { code: 0, message: '版本已归档' };
  }
  return { code: 404, message: '版本不存在' };
}

/**
 * POST /api/versions/:id/restore
 * 恢复版本为当前版本
 */
async function restoreVersion(versionId) {
  await delay(400);
  const version = window.DB.versions.find(v => v.id === versionId);
  if (version) {
    // In real app, restore resumeSnapshot to current
    return { code: 0, message: '版本已恢复' };
  }
  return { code: 404, message: '版本不存在' };
}

// ========== Dashboard API ==========

/**
 * GET /api/dashboard/stats
 * 获取仪表盘统计数据
 */
async function fetchDashboardStats() {
  await delay(300);
  
  const activeAgents = window.DB.agents.filter(a => a.status === 'active').length;
  const totalTokensUsed = window.DB.agents.reduce((sum, a) => sum + a.usedTokens, 0);
  const publishedVersion = window.DB.versions.find(v => v.status === 'published');
  
  return {
    code: 0,
    data: {
      totalVersions: window.DB.versions.length,
      activeAgents,
      totalTokensUsed,
      projectsCount: window.DB.resume.projects.length,
      currentVersion: publishedVersion?.version || '-',
      lastUpdated: publishedVersion?.createdAt || '-',
      activities: window.DB.activities
    }
  };
}

// ========== Toast Utility ==========

function showToast(message, type = 'info', title = '') {
  const container = document.querySelector('.toast-container');
  if (!container) {
    const el = document.createElement('div');
    el.className = 'toast-container';
    document.body.appendChild(el);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const iconMap = {
    success: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    error: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
  };
  
  const titleText = title || {
    success: '操作成功',
    error: '操作失败',
    warning: '提示',
    info: '信息'
  }[type];
  
  toast.innerHTML = `
    <div class="toast-icon">${iconMap[type]}</div>
    <div class="toast-content">
      <div class="toast-title">${titleText}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;
  
  document.querySelector('.toast-container').appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fetchCurrentResume, updateResume, addProject, updateProject,
    fetchAgents, fetchAgent, createAgent, updateAgent, deleteAgent, fetchLLMProviders,
    generateWithAI, fetchAIHistory,
    fetchVersions, fetchVersion, createVersion, publishVersion, archiveVersion, restoreVersion,
    fetchDashboardStats,
    showToast, delay
  };
} else {
  window.API = {
    fetchCurrentResume, updateResume, addProject, updateProject,
    fetchAgents, fetchAgent, createAgent, updateAgent, deleteAgent, fetchLLMProviders,
    generateWithAI, fetchAIHistory,
    fetchVersions, fetchVersion, createVersion, publishVersion, archiveVersion, restoreVersion,
    fetchDashboardStats,
    showToast, delay
  };
}
