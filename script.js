/* ============================================================
   DATA
   ============================================================ */
const PROJECTS = [
  {
    id: 'netguard',
    title: 'NetGuard',
    titleEm: 'ML-based network intrusion detection.',
    period: 'Mar 2026 — Apr 2026',
    status: 'live',
    statusLabel: 'coursework · being refined',
    method: 'get',
    desc: 'University coursework project. A K-Nearest Neighbors model that classifies network traffic as "Normal" or "Attack" using the NSL-KDD dataset, based on features such as duration, protocol, and byte count.',
    stack: ['Python', 'Scikit-learn'],
    focus: [
      'KNN classifier trained on the NSL-KDD dataset',
      'Classifies traffic as "Normal" or "Attack"',
      'Features used: duration, protocol, byte count',
      'In progress: adding a confusion matrix and full evaluation metrics (accuracy, precision, recall, F1-score) after faculty feedback',
      'Considering retraining on a larger, more modern dataset such as CIC-IDS2017/2018',
    ],
    prose: [
      'NetGuard started as a university coursework project: build a model that can tell normal network traffic apart from attack traffic. I used K-Nearest Neighbors on the NSL-KDD dataset, classifying based on features like connection duration, protocol, and byte count.',
      'It is still being refined. Faculty feedback pointed out that classification accuracy alone is not a real evaluation, so I am adding a confusion matrix and the full set of metrics — accuracy, precision, recall, and F1-score — to understand where the model actually fails rather than just how often it is right.',
      'The other open question is the dataset. NSL-KDD is old, and traffic patterns have changed a lot since it was assembled, so I am looking at retraining on something more current like CIC-IDS2017/2018.',
    ],
    link: 'https://github.com/yughpatel/ML-Based-Network-Intrusion-Detection-System',
  },
  {
    id: 'traceback',
    title: 'TraceBack',
    titleEm: 'The same model, pointed at server logs.',
    period: 'Dec 2025 — Mar 2026',
    status: 'done',
    statusLabel: 'shipped',
    method: 'get',
    desc: 'Takes the same KNN model built for NetGuard and applies it to a different problem: server log analysis, flagging entries associated with brute-force attempts, SQL injection, and XSS patterns.',
    stack: ['Python', 'Scikit-learn', 'Streamlit'],
    focus: [
      'Reuses the KNN model from NetGuard — not a separately trained model',
      'Applied to server log entries instead of raw network traffic',
      'Flags entries associated with brute-force attempts, SQL injection, and XSS patterns',
      'Streamlit interface so it can be run without setup',
      'Built for Google for Startups\' "Prompt to Prototype" program (with Scaler)',
      'Later extended for the ET GenAI Hackathon, and used as my CS50x final project',
    ],
    prose: [
      'TraceBack is the same KNN model I built for NetGuard, pointed at a different problem. Instead of classifying raw network traffic, it reads server log entries and flags the ones associated with brute-force attempts, SQL injection, and XSS patterns.',
      'It is worth being clear about this: it is one model reused across two domains, not two independently trained models. The interesting part of the project was working out how to represent log entries as features the existing classifier could actually consume.',
      'The interface is built with Streamlit so it runs without any setup. It started as my build for Google for Startups\' "Prompt to Prototype" program, run in partnership with Scaler, then got extended for the ET GenAI Hackathon and submitted as my CS50x final project.',
    ],
    link: 'https://github.com/yughpatel/TraceBack',
  },
  {
    id: 'ledgerlines',
    title: 'LedgerLines',
    titleEm: 'Personal finance tracker, built from scratch.',
    period: 'Jun 2026 — Present',
    status: 'live',
    statusLabel: 'in development',
    method: 'get',
    desc: 'Full-stack personal finance tracker that lets users log, categorize, and visualize income and expenses. Built to strengthen backend development and security skills — designed and written from scratch rather than following a tutorial.',
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy v2', 'Pydantic v2', 'JWT Authentication', 'Alembic', 'React', 'Tailwind CSS', 'Recharts'],
    focus: [
      'Relational database schema design',
      'Secure password handling and token-based authentication',
      'Clean API design with request/response validation',
      'Backend: FastAPI, PostgreSQL, SQLAlchemy v2, Pydantic v2, JWT, Alembic',
      'Frontend: React, Tailwind CSS, Recharts',
    ],
    prose: [
      'LedgerLines is a full-stack personal finance tracker that lets users log, categorize, and visualize their income and expenses. It is actively in development.',
      'The reason I am building it is to strengthen my backend development and security skills, which meant designing and writing the system from scratch rather than following a tutorial. The parts I care most about getting right are the relational schema design, secure password handling with token-based authentication, and clean API design with proper request and response validation.',
      'Backend is FastAPI with PostgreSQL, SQLAlchemy v2, Pydantic v2, JWT authentication, and Alembic for migrations. Frontend is React with Tailwind CSS and Recharts.',
    ],
  },
  {
    id: 'samarpan',
    title: 'Samarpan',
    titleEm: 'Digitizing a community organization.',
    period: 'Dec 2025 — Present',
    status: 'live',
    statusLabel: 'in development',
    method: 'get',
    desc: 'Web platform for Samarpan Kuwait, a community organization, to digitize community operations — replacing paper-based membership forms and record-keeping. My contribution is the frontend architecture.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    focus: [
      'Designed a modular frontend architecture with reusable components',
      'Organized asset management across the project',
      'Replaces paper-based membership forms and manual record-keeping',
      'Backend integration is planned — not yet built',
    ],
    prose: [
      'Samarpan Kuwait is a community organization that had been running memberships and record-keeping on paper forms. This project is a web platform to digitize those operations.',
      'My contribution has been the frontend: designing a modular architecture with reusable components and organizing asset management so the project stays maintainable as more pages get added.',
      'Backend integration is planned but not yet built, so I would not claim it as something I have implemented.',
    ],
    link: 'https://github.com/yughpatel/Samarpan',
  },
  {
    id: 'transitops',
    title: 'TransitOps',
    titleEm: 'Team hackathon build.',
    period: 'Hackathon Project',
    status: 'done',
    statusLabel: 'team hackathon',
    method: 'get',
    desc: 'Built as part of a team hackathon — a full-stack platform for fleet deployment, vehicle compliance, driver registries, and logistics management. This was team work, not a solo project.',
    stack: ['React 18 (Vite)', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express'],
    focus: [
      'Team project — built collaboratively during a hackathon',
      'Fleet deployment, vehicle compliance, driver registries, logistics management',
      'Frontend: React 18 (Vite), TypeScript, Tailwind CSS, Framer Motion',
      'Backend: Node.js, Express',
    ],
    prose: [
      'TransitOps was built as part of a team hackathon. It is a full-stack platform covering fleet deployment, vehicle compliance, driver registries, and logistics management.',
      'This was team work rather than a solo build, so the scope reflects what several people could put together in a hackathon window rather than what I wrote on my own.',
      'The frontend uses React 18 through Vite with TypeScript, Tailwind CSS, and Framer Motion. The backend is Node.js with Express.',
    ],
  },
];

