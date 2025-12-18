# Fetch Website from GitHub

**Date:** December 18, 2025  
**Purpose:** Instructions to fetch COAD website from GitHub repository

---

## Option 1: If You Have GitHub Repository URL

```bash
cd "/Users/karlodefinis/Desktop/AI COMPANY/website/code"

# Add GitHub remote
git remote add origin <GITHUB_REPO_URL>

# Fetch from GitHub
git fetch origin

# Check what branch exists
git branch -r

# Merge with local code (if main branch exists)
git pull origin main --allow-unrelated-histories

# Or if master branch
git pull origin master --allow-unrelated-histories
```

---

## Option 2: Clone Fresh from GitHub

If you want to start fresh:

```bash
# Backup existing code (optional)
cd "/Users/karlodefinis/Desktop/AI COMPANY/website"
mv code code-backup

# Clone from GitHub
git clone <GITHUB_REPO_URL> code

# Install dependencies
cd code
npm install
```

---

## Option 3: Get GitHub URL from Lovable

1. Go to: https://lovable.dev/projects/7f6c1155-8424-457e-9d17-a33f5f73f1d2
2. Look for "GitHub" or "Repository" in settings
3. Copy the GitHub repository URL
4. Use Option 1 or 2 above

---

## Current Status

- ✅ Git repository initialized
- ✅ Local files ready
- ⏳ Waiting for GitHub repository URL to fetch

---

**Next Step:** Provide GitHub repository URL to complete fetch

