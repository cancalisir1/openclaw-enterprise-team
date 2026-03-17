<div align="center">
  <h1>🦁 OpenClaw Enterprise Team</h1>
  <p>
    <b>An enterprise-grade, 12-agent software development team architecture powered by <a href="https://openclaw.ai">OpenClaw</a>.</b>
  </p>
  <p>
    <a href="https://github.com/cancalisir1/openclaw-enterprise-team/stargazers"><img src="https://img.shields.io/github/stars/cancalisir1/openclaw-enterprise-team?style=flat-square&color=yellow" alt="Stars" /></a>
    <a href="https://github.com/cancalisir1/openclaw-enterprise-team/network/members"><img src="https://img.shields.io/github/forks/cancalisir1/openclaw-enterprise-team?style=flat-square&color=blue" alt="Forks" /></a>
    <a href="https://github.com/cancalisir1/openclaw-enterprise-team/issues"><img src="https://img.shields.io/github/issues/cancalisir1/openclaw-enterprise-team?style=flat-square&color=green" alt="Issues" /></a>
    <img src="https://img.shields.io/badge/OpenClaw-Compatible-blueviolet?style=flat-square" alt="OpenClaw Compatible" />
    <img src="https://img.shields.io/badge/Architecture-Multi--Agent-orange?style=flat-square" alt="Multi-Agent" />
  </p>
</div>

<br/>

## 🚀 Overview

Welcome to the **OpenClaw Enterprise Team** repository! This project implements a cutting-edge, 12-agent architecture designed for enterprise software development. It moves beyond "just talking to AI" into a **structured, approval-gated, and self-improving operational team**.

By leveraging the OpenClaw gateway, this architecture introduces strict delivery contracts, memory management, security governors, and continuous optimization pipelines (MiroFish-inspired labs & Autoresearch loops).

💡 **Why this architecture?**
- **Not a toy:** Real-world enterprise gating (evals, approval hooks, sandbox defaults).
- **Workspace-First:** Agent state (`AGENTS.md`, `SOUL.md`, `.learnings/`) is the ultimate source of truth.
- **Delivery Protocol:** Strict `PRD -> ADR -> PLAN -> EVIDENCE` pipeline. No code merges without evidence.
- **Self-Improving:** Dedicated *Memory Steward* agent curates lessons learned and promotes them to global rules.

---

## 🏗️ The 12-Agent Topology

The team is divided into 4 operational planes focusing on different aspects of the software lifecycle:

### 1. Control Plane
- 👑 **Chief Orchestrator:** Delegates work, manages sprint planning, and owns the handoff synthesis.
- 📐 **Product Owner:** Owns the PRD, acceptance criteria, and what gets built.
- 🏗️ **System Architect:** Owns cross-component architectures (ADR) and system boundaries.

### 2. Delivery Plane
- ⚙️ **Backend Lead:** Owns services, data flows, integration, and API contracts.
- 🎨 **Frontend Lead:** Owns UI flows, components, and UX constraints.
- 🧪 **QA Evidence:** Enforces the "Done equals Evidence" culture. Has release veto power.
- 🛡️ **Security Governor:** Controls the skill supply chain, threat modeling, and sec policy.
- 🚀 **Platform SRE:** Owns CI/CD, deployment strategy, observability, and runbooks.

### 3. Knowledge Plane
- 📚 **Research Librarian:** Aggregates docs, RFCs, and external context mapping.
- 🧠 **Memory Steward:** Controls learning promotions to core memory to avoid prompt drift.
- ⚖️ **Eval Redteam:** Owns the objective quality gates and promptfoo test suites.

### 4. Lab & Ops Plane
- 🛠️ **Proactive Ops:** Runs isolated cron jobs for stale task detection, heartbeat chores.

*(Note: Additional roles like UI/UX Designer, Database Optimizer, or Domain Specialists are **spawned elastically** as needed, preventing coordination bloat.)*

---

## 📂 Repository Structure

```text
openclaw-enterprise-team/
├── platform/         # Control plane configs (openclaw.json) & security approvals
├── workspaces/       # Individual 12-agent workspaces (AGENTS, SOUL, TOOLS, MEMORY)
├── shared/           # Cross-agent templates, OpenProse workflows, global Promptfoo evals
├── registry/         # Internal skill package mirror (Approved, Candidate, Rejected)
├── labs/             # Optimization loops (results.tsv) & Simulation scenario skeletons
└── docs/             # Product lifecycle artifacts (PRD, ADR, PLANS, EVIDENCE)
```

---

## 🎯 Getting Started

### Prerequisites

1. Install [OpenClaw](https://openclaw.ai) in your environment.
2. Ensure you have the necessary model provider API keys.
3. *(Optional)* Install **OpenViking** for the layered context memory DB.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cancalisir1/openclaw-enterprise-team.git
   cd openclaw-enterprise-team
   ```

2. **Start the OpenClaw Gateway:**
   Point OpenClaw to the platform configuration file:
   ```bash
   openclaw serve --config platform/openclaw.json
   ```

3. **Initialize a Project:**
   Start a session with the `chief-orchestrator` agent and drop a new PRD into `docs/prd/PRD-001.md`.

---

## 🛡️ Operating Principles & Security

- **Sandbox Default:** Non-main agents run purely in the sandbox.
- **Host Execution is Denied by Default:** Managed stringently by `platform/exec-approvals.json` and the `Platform SRE` agent.
- **No Direct Merges:** Code is generated in separate branches/sessions; `QA Evidence` runs test pipelines and outputs `EVID` documents before `Chief Orchestrator` synthesizes the merge.
- **Skill Intake Pipeline:** `Find Skills` is used for discovery only. All skills are audited by the `Security Governor` before migrating to `registry/approved-skills/`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
We are looking for:
- Refined `SOUL.md` prompt instructions for specific agents.
- New Promptfoo evaluation scenarios in `shared/evals/`.
- Advanced Autoresearch loop examples for `labs/optimization/`.

Feel free to check [issues page](https://github.com/cancalisir1/openclaw-enterprise-team/issues). If you want to contribute, please fork the repository and use a feature branch.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  Generated with ❤️ for the AI multi-agent community.
</div>
