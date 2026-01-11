# Git Push Commands

Run these commands in your terminal to push to GitHub:

```bash
cd "/Users/milapbhanderi/Downloads/Expense Tracker"

# Check current status
git status

# Add all files (including vercel.json and DEPLOYMENT.md)
git add .

# Commit the changes
git commit -m "Add expense tracker app with Vercel deployment config"

# Make sure you're on main branch
git branch -M main

# Push to GitHub (you may need to authenticate)
git push -u origin main
```

If you get authentication errors, you may need to:
1. Use a personal access token instead of password
2. Or use SSH instead of HTTPS

To use SSH instead:
```bash
git remote set-url origin git@github.com:mbitious126/expense-tracker.git
git push -u origin main
```