const SKILLS = [
  {
    title: 'Languages & Frameworks',
    color: '#68b1ff',
    items: ['Python', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Backend & Data',
    color: '#7df3ae',
    items: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'JWT Authentication', 'Pydantic'],
  },
  {
    title: 'AI & APIs',
    color: '#c8a6ff',
    items: ['Prompt Engineering'],
  },
  {
    title: 'Tools & Platforms',
    color: '#68d8ff',
    items: ['Git', 'GitHub', 'Linux', 'Netlify', 'Vercel'],
  },
  {
    title: 'Foundations',
    color: '#ffb454',
    items: ['Networking Fundamentals', 'Cybersecurity Fundamentals'],
    note: 'Cybersecurity is an interest area I am building toward — not yet demonstrated professional expertise.',
  },
];

const EXPERIENCE = [
  {
    ver: 'v2026.05',
    type: 'contribution',
    title: 'Open Source Contributor — GSSoC\'26',
    org: 'GirlScript Summer of Code · Remote',
    date: 'May 2026 → Present',
    desc: 'Six merged pull requests across four repositories — mostly bug fixes, plus one feature integration. Integrated a Budget Tracker into an existing project catalog and fixed the related modal rendering and mobile filter bugs (python-mini-project). Added structured JSON logging middleware to a FastAPI backend (PDF-Assistant-RAG).',
    live: true,
  },
  {
    ver: 'v2025.07',
    type: 'education',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Nirma University · Ahmedabad',
    date: '2025 → 2029 · currently 3rd semester',
    desc: 'Currently in my third semester. Alongside coursework I work on backend projects to get practical experience with things a syllabus does not cover in depth — schema design, authentication, and API structure.',
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
];

const CREDENTIALS = [
  { title: 'CS50x: Introduction to Computer Science',            org: 'Harvard University',        date: 'Jan 2026' },
  { title: 'Startup School: Prompt to Prototype',                org: 'Google for Startups',       date: 'Nov–Dec 2025' },
  { title: 'Generative AI Foundations Certificate',              org: 'Microsoft, via UpGrad',     date: 'Oct 2025' },
  { title: 'Programming with Python Certification',              org: 'Internshala Trainings',     date: 'Jun 2025' },
  { title: 'Coding Essentials: Logic Building for Beginners',    org: 'Scaler Topics',             date: 'Jun 2025' },
];

/* ============================================================
   TERMINAL (typewriter in hero)
   ============================================================ */
const TERM_STEPS = [
  { t: 'prompt', text: '$ ', delay: 40 },
  { t: 'cmd',    text: 'uvicorn ledgerlines.main:app --reload\n', delay: 22 },
  { t: 'output', text: '\n', delay: 60 },
  { t: 'output', text: '<c>INFO:     Will watch for changes in these directories</c>\n', delay: 200 },
  { t: 'output', text: '<c>INFO:     Uvicorn running on</c> <s>http://127.0.0.1:8000</s>\n', delay: 200 },
  { t: 'output', text: '<c>INFO:     Started reloader process</c>\n', delay: 200 },
  { t: 'output', text: '<ok>INFO:</ok>     Application startup complete.\n', delay: 260 },
  { t: 'output', text: '\n', delay: 400 },
  { t: 'prompt', text: '$ ', delay: 220 },
  { t: 'cmd',    text: 'alembic upgrade head\n', delay: 22 },
  { t: 'output', text: '\n', delay: 60 },
  { t: 'output', text: '<c>INFO  [alembic.runtime.migration] Context impl PostgresqlImpl</c>\n', delay: 200 },
  { t: 'output', text: '<c>INFO  [alembic.runtime.migration] Running upgrade</c>\n', delay: 200 },
  { t: 'output', text: '        <s>a1f4c2</s> → <s>b7d9e0</s>, add categories table\n', delay: 200 },
  { t: 'output', text: '<ok>[ok]</ok> schema up to date\n', delay: 260 },
  { t: 'output', text: '\n', delay: 400 },
  { t: 'prompt', text: '$ ', delay: 220 },
  { t: 'cmd',    text: 'curl -s localhost:8000/whoami | jq\n', delay: 22 },
  { t: 'output', text: '\n', delay: 60 },
  { t: 'output', text: 'HTTP/1.1 <ok>200 OK</ok>\n', delay: 12 },
  { t: 'output', text: '<p>{</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"name"</k><p>:</p> <s>"Yug Patel"</s><p>,</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"role"</k><p>:</p> <s>"CS student · backend"</s><p>,</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"school"</k><p>:</p> <s>"Nirma University"</s><p>,</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"semester"</k><p>:</p> <n>3</n><p>,</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"building"</k><p>: [</p><s>"APIs"</s><p>,</p> <s>"schemas"</s><p>,</p> <s>"auth"</s><p>],</p>\n', delay: 12 },
  { t: 'output', text: '  <k>"learning"</k><p>:</p> <s>"cybersecurity"</s><p>,</p>\n', delay: 12 },
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
    row.innerHTML = `
      <div class="project-num">P/${num}</div>
      <div class="project-main">
        <div class="project-meta">
          <span class="method get">GET</span>
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
      ${g.note ? `<p class="sg-note">${g.note}</p>` : ''}
    `;
    wrap.appendChild(card);
  });
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
  if (headMethod) { headMethod.className = 'method get'; headMethod.textContent = 'GET'; }
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
  // My local time, not the viewer's — pairs with the "Ahmedabad, India" label
  // beside it. Formatted via Intl so it stays correct from any timezone.
  let fmt = null;
  try {
    fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hourCycle: 'h23',
    });
  } catch (e) { /* fall back to viewer local time below */ }

  function tick() {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    document.getElementById('clock').textContent = fmt
      ? fmt.format(d) + ' IST'
      : pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }
  tick();
  setInterval(tick, 1000);

  // Days since starting at Nirma — a real, checkable number
  const origin = new Date('2025-07-01T00:00:00Z').getTime();
  const upEl = document.getElementById('uptime');
  if (upEl) {
    function upTick() {
      const days = Math.floor((Date.now() - origin) / 86400000);
      upEl.textContent = days + 'd';
    }
    upTick();
    setInterval(upTick, 60000);
  }

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
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
