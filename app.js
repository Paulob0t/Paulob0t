/* ==========================================================================
   PAULOB0T PIXEL PORTFOLIO — INTERACTIVE ENGINE (app.js)
   1. Cellular Automata Sand-Tetris Engine (inspirado en Tetris-Qt6 C++20)
   2. Interactive Shell (neofetch, projects, stack, contact, help, clear)
   3. Theme & CRT Switcher + Project Filters + Live System Clock
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. SYSTEM CLOCK, THEME SWITCHER & CRT TOGGLE
     ------------------------------------------------------------------------ */
  const sysClock = document.getElementById('sysClock');
  const updateClock = () => {
    const now = new Date();
    sysClock.textContent = now.toTimeString().split(' ')[0];
  };
  updateClock();
  setInterval(updateClock, 1000);

  const themes = [
    { id: 'phosphor', label: 'PHOSPHOR' },
    { id: 'amber', label: 'AMBER_CRT' },
    { id: 'paper', label: 'PAPER_1BIT' }
  ];
  let currentThemeIdx = 0;

  const themeBtn = document.getElementById('themeBtn');
  const themeLabel = document.getElementById('themeLabel');
  themeBtn.addEventListener('click', () => {
    currentThemeIdx = (currentThemeIdx + 1) % themes.length;
    const selected = themes[currentThemeIdx];
    document.documentElement.setAttribute('data-theme', selected.id);
    themeLabel.textContent = selected.label;
  });

  const crtBtn = document.getElementById('crtBtn');
  const crtLabel = document.getElementById('crtLabel');
  const scanlines = document.getElementById('scanlines');
  let crtEnabled = true;

  crtBtn.addEventListener('click', () => {
    crtEnabled = !crtEnabled;
    scanlines.classList.toggle('off', !crtEnabled);
    crtLabel.textContent = crtEnabled ? 'ON' : 'OFF';
  });

  /* ------------------------------------------------------------------------
     2. PROJECT CATEGORY FILTER
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     3. CELLULAR AUTOMATA SAND-TETRIS MINI ENGINE
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('sandCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width;   // 120
  const H = canvas.height;  // 96

  // Grid stores color string or null
  let grid = new Array(W * H).fill(null);

  const palette = [
    '#00f59b', // Phosphor Mint
    '#ffb000', // Amber Gold
    '#38bdf8', // Cyan Pixel
    '#f43f5e', // Coral Red
    '#a855f7', // Retro Purple
    '#facc15'  // Arcade Yellow
  ];

  // Tetromino masks (4x4)
  const tetrominoes = [
    // T-piece
    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    // L-piece
    [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    // Z-piece
    [
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    // O-piece
    [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    // I-piece
    [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ];

  function spawnSandTetromino(customX) {
    const shape = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
    const color = palette[Math.floor(Math.random() * palette.length)];
    const cellSize = 6; // Each block is 6x6 sand grains
    const startX = customX !== undefined
      ? Math.max(4, Math.min(W - 28, customX - 10))
      : Math.floor(Math.random() * (W - 32)) + 6;
    const startY = 4;

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (shape[r][c]) {
          for (let dy = 0; dy < cellSize; dy++) {
            for (let dx = 0; dx < cellSize; dx++) {
              const px = startX + c * cellSize + dx;
              const py = startY + r * cellSize + dy;
              if (px >= 0 && px < W && py >= 0 && py < H) {
                grid[py * W + px] = color;
              }
            }
          }
        }
      }
    }
  }

  // Pointer interaction: pour sand on drag/click
  let isPointerDown = false;
  let pointerColor = palette[0];

  function pourAtEvent(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = Math.floor(((clientX - rect.left) / rect.width) * W);
    const y = Math.floor(((clientY - rect.top) / rect.height) * H);

    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        if (Math.random() < 0.75) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
            grid[ny * W + nx] = pointerColor;
          }
        }
      }
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    isPointerDown = true;
    pointerColor = palette[Math.floor(Math.random() * palette.length)];
    pourAtEvent(e);
  });

  window.addEventListener('mouseup', () => {
    isPointerDown = false;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isPointerDown) pourAtEvent(e);
  });

  canvas.addEventListener('touchstart', (e) => {
    isPointerDown = true;
    pointerColor = palette[Math.floor(Math.random() * palette.length)];
    pourAtEvent(e);
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (isPointerDown) pourAtEvent(e);
  }, { passive: true });

  document.getElementById('clearSandBtn').addEventListener('click', () => {
    grid.fill(null);
    spawnSandTetromino();
  });

  document.getElementById('spawnPieceBtn').addEventListener('click', () => {
    spawnSandTetromino();
  });

  // Cellular Automata Step
  function stepSand() {
    for (let y = H - 2; y >= 0; y--) {
      // Alternate horizontal scan direction each row to prevent bias
      const leftToRight = (y % 2 === 0);
      for (let i = 0; i < W; i++) {
        const x = leftToRight ? i : (W - 1 - i);
        const idx = y * W + x;
        const color = grid[idx];
        if (!color) continue;

        const belowIdx = (y + 1) * W + x;
        if (!grid[belowIdx]) {
          grid[belowIdx] = color;
          grid[idx] = null;
        } else {
          const dir1 = Math.random() < 0.5 ? -1 : 1;
          const dir2 = -dir1;
          const nx1 = x + dir1;
          const nx2 = x + dir2;

          if (nx1 >= 0 && nx1 < W && !grid[(y + 1) * W + nx1]) {
            grid[(y + 1) * W + nx1] = color;
            grid[idx] = null;
          } else if (nx2 >= 0 && nx2 < W && !grid[(y + 1) * W + nx2]) {
            grid[(y + 1) * W + nx2] = color;
            grid[idx] = null;
          }
        }
      }
    }
  }

  function renderSand() {
    ctx.clearRect(0, 0, W, H);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const color = grid[y * W + x];
        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }

  // Spawn initial pieces and periodical drops
  spawnSandTetromino(25);
  setTimeout(() => spawnSandTetromino(55), 700);
  setTimeout(() => spawnSandTetromino(80), 1400);

  setInterval(() => {
    // Auto-drop a piece if canvas isn't too full
    let occupiedTop = 0;
    for (let x = 0; x < W; x++) {
      if (grid[15 * W + x]) occupiedTop++;
    }
    if (occupiedTop < W * 0.4) {
      spawnSandTetromino();
    }
  }, 4500);

  function loop() {
    stepSand();
    renderSand();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  /* ------------------------------------------------------------------------
     4. INTERACTIVE TERMINAL (PAULOBOT SHELL)
     ------------------------------------------------------------------------ */
  const termOutput = document.getElementById('termOutput');
  const termForm = document.getElementById('termForm');
  const termInput = document.getElementById('termInput');
  const quickCmdBtns = document.querySelectorAll('.cmd-trigger');

  const commands = {
    help: () => [
      'Comandos disponibles en Paulob0t Shell:',
      '  neofetch   -> Muestra resumen del sistema y perfil de arquitecto',
      '  projects   -> Lista los 6 proyectos principales con sus stacks',
      '  stack      -> Muestra lenguajes, frameworks y bases de datos',
      '  contact    -> Información de contacto directo y GitHub',
      '  sand       -> Lanza una pieza extra en el simulador Sand-Tetris',
      '  clear      -> Limpia la pantalla de la terminal'
    ],
    neofetch: () => [
      '       /\\         paulobot@arch-wicode',
      '      /  \\        --------------------',
      '     /\\   \\       OS: Arch Linux x86_64 (Hyprland)',
      '    /      \\      Role: Full Stack Developer @ WiCode & Software Architect',
      '   /   ,,   \\     Focus: High-Concurrency, Multi-Tenant CMS, Cloud Suites',
      '  /   |  |  -\\    Backend: Java 21 (Spring Boot), Python (FastAPI), TS (Fastify)',
      ' /_-""    ""-_\\   Frontend: React 19, Vue 3.5, Angular 22, Tailwind CSS v4',
      '                  DB & Infra: PostgreSQL 16, MariaDB, Redis 7, Podman, Linux'
    ],
    projects: () => [
      '[01] SeatLock          :: Java 21 (Loom) + Spring Boot 3 + PG16 + Redis 7 + React 19',
      '[02] Puvnex CRM        :: Python (FastAPI + SQLAlchemy 2) + Vue 3.5 + MariaDB',
      '[03] PuvloBuilder CMS  :: Fastify 5 + Prisma ORM + React 19 + Dual JWT Auth',
      '[04] AGY Remote Bot    :: Python Asyncio + Telegram API + Cloudflare Tunnels + Linux',
      '[05] PauloBot Store v2 :: FastAPI (Python 3.12) + Angular 22 + OpenAPI Gen + Podman',
      '[06] Tetris-Qt6 Engine :: C++20 + Qt 6 + Cellular Automata Sand Physics (60 FPS)'
    ],
    stack: () => [
      '>> LENGUAJES  : TypeScript, Python, Java 21, C++20, JavaScript, PHP, Go, Ruby, Kotlin',
      '>> BACKEND    : FastAPI, Spring Boot 3, Fastify 5, Node.js, Express, Rails 8',
      '>> FRONTEND   : React 19, Vue 3.5 (Pinia/PrimeVue), Angular 22, Tailwind v4, Qt 6',
      '>> DATA/INFRA : PostgreSQL 16, MariaDB, Redis 7, Prisma, Hibernate, Podman, Systemd'
    ],
    contact: () => [
      '📧 Email  : pauloessau32@gmail.com',
      '🐙 GitHub : https://github.com/Paulob0t',
      '🏢 Work   : Full Stack Developer @ WiCode (México)'
    ],
    sand: () => {
      spawnSandTetromino();
      return ['[+] Tetrominó de arena lanzado en sand_physics.exe!'];
    }
  };

  function printToTerminal(cmdText, lines) {
    if (cmdText) {
      const cmdLine = document.createElement('div');
      cmdLine.className = 'term-line cmd';
      cmdLine.textContent = `paulobot@wicode:~$ ${cmdText}`;
      termOutput.appendChild(cmdLine);
    }

    lines.forEach((line) => {
      const div = document.createElement('div');
      div.className = 'term-line';
      div.textContent = line;
      termOutput.appendChild(div);
    });

    const spacer = document.createElement('br');
    termOutput.appendChild(spacer);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      termOutput.innerHTML = '';
      return;
    }

    if (commands[cmd]) {
      printToTerminal(raw, commands[cmd]());
    } else {
      printToTerminal(raw, [
        `zsh: command not found: ${cmd}. Escribe 'help' para ver la lista de comandos.`
      ]);
    }
  }

  termForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = termInput.value;
    termInput.value = '';
    runCommand(val);
  });

  quickCmdBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      runCommand(btn.getAttribute('data-cmd'));
    });
  });

  // Run neofetch automatically on boot
  runCommand('neofetch');
});
