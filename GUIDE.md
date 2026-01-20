# MC Configs - Management Guide

## Quick Reference

| Action | Command |
|--------|---------|
| Add config | Create folders + files, then `git add . && git commit -m "message" && git push` |
| Remove config | Delete folders, then `git add . && git commit -m "message" && git push` |
| Update config | Edit files, then `git add . && git commit -m "message" && git push` |

---

## Adding a New Config

### Step 1: Create the content folder

Create a folder in `src/content/configs/` with your plugin name (lowercase, use dashes for spaces):

```
src/content/configs/your-plugin-name/
```

### Step 2: Create index.md

Create `index.md` inside that folder with this template:

```markdown
---
title: "Plugin Display Name"
plugin: "PluginName"
version: "1.0.0"
minecraftVersion: "1.20.x"
category: "Economy"
description: "Short description of what this config does."
lastUpdated: 2025-01-19
files:
  - name: "config.yml"
    path: "./files/config.yml"
  - name: "messages.yml"
    path: "./files/messages.yml"
---

## Changelog

### v1.0.0 (2025-01-19)
- Initial release
- List your changes here
```

**Available categories:**
- Economy
- Minions
- Chat
- Permissions
- World Management
- Combat
- Skills
- Quests
- Cosmetics
- Utilities
- Other

### Step 3: Create the downloads folder

Create a matching folder in `public/downloads/`:

```
public/downloads/your-plugin-name/
```

### Step 4: Add your config files

Put your actual `.yml` config files in the downloads folder:

```
public/downloads/your-plugin-name/
├── config.yml
├── messages.yml
└── (any other files)
```

### Step 5: Deploy

Run these commands in the `mc-configs` folder:

```bash
git add .
git commit -m "feat: add YourPlugin config"
git push
```

Your site will auto-deploy on Vercel.

---

## Removing a Config

### Step 1: Delete both folders

Delete the content folder:
```
src/content/configs/plugin-name/    (delete this entire folder)
```

Delete the downloads folder:
```
public/downloads/plugin-name/       (delete this entire folder)
```

### Step 2: Deploy

```bash
git add .
git commit -m "chore: remove PluginName config"
git push
```

---

## Updating an Existing Config

### Step 1: Update your files

- Replace/edit files in `public/downloads/plugin-name/`
- Edit `src/content/configs/plugin-name/index.md`:
  - Update the `version` field
  - Update the `lastUpdated` date
  - Add a new changelog entry at the top

Example changelog update:
```markdown
## Changelog

### v1.1.0 (2025-01-20)
- Added new feature
- Fixed bug

### v1.0.0 (2025-01-19)
- Initial release
```

### Step 2: Deploy

```bash
git add .
git commit -m "feat: update PluginName to v1.1.0"
git push
```

---

## Folder Structure Overview

```
mc-configs/
├── src/
│   └── content/
│       └── configs/
│           ├── plugin-one/
│           │   └── index.md        ← Metadata + changelog
│           └── plugin-two/
│               └── index.md
├── public/
│   └── downloads/
│       ├── plugin-one/
│       │   ├── config.yml          ← Downloadable files
│       │   └── messages.yml
│       └── plugin-two/
│           └── config.yml
└── GUIDE.md                        ← This file
```

**Important:** The folder names in `src/content/configs/` and `public/downloads/` must match exactly!

---

## Example: Adding "EssentialsX" Config

1. Create `src/content/configs/essentialsx/index.md`:

```markdown
---
title: "EssentialsX Config"
plugin: "EssentialsX"
version: "1.0.0"
minecraftVersion: "1.20.x"
category: "Utilities"
description: "Optimized EssentialsX setup with clean commands and economy settings."
lastUpdated: 2025-01-19
files:
  - name: "config.yml"
    path: "./files/config.yml"
  - name: "worth.yml"
    path: "./files/worth.yml"
---

## Changelog

### v1.0.0 (2025-01-19)
- Initial release
- Configured economy settings
- Disabled bloat commands
```

2. Create `public/downloads/essentialsx/` and add your files:
   - `config.yml`
   - `worth.yml`

3. Deploy:
```bash
git add .
git commit -m "feat: add EssentialsX config"
git push
```

---

## Troubleshooting

**Config not showing up?**
- Make sure folder names match in both locations
- Check that `index.md` has valid frontmatter (the `---` sections)
- Verify the category is one of the allowed values

**Download not working?**
- Check that the file exists in `public/downloads/plugin-name/`
- Verify the `name` in the files array matches the actual filename

**Build failing?**
- Run `npm run build` locally to see errors
- Check that all required fields are in `index.md`
