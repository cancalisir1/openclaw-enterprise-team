# OpenViking Integration Setup

OpenViking serves as the operational context DB (Layer 1) for the multi-agent system.
It acts as a filesystem-like context store for documents, skills, and user/agent contexts.

## Installation / Setup

1. Install OpenViking locally or point the OpenClaw configuration to a remote instance.
2. In `platform/openclaw.json`, ensure the plugin is enabled:

```json
    "entries": {
      "memory-openviking": {
        "enabled": true,
        "config": {
          "mode": "local",
          "targetUri": "viking://user/memories",
          "autoRecall": true,
          "autoCapture": true
        }
      }
    }
```

3. OpenViking automatically hooks into session starts to restore `WAL` and `working-buffer` data, while also summarizing content at the end of sessions.
4. Note that **Workspace markdown** is the absolute final source of truth. OpenViking only supplements long-term cross-session memory retrieval.
