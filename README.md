<div align="center">
  <h1>🦁 OpenClaw Enterprise Team</h1>
  <p>
    <b>Stop chatting with AI. Start operating an enterprise-grade, 12-agent software engineering department powered by <a href="https://openclaw.ai">OpenClaw</a>.</b>
  </p>
  <p>
    <a href="https://github.com/cancalisir1/openclaw-enterprise-team/stargazers"><img src="https://img.shields.io/github/stars/cancalisir1/openclaw-enterprise-team?style=flat-square&color=yellow" alt="Stars" /></a>
    <a href="https://github.com/cancalisir1/openclaw-enterprise-team/network/members"><img src="https://img.shields.io/github/forks/cancalisir1/openclaw-enterprise-team?style=flat-square&color=blue" alt="Forks" /></a>
    <a href="https://github.com/cancalisir1/openclaw-enterprise-team/issues"><img src="https://img.shields.io/github/issues/cancalisir1/openclaw-enterprise-team?style=flat-square&color=green" alt="Issues" /></a>
    <img src="https://img.shields.io/badge/OpenClaw-Ready-blueviolet?style=flat-square" alt="OpenClaw Compatible" />
    <img src="https://img.shields.io/badge/Architecture-Behavioral_OS-orange?style=flat-square" alt="Behavioral OS" />
  </p>
</div>

<br/>

## 🛑 The Problem with "Agent Swarms" Today

Most multi-agent frameworks fail in production. When you spawn 50 agents in a chat loop, you get prompt drift, endless hallucinations, execution chaos, and blown token budgets. **They act like a brainstorming session, not a software company.**

## 🚀 The Solution: A Behavioral Operating System

Welcome to the **OpenClaw Enterprise Team**. This is **not a magic script** that writes your app in one click. It is a strict, workspace-first **Behavioral Operating System** for AI agents. 

We provide the folder structure, the core prompts (`SOUL.md`), the security constraints, and the delivery protocols. You provide the Product Requirements Document (`PRD`). The agents handle the rest—under strict supervision.

---

## 💡 Why This Architecture? (The "Best-Of" Synthesis)

We didn't invent from scratch; we synthesized the most successful behavioral patterns from top-starred AI repositories into one cohesive, enterprise-ready gateway:

* 🔬 **[Autoresearch](https://github.com/karpathy/autoresearch)-inspired Optimization:** No blind prompting. Agents log empirical results to `results.tsv` (keep/discard) to track which workflows actually succeed.
* 🐡 **[MiroFish](https://github.com/666ghj/MiroFish)-inspired Sim Lab:** Test risky architectures in `labs/simulation/` with specialized personas (Attacker, Power User, SRE) *before* writing code.
* 🦸 **[Superpowers](https://github.com/obra/superpowers)-style Delivery:** A ruthless `PRD -> ADR -> PLAN -> EVIDENCE` pipeline. Code isn't "done" until the `QA Evidence` agent signs off.
* 🧠 **[Hindsight/OpenViking](https://github.com/vectorize-io/hindsight)-inspired Memory:** The `Memory Steward` reads `.learnings/`. If an agent makes the same mistake 3 times, their core DNA (`SOUL.md`) is rewritten for the whole team.
* 🛡️ **[ClawHub](https://clawhub.ai)-style Proactive WAL:** Baked into every agent's soul: *“Write it down before acting. Search before saying I don’t know. Verify before reporting.”*
* 🏢 **Elastic [Agency-Agents](https://github.com/msitarzewski/agency-agents):** We cap the permanent team at **12 Core Roles** (QA, SecGov, MemSteward) to prevent coordination collapse. Domain experts are spawned elastically.

---

## ⚙️ How It Actually Works (Out of the Box vs. Protocol)

### Out-of-the-Box Magic 🪄
When you run `openclaw serve`, you instantly get:
- **12 Ready Agents:** `Chief Orchestrator`, `Backend Lead`, `Security Governor`, etc., fully loaded with their isolated `SOUL` and `TOOLS`.
- **Hardened Security:** The `exec-approvals.json` actually blocks agents from running `npm publish` or `docker push` without your manual terminal approval.
- **Command Auditing:** The `command-logger.js` hook captures every shell command executed across the team.
- **Eval Gates:** Run `npx promptfoo eval` and watch the automated test suite grade your agents' behavior.

### The Behavioral Protocol 📜
The real power is how the agents *play the game*. 
- You drop a `docs/prd/PRD-001.md`.
- You tell the **Chief Orchestrator**: *"Execute PRD-001."*
- The Chief doesn't write code; it delegates to the **System Architect** to write an `ADR`.
- **Backend/Frontend** agents write the code in secure sandboxes.
- **QA Evidence** runs the tests. 
- Nothing is merged without the Chief's final synthesis.

---

## 📂 Repository Layout

```text
openclaw-enterprise-team/
├── platform/         # 🧠 The Control Plane (openclaw.json, security approvals, hooks)
├── workspaces/       # 🏢 The Office (12 isolated agent environments: AGENTS, SOUL, MEMORY)
├── shared/           # 🌐 Global assets (Promptfoo evals, OpenProse templates)
├── registry/         # 📦 The Vault (Approved/Rejected external skills)
├── labs/             # 🧪 The R&D Dept (Optimization loops, Personas, Simulations)
└── docs/             # 📊 The Factory Floor (PRDs, ADRs, Execution Plans, Evidence)
```

---

## 🎯 Getting Started

### Prerequisites

1. Install [OpenClaw](https://openclaw.ai).
2. Grab your LLM API keys (GPT-4o/Claude 3.5 Sonnet recommended for reasoning).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cancalisir1/openclaw-enterprise-team.git
   cd openclaw-enterprise-team
   ```

2. **Start the OpenClaw Gateway:**
   ```bash
   openclaw serve --config platform/openclaw.json
   ```

3. **Deploy your first task:**
   Open a session with the `chief-orchestrator`. Point it to `docs/prd/PRD-TEMPLATE.md` and watch the enterprise machinery spin up.

---

## 🤝 Contributing & Community

Help us refine the "Operating System of AI Engineering". We need:
- Tighter `SOUL.md` prompt engineering.
- Stricter `Eval` gates covering edge cases.
- More robust `Autoresearch` workflow examples.

If you like what you see, **Star the repo ⭐**, fork it, and open a PR!

<div align="center">
  Generated with ❤️ for the AI multi-agent community.
</div>
