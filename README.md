<div align="center">
  <img src="./assets/banner.svg" width="100%" alt="Paulo Essau // Paulob0t" />

  <br /><br />

  <p align="center">
    <a href="https://paulob0t.github.io/Portafoli_PauloEssau/"><img src="https://img.shields.io/badge/PORTFOLIO-PIXEL_ARCHITECT-00f59b?style=for-the-badge&logo=itchdotio&logoColor=0b0d11" alt="Portfolio" /></a>&nbsp;
    <a href="https://github.com/Paulob0t"><img src="https://img.shields.io/badge/GITHUB-PAULOB0T-12161f?style=for-the-badge&logo=github&logoColor=00f59b" alt="GitHub" /></a>&nbsp;
    <a href="mailto:pauloessau32@gmail.com"><img src="https://img.shields.io/badge/EMAIL-PAULOESSAU32%40GMAIL.COM-ffb000?style=for-the-badge&logo=gmail&logoColor=0b0d11" alt="Email" /></a>&nbsp;
    <img src="https://img.shields.io/badge/WICODE-FULL_STACK_DEV-181d29?style=for-the-badge&logo=linux&logoColor=00f59b" alt="Role" />
  </p>
</div>

<br />

## Perfil Técnico

Soy **Paulo Essau**, desarrollador Full Stack en **WiCode** (México). Diseño y construyo backends transaccionales, sistemas multi-tenant, herramientas de control remoto en Linux (Arch / Hyprland) e interfaces web tipadas de extremo a extremo.

En mi trabajo diario priorizo la integridad de datos en PostgreSQL y MariaDB (bloqueos pesimistas, control optimista, aislamiento por tenant), binarios ligeros en Go y C++20, y arquitecturas limpias con contratos OpenAPI, Prisma o SQLAlchemy conectados a clientes en React, Vue, Angular y Flutter.

---

