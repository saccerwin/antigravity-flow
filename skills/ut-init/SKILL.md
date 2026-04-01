---
name: ut-init
description: Initialize UltraThink capabilities in the current project directory
disable-model-invocation: true
allowed-tools: Bash
argument-hint: "[--global | --local]"
---

# Initialize UltraThink

Set up UltraThink in the current project or globally.

## If $ARGUMENTS contains "--global"

Run the global installer:

```bash
~/Documents/GitHub/InuVerse/ai-agents/ultrathink/scripts/init-global.sh
```

This symlinks all skills, rules, agents, and hooks into `~/.gemini/antigravity/` so every Antigravity session has UltraThink.

## If $ARGUMENTS contains "--uninstall"

Remove UltraThink from global config:

```bash
~/Documents/GitHub/InuVerse/ai-agents/ultrathink/scripts/init-global.sh --uninstall
```

## Default (local project init)

Symlink UltraThink into the current project's `.gemini/antigravity/` directory:

```bash
ULTRA="$HOME/Documents/GitHub/InuVerse/ai-agents/ultrathink"
PROJECT_DIR="$(pwd)"

# Create .gemini/antigravity directory if needed
mkdir -p "$PROJECT_DIR/.gemini/antigravity"

# Symlink skills
if [ ! -e "$PROJECT_DIR/.gemini/antigravity/skills" ]; then
  ln -s "$ULTRA/.gemini/antigravity/skills" "$PROJECT_DIR/.gemini/antigravity/skills"
  echo "Linked skills"
else
  echo "Skills already exist — skipping"
fi

# Symlink rules
if [ ! -e "$PROJECT_DIR/.gemini/antigravity/rules" ]; then
  ln -s "$ULTRA/.gemini/antigravity/rules" "$PROJECT_DIR/.gemini/antigravity/rules"
  echo "Linked rules"
else
  echo "Rules already exist — skipping"
fi

# Symlink agents
if [ ! -e "$PROJECT_DIR/.gemini/antigravity/agents" ]; then
  ln -s "$ULTRA/.gemini/antigravity/agents" "$PROJECT_DIR/.gemini/antigravity/agents"
  echo "Linked agents"
else
  echo "Agents already exist — skipping"
fi

# Copy .ckignore if not present
if [ ! -f "$PROJECT_DIR/.ckignore" ]; then
  cp "$ULTRA/.ckignore" "$PROJECT_DIR/.ckignore"
  echo "Copied .ckignore"
fi

echo ""
echo "UltraThink initialized in $PROJECT_DIR"
echo "Skills, rules, and agents are now available in this project."
```

After running, confirm what was linked and remind the user that skills are now available via `/ut-skills`.
