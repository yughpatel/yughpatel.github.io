/* ============================================================
   DATA
   ============================================================ */
const PROJECTS = [
  {
    id: 'traceback',
    title: 'TraceBack',
    titleEm: 'Understand raw logs, in plain English.',
    period: 'Dec 2025 — Mar 2026',
    status: 'done',
    statusLabel: 'shipped · security',
    method: 'scan',
    desc: 'AI-assisted web app that reads Apache and authentication logs and explains what happened — brute force attempts, SQL injection, XSS patterns — in plain language a learner can follow.',
    stack: ['Python', 'Streamlit', 'Google Gemini', 'Regex', 'Pandas'],
    focus: [
      'Log upload + parsing with structured extraction of IPs, timestamps, methods',
      'Google Gemini-powered explanation layer for suspicious patterns',
      'Detection heuristics for brute force, SQLi, and XSS signatures',
      'Risk-scoring output presented as tables, summaries, and charts',
      'Follow-up chat interface for interactive investigation',
      'Fully in-memory — no user logs stored',
    ],
    prose: [
      'TraceBack is what I wish existed when I was learning what to actually look for in server logs. Instead of a black-box scanner, it acts like a patient tutor: you upload the logs, it walks you through what looks suspicious, and it explains why it matters.',
      'Written in Python and served through Streamlit for zero-setup access. The heavy lifting is a mix of regex-based extraction (IPs, timestamps, request paths) and Google Gemini for the narrative "so what actually happened here" layer.',
      'It detects brute force login attempts, SQL injection signatures, and common XSS patterns — surfaces them with risk scores — and lets you ask follow-up questions in a chat interface. Nothing gets stored: analysis is entirely in-memory.',
    ],
    link: 'https://github.com/yughpatel/TraceBack',
  },
  {
    id: 'netguard',
    title: 'NetGuard',
    titleEm: 'ML-driven network intrusion detector.',
    period: 'Mar 2026 — Apr 2026',
    status: 'done',
    statusLabel: 'academic · security',
    method: 'scan',
    desc: 'A machine learning model that classifies network traffic as Normal or Attack. Trained on the NSL-KDD dataset using K-Nearest Neighbors and evaluated on precision, recall, and detection latency.',
    stack: ['Python', 'scikit-learn', 'KNN', 'NSL-KDD', 'Pandas', 'NumPy'],
    focus: [
      'Preprocessing pipeline for NSL-KDD (encoding, scaling, feature selection)',
      'K-Nearest Neighbors classifier tuned across k-values and distance metrics',
      'Feature engineering across protocol, duration, and byte-count traits',
      'Confusion matrix + precision/recall/F1 analysis',
      'Trade-off study: accuracy vs. false-positive tolerance vs. inference latency',
    ],
    prose: [
      'NetGuard is my dive into the classical-ML side of network intrusion detection — before jumping to deep learning, I wanted to understand what a well-tuned KNN classifier actually does on real intrusion data.',
      'Ground truth was the NSL-KDD dataset. I built a proper preprocessing pipeline (categorical encoding, feature scaling, subset selection), tuned k-values and distance metrics, and measured the classic tradeoffs: accuracy vs. false-positive tolerance vs. detection latency — the ones that decide whether an IDS actually ships.',
      'The project deepened my understanding of ML fundamentals: how to structure data, train responsibly, and evaluate a model rather than trust a black box.',
    ],
  },
  {
    id: 'ledgerlines',
    title: 'LedgerLines',
    titleEm: 'Personal finance — with auth done right.',
    period: 'Jun 2026 — Present',
    status: 'live',
    statusLabel: 'in development',
    method: 'get',
    desc: 'Full-stack finance tracker built to strengthen backend + security instincts — schema design, JWT auth, request/response validation, and Alembic migrations, all written from scratch rather than a tutorial.',
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy v2', 'Pydantic v2', 'JWT', 'Alembic', 'React', 'Tailwind CSS', 'Recharts'],
    focus: [
      'Relational schema design (users, transactions, categories, budgets)',
      'Password hashing + token-based JWT authentication with refresh handling',
      'Request/response validation via Pydantic — no silent malformed input',
      'Alembic migrations for iterative, reviewable schema evolution',
      'React + Tailwind + Recharts spending visualizations',
    ],
    prose: [
      'LedgerLines is my hands-on answer to: "if I had to build a real finance app from zero — with auth done properly — what does that actually look like?" Not a tutorial re-run. I designed the schema, drew the API contract, and wrote the auth flow myself.',
      'The backend is FastAPI + PostgreSQL with SQLAlchemy v2 and Pydantic v2 for type-safe request/response validation. Authentication is JWT-based with hashed passwords and refresh handling. Schema evolves cleanly through Alembic migrations.',
      'The React frontend uses Tailwind for styling and Recharts to render spending patterns — categorical breakdowns, monthly flows, and category-level trend lines.',
    ],
  },
  {
    id: 'samarpan',
    title: 'Samarpan',
    titleEm: 'Community platform, digitized.',
    period: 'Dec 2025 — Present',
    status: 'live',
    statusLabel: 'in development',
    method: 'get',
    desc: 'A web platform for Samarpan Kuwait — replacing paper-based membership forms and manual record keeping with a modular Flask app: online applications, payment integration, and an admin dashboard.',
    stack: ['Flask', 'Jinja2', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    focus: [
      'Modular frontend architecture with reusable components',
      'Digital membership application system with validation',
      'Online payment integration for community dues',
      'Admin dashboard for member + event management',
      'Session-based authentication and role separation',
      'Deployable on modest hosting — small footprint by design',
    ],
    prose: [
      'Samarpan Kuwait had been running the community — memberships, events, records — on paper forms and manual bookkeeping. This project replaces that with a Flask-based web platform that keeps things simple but modern.',
      'On the frontend, a modular architecture with reusable components and organized assets. On the backend, Flask with SQLite — small enough to deploy anywhere but structured enough to grow.',
      'The immediate goal is a digital membership application system with online payment integration, plus an admin dashboard for managing members and events. Currently building the membership flow and preparing backend integration.',
    ],
    link: 'https://github.com/yughpatel/Samarpan',
  },
  {
    id: 'transitops',
    title: 'TransitOps',
    titleEm: 'Fleet + logistics ops, end-to-end.',
    period: 'Hackathon Project',
    status: 'done',
    statusLabel: 'hackathon · team',
    method: 'get',
    desc: 'Team hackathon build — a full-stack platform for fleet deployment, vehicle compliance, driver registries, and logistics management. Built the whole stack under time pressure with a small team.',
    stack: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express'],
    focus: [
      'React 18 + Vite + TypeScript frontend architecture',
      'Tailwind CSS for rapid design under time pressure',
      'Framer Motion for stateful UI transitions',
      'Node.js + Express backend for fleet + driver APIs',
      'Modules: fleet deployment, vehicle compliance, driver registries, logistics',
      'Team collaboration + git flow under hackathon deadlines',
    ],
    prose: [
      'TransitOps was our team\'s hackathon entry — a full-stack operations platform for transport fleets. The scope was intentionally broad: fleet deployment, vehicle compliance tracking, a driver registry, and a logistics management dashboard, all in one system.',
      'On the frontend we went with React 18 through Vite for fast iteration, TypeScript for team safety, Tailwind for speed, and Framer Motion to keep transitions feeling stateful instead of jumpy. The backend is Node.js + Express with a small set of REST endpoints backing each module.',
      'The takeaway wasn\'t any single technology — it was learning how to negotiate scope with a team on a clock, split ownership cleanly, and ship something end-to-end without letting perfectionism kill velocity.',
    ],
  },
];

const SKILLS = [
  {
    title: 'Security',
    color: '#ff6b8a',
    items: ['Cybersecurity Fundamentals', 'Log Analysis', 'Network Threat Detection', 'ML for IDS', 'SQL Injection Detection', 'XSS / Brute-force Recognition', 'Incident Reasoning', 'CTF / Cyber Job Sims'],
  },
  {
    title: 'Backend',
    color: '#7df3ae',
    items: ['FastAPI', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'JWT', 'Pydantic', 'Alembic'],
  },
  {
    title: 'Languages',
    color: '#68b1ff',
    items: ['Python', 'JavaScript', 'C'],
  },
  {
    title: 'Frontend',
    color: '#c8a6ff',
    items: ['React', 'React 18 + Vite', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
  },
  {
    title: 'CS Fundamentals',
    color: '#ffb454',
    items: ['Data Structures', 'Programming Fundamentals', 'Web Development', 'Computer Networks'],
  },
  {
    title: 'Tooling',
    color: '#68d8ff',
    items: ['Git', 'GitHub', 'Linux', 'Streamlit', 'Google Gemini API', 'JSON-mode Structured Outputs', 'Netlify', 'Vercel', 'Regex', 'scikit-learn'],
  },
];

const THREAT_FEED = [
  { ts: '12:04:22', sig: 'SSH-BRUTE',      payload: '203.0.113.44 → root · 41 tries in 60s',      sev: 'hi',  verd: 'BLOCKED',  cls: 'blocked' },
  { ts: '12:04:38', sig: 'SQLi',           payload: "POST /login  ' OR 1=1 -- ",                  sev: 'hi',  verd: 'BLOCKED',  cls: 'blocked' },
  { ts: '12:05:11', sig: 'XSS',            payload: "<script>fetch('/steal')<\/script>", sev: 'hi',  verd: 'BLOCKED',  cls: 'blocked' },
  { ts: '12:05:47', sig: 'PORT-SCAN',      payload: '198.51.100.9 → 22,80,443,3306,5432',         sev: 'mid', verd: 'FLAGGED',  cls: 'flagged' },
  { ts: '12:06:03', sig: 'AUTH-ANOMALY',   payload: 'user=admin geo=NG → user country IN',        sev: 'mid', verd: 'FLAGGED',  cls: 'flagged' },
  { ts: '12:06:29', sig: 'LFI-ATTEMPT',    payload: 'GET /../../../../etc/passwd',                sev: 'hi',  verd: 'BLOCKED',  cls: 'blocked' },
  { ts: '12:07:00', sig: 'RATE-LIMIT',     payload: '104.28.x.x  /api/*  180 rpm',                sev: 'lo',  verd: 'THROTTLED',cls: 'flagged' },
  { ts: '12:07:34', sig: 'JWT-INVALID',    payload: 'expired token · refresh required',           sev: 'lo',  verd: '401',      cls: 'blocked' },
  { ts: '12:08:02', sig: 'CVE-2024-XXXX',  payload: 'user-agent matches Log4Shell probe',         sev: 'hi',  verd: 'BLOCKED',  cls: 'blocked' },
  { ts: '12:08:41', sig: 'RECON',          payload: '/wp-admin, /phpmyadmin, /.env',              sev: 'mid', verd: 'FLAGGED',  cls: 'flagged' },
  { ts: '12:09:12', sig: 'TLS-DOWNGRADE',  payload: 'TLSv1.0 attempt → refused',                  sev: 'lo',  verd: 'REFUSED',  cls: 'blocked' },
  { ts: '12:09:55', sig: 'ALL-CLEAR',      payload: '5m window · no critical alerts',             sev: 'ok',  verd: 'OK',       cls: 'blocked' },
];

const EXPERIENCE = [
  {
    ver: 'v2026.05',
    type: 'contribution',
    title: 'Open Source Contributor — GSSoC\'26',
    org: 'GirlScript Summer of Code · Remote',
    date: 'May 2026 → Present',
    desc: 'Contributed to steam-bell-92/python-mini-project, anurag3407/career-pilot, and PDF-Assistant-RAG (merged JSON logging middleware). Built a Budget Tracker web UI feature and a retro VHS/CRT-style "Scroll Tape" portfolio template feature.',
    live: true,
  },
  {
    ver: 'v2025.07',
    type: 'education',
    title: 'B.Tech, Computer Science',
    org: 'Nirma University · Ahmedabad',
    date: 'Jul 2025 → Aug 2029',
    desc: 'Coursework spanning DSA, DBMS, networks, OS, and cryptography — paired with a personal track focused on backend engineering and security.',
  },
  {
    ver: 'v2023.05',
    type: 'leadership',
    title: 'Lead Photographer',
    org: 'Fahaheel Al-Watanieh Indian Private School (DPS Kuwait)',
    date: 'May 2023 → Dec 2024',
    desc: 'Captured 20+ school events including major functions. Led event photography planning and execution, managed a student team for coverage and post-processing, and coordinated visual output with organizers and faculty.',
  },
  {
    ver: 'v2020.11',
    type: 'sport',
    title: 'Cricketer — Kuwait U19 (national level)',
    org: 'Kuwait Cricket Club · On-site',
    date: 'Nov 2020 → Nov 2025',
    desc: 'Played U19 cricket for Kuwait for roughly five years at national level. Started as a bowler, grew into a more versatile player, and batted when the team needed it. The tours taught discipline, tactical awareness, and the ability to perform under pressure — directly transferable to technical work.',
  },
  {
    ver: 'v2016.12',
    type: 'community',
    title: 'Photographer & Volunteer',
    org: 'Samarpan (Gujarati Association Kuwait)',
    date: 'Dec 2016 → Present',
    desc: 'Long-running community involvement — event photography and volunteering. The Samarpan platform I\'m building now is a direct continuation of that relationship.',
  },
];

const CREDENTIALS = [
  { title: 'CS50x: Introduction to Computer Science',                 org: 'Harvard · CS50',                  date: 'Jan 2026' },
  { title: 'Hero Campus Challenge Season 10',                         org: 'Unstop',                          date: 'Feb 2026' },
  { title: 'Certificate of Ingenious Hackathon 7.0',                  org: 'Unstop',                          date: 'Jan 2026' },
  { title: 'Startup School: Prompt to Prototype',                     org: 'Google for Startups · Scaler',    date: 'Dec 2025' },
  { title: 'Generative AI Foundations — Microsoft',                   org: 'upGrad',                          date: 'Oct 2025' },
  { title: 'Tata Cyber Analyst Job Simulation',                       org: 'Forage',                          date: 'Oct 2025' },
  { title: 'Mastercard Cybersecurity Job Simulation',                 org: 'Forage',                          date: 'Aug 2025' },
  { title: 'Deloitte Australia — Cyber Job Simulation',               org: 'Forage',                          date: 'Jun 2025' },
  { title: 'Programming with Python Certification Course',            org: 'Internshala Trainings',           date: 'Jun 2025' },
  { title: 'Coding Essentials — Learn Logic Building',                org: 'Scaler',                          date: 'Jun 2025' },
];

/* ============================================================
   TERMINAL (typewriter in hero)
   ============================================================ */
const TERM_STEPS = [
  { t: 'prompt', text: '$ ', delay: 40 },
  { t: 'cmd',    text: 'traceback --scan /var/log/auth.log\n', delay: 22 },
  { t: 'output', text: '\n', delay: 60 },
  { t: 'output', text: '<c>[traceback] parsing 1,247 log entries...</c>\n', delay: 260 },
  { t: 'output', text: '<c>[traceback] extracting IPs · timestamps · UAs</c>\n', delay: 220 },
  { t: 'output', text: '<c>[traceback] correlating against IOC list...</c>\n', delay: 220 },
  { t: 'output', text: '\n', delay: 60 },
  { t: 'output', text: '<alert>[!]</alert> <s>brute-force</s>    42 attempts · 3 unique IPs\n', delay: 260 },
  { t: 'output', text: '<alert>[!]</alert> <s>SQLi pattern</s>   2× on /login endpoint\n', delay: 220 },
  { t: 'output', text: '<alert>[!]</alert> <s>XSS payload</s>    attempted <p>(</p>WAF blocked<p>)</p>\n', delay: 220 },
  { t: 'output', text: '<alert>[!]</alert> <s>LFI probe</s>      GET <p>/../../etc/passwd</p>\n', delay: 220 },
  { t: 'output', text: '<c>[traceback] mapping to MITRE ATT&amp;CK...</c>\n', delay: 220 },
  { t: 'output', text: '<ok>[ok]</ok> risk_score<p>:</p> <n>7.2</n>/10 — <s>investigate</s>\n', delay: 220 },
  { t: 'output', text: '\n', delay: 400 },
  { t: 'prompt', text: '$ ', delay: 220 },
  { t: 'cmd',    text: 'nmap -sV target.internal | head -6\n', delay: 22 },
  { t: 'output', text: '\n', delay: 60 },
  { t: 'output', text: '<c>Starting Nmap 7.94 · scan initiated</c>\n', delay: 220 },
  { t: 'output', text: 'PORT     STATE     SERVICE\n', delay: 40 },
  { t: 'output', text: '<n>22</n>/tcp   open      <s>ssh</s>       OpenSSH 9.6\n', delay: 60 },
  { t: 'output', text: '<n>80</n>/tcp   open      <s>http</s>      nginx 1.24\n', delay: 60 },
  { t: 'output', text: '<n>443</n>/tcp  open      <s>https</s>     nginx 1.24 · <ok>TLS 1.3</ok>\n', delay: 60 },
  { t: 'output', text: '<n>5432</n>/tcp <alert>filtered</alert> <s>postgres</s>  <c>· good.</c>\n', delay: 60 },
  { t: 'output', text: '\n', delay: 400 },
  { t: 'prompt', text: '$ ', delay: 220 },
  { t: 'cmd',    text: 'curl -sL yugpatel.dev/api/v1/whoami | jq\n', delay: 22 },
  { t: 'output', text: '\n', delay: 60 },
  { t: 'output', text: 'HTTP/1.1 <ok>200 OK</ok>\n', delay: 12 },
  { t: 'output', text: '<p>{</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"name"</k><p>:</p> <s>"Yug Patel"</s><p>,</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"role"</k><p>:</p> <s>"Security · Backend"</s><p>,</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"focus"</k><p>: [</p><s>"log-analysis"</s><p>,</p> <s>"IDS"</s><p>,</p> <s>"AppSec"</s><p>],</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"school"</k><p>:</p> <s>"Nirma University"</s><p>,</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"sims"</k><p>: [</p><s>"Tata"</s><p>,</p> <s>"Mastercard"</s><p>,</p> <s>"Deloitte"</s><p>],</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"available"</k><p>:</p> <b>true</b>\n', delay: 20 },
  { t: 'output', text: '<p>}</p>\n', delay: 12 },
  { t: 'output', text: '\n', delay: 500 },
  { t: 'prompt', text: '$ ', delay: 0 },
];

function initTerminal() {
  const body = document.getElementById('termBody');
  const cursor = document.createElement('span');
  cursor.className = 'term-cursor';
  body.appendChild(cursor);

  let step = 0;
  let charIdx = 0;
  let current = '';

  function tick() {
    if (step >= TERM_STEPS.length) {
      // Loop after pause
      setTimeout(() => {
        body.innerHTML = '';
        body.appendChild(cursor);
        step = 0; charIdx = 0; current = '';
        tick();
      }, 3000);
      return;
    }
    const s = TERM_STEPS[step];
    if (charIdx === 0) current = renderInlineTags(s.text);
    if (s.t === 'output' && current.startsWith('<') && current.length > 40) {
      // For rich output lines, dump whole line at once (faster feel)
      body.insertBefore(document.createRange().createContextualFragment(current), cursor);
      step++;
      setTimeout(tick, s.delay || 20);
      return;
    }
    // Character-by-character for prompt+cmd
    const c = s.text[charIdx];
    let node;
    if (s.t === 'prompt' && c === '$') {
      node = document.createElement('span');
      node.className = 'prompt';
      node.textContent = c;
    } else if (s.t === 'cmd' && charIdx === 0 && !c.match(/\s/)) {
      // wrap curl-family highlights inline via renderInlineTags — but for cmd we just type as plain
      body.insertBefore(document.createTextNode(c), cursor);
      charIdx++;
      scheduleNext(s.delay);
      return;
    } else {
      body.insertBefore(document.createTextNode(c), cursor);
    }
    if (node) body.insertBefore(node, cursor);
    charIdx++;
    if (charIdx >= s.text.length) {
      step++;
      charIdx = 0;
      // Scroll to bottom of terminal
      body.scrollTop = body.scrollHeight;
    }
    scheduleNext(s.delay || 20);
  }
  function scheduleNext(d) {
    setTimeout(tick, d);
  }
  function renderInlineTags(t) {
    return t
      .replace(/<ok>(.*?)<\/ok>/g, '<span class="ok">$1</span>')
      .replace(/<hd>(.*?)<\/hd>/g, '<span class="header-line">$1</span>')
      .replace(/<k>(.*?)<\/k>/g, '<span class="k">$1</span>')
      .replace(/<s>(.*?)<\/s>/g, '<span class="s">$1</span>')
      .replace(/<n>(.*?)<\/n>/g, '<span class="n">$1</span>')
      .replace(/<b>(.*?)<\/b>/g, '<span class="b">$1</span>')
      .replace(/<p>(.*?)<\/p>/g, '<span class="p">$1</span>')
      .replace(/<c>(.*?)<\/c>/g, '<span class="comment">$1</span>')
      .replace(/<alert>(.*?)<\/alert>/g, '<span class="alert">$1</span>');
  }
  tick();
}

/* ============================================================
   PROJECTS RENDER
   ============================================================ */
function renderProjects() {
  const list = document.getElementById('projectsList');
  PROJECTS.forEach((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const row = document.createElement('div');
    row.className = 'project-row';
    row.dataset.id = p.id;
    const methodClass = p.method === 'scan' ? 'del' : 'get';
    const methodLabel = p.method === 'scan' ? 'SCAN' : 'GET';
    row.innerHTML = `
      <div class="project-num">P/${num}</div>
      <div class="project-main">
        <div class="project-meta">
          <span class="method ${methodClass}">${methodLabel}</span>
          <span class="endpoint">/projects/${p.id}</span>
          <span class="status ${p.status}">${p.statusLabel}</span>
        </div>
        <h3 class="project-title">${p.title} <em>— ${p.titleEm}</em></h3>
        <p class="project-desc">${p.desc}</p>
        <div class="stack-row">
          ${p.stack.slice(0, 6).map((s, idx) => `<span class="chip${idx < 3 ? ' hi' : ''}">${s}</span>`).join('')}
          ${p.stack.length > 6 ? `<span class="chip">+${p.stack.length - 6}</span>` : ''}
        </div>
      </div>
      <div class="project-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17L17 7M17 7H9M17 7v8"/></svg>
      </div>
    `;
    row.addEventListener('click', () => openDrawer(p));
    list.appendChild(row);
  });
}

/* ============================================================
   SKILLS RENDER
   ============================================================ */
function renderSkills() {
  const wrap = document.getElementById('skillsGroups');
  SKILLS.forEach((g, i) => {
    const card = document.createElement('div');
    card.className = 'skill-group';
    card.style.setProperty('--sg-color', g.color);
    card.innerHTML = `
      <div class="sg-header">
        <div class="sg-title">${g.title}</div>
        <div class="sg-count">${g.items.length}</div>
      </div>
      <div class="sg-items">
        ${g.items.map(it => `<span class="sg-item">${it}</span>`).join('')}
      </div>
    `;
    wrap.appendChild(card);
  });
}

/* ============================================================
   THREAT FEED RENDER
   ============================================================ */
function renderThreatFeed() {
  const list = document.getElementById('tfList');
  if (!list) return;
  const html = THREAT_FEED.map(t => `
    <div class="tf-item sev-${t.sev} ${t.cls}">
      <span class="ts">${t.ts}</span>
      <span class="sig">${t.sig}</span>
      <span class="payload">${t.payload}</span>
      <span class="verd">${t.verd}</span>
    </div>
  `).join('');
  // Duplicate the content so CSS translateY(-50%) loops seamlessly
  list.innerHTML = html + html;
}

/* ============================================================
   EXPERIENCE RENDER
   ============================================================ */
function renderExperience() {
  const wrap = document.getElementById('changelog');
  EXPERIENCE.forEach(e => {
    const entry = document.createElement('div');
    entry.className = 'change-entry' + (e.live ? ' live' : '');
    entry.innerHTML = `
      <div class="change-tag">
        <span class="ver">${e.ver}</span>
        <span class="type">${e.type}</span>
        <span style="color:var(--text-mute)">· ${e.date}</span>
      </div>
      <div class="change-title">${e.title}</div>
      <div class="change-org">${e.org}</div>
      <p class="change-desc">${e.desc}</p>
    `;
    wrap.appendChild(entry);
  });
}

/* ============================================================
   CREDENTIALS RENDER
   ============================================================ */
function renderCreds() {
  const wrap = document.getElementById('credsBody');
  CREDENTIALS.forEach((c, i) => {
    const num = String(i + 1).padStart(2, '0');
    const row = document.createElement('div');
    row.className = 'cred-row';
    row.innerHTML = `
      <div class="cred-num">C/${num}</div>
      <div class="cred-title">${c.title}</div>
      <div class="cred-org">${c.org}</div>
      <div class="cred-date">${c.date}</div>
    `;
    wrap.appendChild(row);
  });
}

/* ============================================================
   DRAWER
   ============================================================ */
function openDrawer(p) {
  const scrim = document.getElementById('scrim');
  const drawer = document.getElementById('drawer');
  const body = document.getElementById('drawerBody');
  document.getElementById('drawerEndpoint').textContent = `/projects/${p.id}`;
  const headMethod = document.querySelector('.drawer-head-left .method');
  if (headMethod) {
    if (p.method === 'scan') { headMethod.className = 'method del'; headMethod.textContent = 'SCAN'; }
    else                      { headMethod.className = 'method get'; headMethod.textContent = 'GET'; }
  }
  body.innerHTML = `
    <h3 class="drawer-title">${p.title} <em>— ${p.titleEm}</em></h3>
    <div class="drawer-sub">
      <span>${p.period}</span>
      <span class="status ${p.status}">${p.statusLabel}</span>
    </div>

    <div class="drawer-section-label">overview</div>
    ${p.prose.map(x => `<p>${x}</p>`).join('')}

    <div class="drawer-section-label">focus areas</div>
    <ul>${p.focus.map(f => `<li>${f}</li>`).join('')}</ul>

    <div class="drawer-section-label">stack</div>
    <div class="drawer-stack">${p.stack.map(s => `<span class="chip hi">${s}</span>`).join('')}</div>

    ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="drawer-link">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7.07-7.07L11.5 5.5"/><path d="M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007.07 7.07l1.66-1.66"/></svg>
      view repository
    </a>` : ''}
  `;
  scrim.classList.add('open');
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  body.scrollTop = 0;
}
function closeDrawer() {
  document.getElementById('scrim').classList.remove('open');
  const drawer = document.getElementById('drawer');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ============================================================
   NAV / SCROLL / PROGRESS / SIDEBAR INDICATOR
   ============================================================ */
function initNav() {
  const navLinks = document.querySelectorAll('#sbNav a');
  const indicator = document.getElementById('sbIndicator');
  const sections = ['root', 'whoami', 'security', 'projects', 'skills', 'experience', 'credentials', 'contact'];
  const statusBar = document.getElementById('statusBar');
  const progressFill = document.getElementById('progressFill');
  const grid = document.getElementById('bgGrid');

  function moveIndicator(link) {
    if (!link) { indicator.classList.remove('on'); return; }
    const top = link.offsetTop + (link.offsetHeight - 34) / 2;
    indicator.style.transform = `translateY(${top}px)`;
    indicator.classList.add('on');
  }

  function onScroll() {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.max(0, Math.min(100, (y / docH) * 100));
    progressFill.style.width = pct + '%';

    // Parallax grid
    if (grid) grid.style.transform = `translateY(${y * 0.12}px)`;

    // Auto-hide status bar on scroll down (subtle)
    // Leaving visible for the aesthetic

    // Active section
    let current = 'root';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) current = id;
    }
    let activeLink = null;
    navLinks.forEach(a => {
      const on = a.dataset.target === current;
      a.classList.toggle('active', on);
      if (on) activeLink = a;
    });
    moveIndicator(activeLink);
  }

  let raf = null;
  window.addEventListener('scroll', () => {
    if (raf) return;
    raf = requestAnimationFrame(() => { onScroll(); raf = null; });
  }, { passive: true });
  onScroll();

  // Offset-aware smooth scroll on anchor click
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
      document.getElementById('sidebar').classList.remove('open');
    });
  });

  // Mobile sidebar toggle
  document.getElementById('sbToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });
}

/* ============================================================
   REVEAL + COUNTERS
   ============================================================ */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        // Counter animation
        en.target.querySelectorAll('[data-counter]').forEach(el => {
          if (el.dataset.done) return;
          el.dataset.done = '1';
          const target = parseInt(el.dataset.counter, 10);
          const span = el.querySelector('.c');
          const dur = 1400;
          const t0 = performance.now();
          function step(now) {
            const t = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            span.textContent = Math.round(target * eased);
            if (t < 1) requestAnimationFrame(step);
            else span.textContent = target;
          }
          requestAnimationFrame(step);
        });
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ============================================================
   MISC (clock, uptime, latency)
   ============================================================ */
function initStatus() {
  function tick() {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    document.getElementById('clock').textContent =
      pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + ' UTC';
  }
  tick();
  setInterval(tick, 1000);

  // Fake latency jitter (aesthetic only)
  const lat = document.getElementById('latency');
  setInterval(() => {
    lat.textContent = String(22 + Math.floor(Math.random() * 14));
  }, 2400);

  // Uptime — since some fixed origin date
  const origin = new Date('2025-07-01T00:00:00Z').getTime();
  const upEl = document.getElementById('uptime');
  function upTick() {
    const days = Math.floor((Date.now() - origin) / 86400000);
    upEl.textContent = days + 'd';
  }
  upTick();
  setInterval(upTick, 60000);

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // SEC-CON widget (fake but coherent security-ops jitter)
  const scSigs = document.getElementById('scSigs');
  const scAlerts = document.getElementById('scAlerts');
  const scBlocked = document.getElementById('scBlocked');
  const scInv = document.getElementById('scInv');
  let sigs = 1247;
  let alerts = 42;
  let blocked = 41;
  setInterval(() => {
    // Sigs slowly grow (feed updates)
    if (Math.random() < 0.35) { sigs += 1; scSigs.textContent = sigs.toLocaleString(); }
    // Occasionally new alert lands + resolves
    if (Math.random() < 0.22) {
      alerts += 1;
      blocked += Math.random() < 0.85 ? 1 : 0;
      scAlerts.textContent = alerts;
      scBlocked.textContent = blocked;
      scInv.textContent = Math.max(1, alerts - blocked);
    }
  }, 3200);

  const secCon = document.getElementById('secCon');
  document.getElementById('scClose').addEventListener('click', () => {
    secCon.classList.add('hide');
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderThreatFeed();
  renderExperience();
  renderCreds();
  initNav();
  initReveal();
  initTerminal();
  initStatus();

  // Drawer close bindings
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  document.getElementById('scrim').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
});