## Sistemas Principales (Spotlight)

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Paulobot: Go Telegram Daemon (AGY & Claude Code)</h3>
      <p>
        Demonio de control remoto y gestor de sesiones escrito <strong>100% en Go puro</strong> (0 dependencias externas, 0 Python, consumo de <strong>1.5 MB a 10 MB de RAM</strong>). Compila en un binario único que integra el bot de Telegram, el monitor de cuotas para Waybar, el selector interactivo en Rofi y los hooks nativos del CLI.
      </p>
      <ul>
        <li>Streaming JSON en tiempo real alternando al vuelo entre Antigravity CLI (<code>agy</code>) y Claude Code (<code>claude</code>).</li>
        <li>Terminación recursiva de árboles de procesos leyendo <code>/proc/&lt;pid&gt;/task/*/children</code> en menos de 50 ms.</li>
        <li>Pipeline directo de PDFs e imágenes desde Telegram hacia bóvedas de Obsidian y generador de prompts técnicos WiCode.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/Go_1.23+-00ADD8?style=flat-square&logo=go&logoColor=white" alt="Go" />
        <img src="https://img.shields.io/badge/Zero_Deps-1.5MB_RAM-00f59b?style=flat-square" alt="Zero Deps" />
        <img src="https://img.shields.io/badge/Linux_/proc-Systemd-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" />
        <img src="https://img.shields.io/badge/Wayland-Waybar_&_Rofi-12161f?style=flat-square" alt="Wayland" />
      </p>
      <p>
        <a href="https://github.com/Paulob0t/bot_telegram_agy"><strong>[ Ver Repositorio en GitHub &raquo; ]</strong></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>SeatLock: High-Concurrency Reservation Engine</h3>
      <p>
        Motor de reservación de asientos diseñado para impedir sobreventas (<strong>zero overbooking</strong>) bajo peticiones concurrentes masivas. Serializa el apartado crítico en base de datos y sincroniza el estado visual de los asientos con los clientes conectados.
      </p>
      <ul>
        <li>Concurrencia gestionada con <strong>Java 21 Virtual Threads (Project Loom)</strong> sobre Spring Boot 3.3.</li>
        <li>Doble barrera de integridad: bloqueo pesimista (<code>SELECT ... FOR UPDATE</code>), control optimista (<code>@Version</code>) e índice único parcial en PostgreSQL 16.</li>
        <li>Tarea programada (Janitor Task) con <code>JOIN FETCH</code> que libera reservas caducadas (TTL 10 min) cada 30 segundos.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/Java_21-Virtual_Threads-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java 21" />
        <img src="https://img.shields.io/badge/Spring_Boot_3-6DB33F?style=flat-square&logo=springboot&logoColor=white" alt="Spring Boot 3" />
        <img src="https://img.shields.io/badge/PostgreSQL_16-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL 16" />
        <img src="https://img.shields.io/badge/Redis_7-DC382D?style=flat-square&logo=redis&logoColor=white" alt="Redis 7" />
        <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" />
      </p>
      <p>
        <a href="https://github.com/Paulob0t/seatlock-back"><strong>[ Backend Repo &raquo; ]</strong></a>
        &nbsp;&bull;&nbsp;
        <a href="https://github.com/Paulob0t/seatlock-front"><strong>[ Frontend Repo &raquo; ]</strong></a>
      </p>
    </td>
  </tr>
</table>

---

## Plataformas Full Stack & Multi-Tenant

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>PuvloBuilder: Multi-Tenant CMS & Page Builder</h3>
      <p>
        CMS modular multi-tenant con editor visual en lienzo (tiradores de redimensionamiento en vivo, ajuste magnético sin brechas y sincronización exacta entre editor y vista pública). Incluye módulo CRUD de clientes, autenticación JWT de dos niveles (SuperAdmin y Sub-Admin por proyecto) y aislamiento físico de archivos.
      </p>
      <p>
        <img src="https://img.shields.io/badge/Fastify_5-000000?style=flat-square&logo=fastify&logoColor=white" alt="Fastify 5" />
        <img src="https://img.shields.io/badge/Prisma_ORM-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" />
        <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
        <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white" alt="MariaDB" />
      </p>
      <p>
        <a href="https://github.com/Paulob0t/PuvloBuilder_Back"><strong>[ Backend Repo &raquo; ]</strong></a>
        &nbsp;&bull;&nbsp;
        <a href="https://github.com/Paulob0t/PuvloBuilder_Front"><strong>[ Frontend Repo &raquo; ]</strong></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>Puvnex CRM: Cloud Hosting & Billing Suite</h3>
      <p>
        Sistema de gestión de clientes, aprovisionamiento de dominios y hosting, facturación, tickets de soporte técnico y portal de autoservicio. API REST asíncrona protegida con control de acceso por roles (RBAC) y panel administrativo en Vue 3.5.
      </p>
      <p>
        <img src="https://img.shields.io/badge/Python_3.11+-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
        <img src="https://img.shields.io/badge/SQLAlchemy_2.0-D71F00?style=flat-square&logo=sqlalchemy&logoColor=white" alt="SQLAlchemy" />
        <img src="https://img.shields.io/badge/Vue_3.5-Pinia-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue 3.5" />
        <img src="https://img.shields.io/badge/PrimeVue_4-41B883?style=flat-square" alt="PrimeVue" />
        <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white" alt="MariaDB" />
      </p>
      <p>
        <a href="https://github.com/Paulob0t/Puvnex_backend"><strong>[ Backend Repo &raquo; ]</strong></a>
        &nbsp;&bull;&nbsp;
        <a href="https://github.com/Paulob0t/Puvnex_frontend"><strong>[ Frontend Repo &raquo; ]</strong></a>
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>FreelancerHub: Escrow & Algorithmic Governance</h3>
      <p>
        Plataforma de intermediación para proyectos freelance con custodia de fondos (Escrow) y módulos de decisión algorítmica (MDP). Construida bajo Clean/Onion Architecture con backend en Node.js 22 LTS, cliente web en React y aplicación móvil en Flutter.
      </p>
      <p>
        <img src="https://img.shields.io/badge/Node.js_22-TypeScript_5-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node 22" />
        <img src="https://img.shields.io/badge/Prisma_6-PostgreSQL_16-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
        <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
        <img src="https://img.shields.io/badge/Flutter-Mobile-02569B?style=flat-square&logo=flutter&logoColor=white" alt="Flutter" />
      </p>
      <p>
        <a href="https://github.com/IDGS1004-23001526/freelancer_hub_backend"><strong>[ Backend &raquo; ]</strong></a>
        &nbsp;&bull;&nbsp;
        <a href="https://github.com/IDGS1004-23001526/freelancer_hub_frontend"><strong>[ Web &raquo; ]</strong></a>
        &nbsp;&bull;&nbsp;
        <a href="https://github.com/IDGS1004-23001526/freelancer_hub_frontend_movil"><strong>[ Móvil &raquo; ]</strong></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>PauloBot Store v2: Vending Machines & POS</h3>
      <p>
        Comercio automatizado y punto de venta 24/7 para máquinas expendedoras. Backend en FastAPI con conversión automática de imágenes a WebP, contratos OpenAPI 3.0 con generación de cliente HTTP tipado (<code>ng-openapi-gen</code>) para Angular 22 y base de datos en Podman.
      </p>
      <p>
        <img src="https://img.shields.io/badge/Python_3.12-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
        <img src="https://img.shields.io/badge/Angular_22-Standalone-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular 22" />
        <img src="https://img.shields.io/badge/PostgreSQL_16-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
        <img src="https://img.shields.io/badge/OpenAPI_3.0-85EA2D?style=flat-square&logo=openapiinitiative&logoColor=black" alt="OpenAPI" />
        <img src="https://img.shields.io/badge/Podman-892CA0?style=flat-square&logo=podman&logoColor=white" alt="Podman" />
      </p>
      <p>
        <a href="https://github.com/Paulob0t/PauloBotStore_Back"><strong>[ Backend Repo &raquo; ]</strong></a>
        &nbsp;&bull;&nbsp;
        <a href="https://github.com/Paulob0t/PauloBotStore_Front"><strong>[ Frontend Repo &raquo; ]</strong></a>
      </p>
    </td>
  </tr>
</table>

---

## Motores Nativos, Desktop & Otros Proyectos

| Proyecto | Stack | Implementación Técnica | Repositorio |
| :--- | :--- | :--- | :--- |
| **Tetris-Qt6 & Sand Physics** | `C++20` `Qt 6` `CMake` | Juego nativo a 60 FPS con modo clásico (7-Bag, Lock Delay, Hold) y **Sand Tetris** basado en autómatas celulares y sistema de partículas. | [Paulob0t/Tetris-Qt6](https://github.com/Paulob0t/Tetris-Qt6) |
| **Portafolio Pixel-Architect** | `TypeScript 5.9` `Vite 6` `Canvas 2D` | Portafolio interactivo con estética Tiling WM, simulador de autómatas celulares Sand-Tetris en vivo y terminal zsh emulada. | [Paulob0t/Portafoli_PauloEssau](https://github.com/Paulob0t/Portafoli_PauloEssau) |
| **Laboratorio 3D en Godot 4** | `GDScript` `Godot 4` | Importación de mallas `.obj`, controlador `CharacterBody3D` y geometría de colisiones a medida. | [Paulob0t/Aprendiendo-a-crear-un-videojuego](https://github.com/Paulob0t/Aprendiendo-a-crear-un-videojuego) |
| **Recordatorios & Presupuesto** | `Kotlin` `Android SDK` | Aplicación nativa Android para control de presupuesto personal y seguimiento de cuentas pendientes. | [Paulob0t/Recordatorios_app](https://github.com/Paulob0t/Recordatorios_app) |

---

## Arsenal Técnico

<div align="center">

| Dominio | Tecnologías en Uso |
| :--- | :--- |
| **Lenguajes** | ![Lenguajes](https://skillicons.dev/icons?i=go,ts,py,java,cpp,js,php,kotlin,ruby,cs) |
| **Backend & Frameworks** | ![Backend](https://skillicons.dev/icons?i=fastapi,spring,nodejs,express,rails,prisma,graphql) |
| **Frontend, Mobile & UI** | ![Frontend](https://skillicons.dev/icons?i=react,vue,angular,flutter,tailwind,vite,qt,godot) |
| **Datos, Linux & DevOps** | ![Infra](https://skillicons.dev/icons?i=postgres,mysql,redis,docker,linux,arch,git,postman) |

</div>

---

## Actividad y Métricas en GitHub

<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Paulob0t&theme=tokyonight" width="100%" alt="GitHub Profile Details" />
  <br /><br />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Paulob0t&theme=tokyonight" width="49%" alt="GitHub Stats" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Paulob0t&theme=tokyonight" width="49%" alt="Most Commit Language" />
</div>
