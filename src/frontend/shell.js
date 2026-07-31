// Shared shell: injects header, sidebar, and footer into any page.
// Call mountShell() before </body>; all links must be relative to the calling page.
const SHELL_CSS = `
  :root {
    --primary:       #5e6ad2;
    --primary-hover: #4f5bc0;
    --primary-light: #eef0fb;
    --bg:            #f8f9fb;
    --surface:       #ffffff;
    --border:        #e8eaed;
    --text:          #1a1a2e;
    --text-2:        #6b7280;
    --text-3:        #9ca3af;
    --sidebar-w:     224px;
    --header-h:      60px;
  }

  body.shell-mounted {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* ── App header ─────────────────────────────────────── */
  .app-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: var(--header-h);
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    z-index: 100;
  }

  .app-header .wordmark {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .wordmark-icon {
    width: 32px;
    height: 32px;
    background: var(--primary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .wordmark-icon svg { display: block; }

  .wordmark-text {
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.3px;
  }

  .wordmark-text span { color: var(--primary); }

  .header-right { display: flex; align-items: center; gap: 16px; }

  .profile-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border: 1px solid var(--border);
    border-radius: 100px;
    background: var(--surface);
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.15s;
  }

  .profile-btn:hover { border-color: var(--primary); }

  .profile-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: linear-gradient(135deg, #5e6ad2 0%, #8b5cf6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    flex-shrink: 0;
  }

  .profile-name { font-size: 13px; font-weight: 500; color: var(--text); }

  /* ── Layout ─────────────────────────────────────────── */
  .shell-layout {
    display: flex;
    flex: 1;
    padding-top: var(--header-h);
  }

  .shell-content {
    margin-left: var(--sidebar-w);
    flex: 1;
    min-width: 0;
  }

  /* ── Sidebar ─────────────────────────────────────────── */
  .sidebar {
    position: fixed;
    top: var(--header-h);
    left: 0;
    bottom: 0;
    width: var(--sidebar-w);
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 20px 12px;
    overflow-y: auto;
    z-index: 90;
  }

  .nav-section-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--text-3);
    padding: 0 8px;
    margin-bottom: 6px;
    margin-top: 20px;
  }

  .nav-section-label:first-child { margin-top: 0; }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-2);
    text-decoration: none;
    transition: background 0.12s, color 0.12s;
    width: 100%;
  }

  .nav-item:hover { background: var(--bg); color: var(--text); }

  .nav-item.active {
    background: var(--primary-light);
    color: var(--primary);
    font-weight: 600;
  }

  .nav-item svg { flex-shrink: 0; opacity: 0.75; }
  .nav-item.active svg { opacity: 1; }

  .sidebar-footer {
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }

  .sidebar-version { font-size: 11px; color: var(--text-3); padding: 0 10px; }

  /* ── App footer ─────────────────────────────────────── */
  .app-footer {
    margin-left: var(--sidebar-w);
    background: var(--surface);
    border-top: 1px solid var(--border);
    padding: 16px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .app-footer p { font-size: 12px; color: var(--text-3); }

  .app-footer a { font-size: 12px; color: var(--text-3); text-decoration: none; }
  .app-footer a:hover { color: var(--primary); }
`;

function buildSidebar(active, links) {
  const item = (key, href, label, iconPath) => `
    <a href="${href}" class="nav-item${active === key ? ' active' : ''}">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"
           stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>
      ${label}
    </a>`;

  return `
    <span class="nav-section-label">Overview</span>
    ${item('home', links.home, 'Home', '<path d="M8 1L1 6v9h5v-5h4v5h5V6z"/>')}

    <span class="nav-section-label">Tools</span>
    ${item('dashboard', links.home + '#dashboard', 'Dashboard',
      '<path d="M1 1h5.5v7H1zM9.5 1H15v4H9.5zM9.5 8H15v7H9.5zM1 11h5.5v5H1z"/>')}
    ${item('proposal', links.proposal, 'Proposal Generator',
      '<path d="M2 4h12M2 8h8M2 12h5"/><circle cx="13" cy="11" r="2.5"/><path d="M15 13.5l1.5 1.5"/>')}
    ${item('wo-check', links.woCheck, 'Work Order Check',
      '<path d="M2 4h12M2 7h8M2 10h6"/><path d="M11 9l1.5 1.5L15 8"/>')}

    <div class="sidebar-footer">
      <div class="sidebar-version">Bench Press · v0.2</div>
    </div>`;
}

export function mountShell({ active, links }) {
  // Inject shell CSS before any page styles
  const style = document.createElement('style');
  style.id = 'shell-styles';
  style.textContent = SHELL_CSS;
  document.head.insertBefore(style, document.head.firstChild);

  // Replace existing page header with shared app header
  document.querySelector('header')?.remove();
  const header = document.createElement('header');
  header.className = 'app-header';
  header.innerHTML = `
    <a href="${links.home}" class="wordmark">
      <div class="wordmark-icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#fff"
             stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="6" height="6" rx="1.5"/>
          <rect x="10" y="2" width="6" height="6" rx="1.5"/>
          <rect x="2" y="10" width="6" height="6" rx="1.5"/>
          <path d="M10 13h6M13 10v6"/>
        </svg>
      </div>
      <span class="wordmark-text">Account Team <span>Helper</span></span>
    </a>
    <div class="header-right">
      <a href="#" class="profile-btn">
        <div class="profile-avatar">PT</div>
        <span class="profile-name">Pankaj T.</span>
      </a>
    </div>`;
  document.body.insertBefore(header, document.body.firstChild);

  // Wrap existing <main> in sidebar + content layout
  const main = document.querySelector('main');
  const layout = document.createElement('div');
  layout.className = 'shell-layout';
  layout.innerHTML = `<nav class="sidebar">${buildSidebar(active, links)}</nav><div class="shell-content"></div>`;
  main.parentNode.insertBefore(layout, main);
  layout.querySelector('.shell-content').appendChild(main);

  // Append shared footer
  const footer = document.createElement('footer');
  footer.className = 'app-footer';
  footer.innerHTML = `
    <p>Account Team Helper &mdash; Bench Press suite &copy; 2026 Slalom</p>
    <div style="display:flex;gap:20px;">
      <a href="${links.home}">Home</a>
      <a href="https://github.com/matt-penfield/bench_press_proposal" target="_blank" rel="noopener">GitHub</a>
    </div>`;
  document.body.appendChild(footer);

  document.body.classList.add('shell-mounted');
}
