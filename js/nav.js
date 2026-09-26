/* ============================================
   Resume AI Manager — Navigation & Common UI
   ============================================ */

// Set active nav item based on body data-page attribute
document.addEventListener('DOMContentLoaded', function() {
  const page = document.body.dataset.page;
  if (page) {
    const navItem = document.querySelector(`.nav-item[data-nav="${page}"]`);
    if (navItem) {
      navItem.classList.add('active');
    }
  }
  
  // Initialize Lucide icons if using CDN (not applicable for inline SVG)
  if (window.lucide) {
    lucide.createIcons();
  }
});

// ========== Modal Helper ==========

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal-overlay.active');
    if (activeModal) {
      activeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

// ========== Tab Helper ==========

function initTabs(tabsContainer) {
  const tabItems = tabsContainer.querySelectorAll('.tab-item');
  const tabPanels = tabsContainer.parentElement.querySelectorAll('.tab-panel');
  
  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabItems.forEach(t => t.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      if (tabPanels[index]) {
        tabPanels[index].classList.add('active');
      }
    });
  });
}

// Initialize all tabs on page
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs').forEach(initTabs);
});

// ========== Sidebar Brand HTML ==========

const SIDEBAR_BRAND_HTML = `
  <div class="brand-logo">RA</div>
  <div>
    <div class="brand-name">Resume AI</div>
    <div class="brand-sub">智能简历管理</div>
  </div>
`;

// ========== Sidebar Nav HTML ==========

const SIDEBAR_NAV_HTML = `
  <div class="nav-section-label">主菜单</div>
  <a class="nav-item" data-nav="dashboard" href="index.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
    <span>仪表盘</span>
  </a>
  <a class="nav-item" data-nav="editor" href="editor.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/><line x1="9" y1="9" x2="11" y2="9"/></svg>
    <span>简历编辑</span>
  </a>
  <a class="nav-item" data-nav="agents" href="agents.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
    <span>AI Agents</span>
  </a>
  <a class="nav-item" data-nav="ai-assist" href="ai-assist.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    <span>智能补齐</span>
  </a>
  <div class="nav-section-label">管理</div>
  <a class="nav-item" data-nav="versions" href="versions.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 0-9 9"/></svg>
    <span>版本管理</span>
  </a>
`;

// ========== Sidebar Footer HTML ==========

const SIDEBAR_FOOTER_HTML = `
  <div class="user-profile">
    <div class="user-avatar">龚</div>
    <div class="user-info">
      <div class="user-name">龚芝雄</div>
      <div class="user-role">高级工程师</div>
    </div>
  </div>
`;

// ========== App Header HTML ==========

function getAppHeaderHTML(title, actions = '') {
  return `
    <div class="header-left">
      <h1 class="page-title">${title}</h1>
    </div>
    <div class="header-right">
      ${actions}
      <button class="btn btn-ghost btn-icon" title="通知">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      </button>
      <button class="btn btn-ghost btn-icon" title="设置">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
      </button>
    </div>
  `;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SIDEBAR_BRAND_HTML,
    SIDEBAR_NAV_HTML,
    SIDEBAR_FOOTER_HTML,
    getAppHeaderHTML,
    openModal,
    closeModal,
    initTabs
  };
} else {
  window.UI = {
    SIDEBAR_BRAND_HTML,
    SIDEBAR_NAV_HTML,
    SIDEBAR_FOOTER_HTML,
    getAppHeaderHTML,
    openModal,
    closeModal,
    initTabs
  };
}
