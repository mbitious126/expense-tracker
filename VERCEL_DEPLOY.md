# Deploy to Vercel - Quick Guide

## Step 1: Push to GitHub (if not already done)

Run the commands from `GIT_PUSH_COMMANDS.md` to push your code to GitHub.

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com and sign in (or create a free account)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Select your GitHub account and find the repository: `mbitious126/expense-tracker`
5. Click "Import"

Vercel will auto-detect Vite settings from `vercel.json`:
- Framework Preset: Vite ✅
- Build Command: `npm run build` ✅
- Output Directory: `dist` ✅
- Install Command: `npm install` ✅

6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete
8. Your app will be live at: `https://expense-tracker-xyz.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Navigate to project directory
cd "/Users/milapbhanderi/Downloads/Expense Tracker"

# Login to Vercel (will open browser)
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## Step 3: Test Your Deployment

1. Open the Vercel URL in your browser
2. Test on your phone by opening the URL
3. Verify:
   - ✅ Add transactions works
   - ✅ Dashboard shows charts
   - ✅ Month slider works
   - ✅ Delete transactions works
   - ✅ Data persists (localStorage)

## Step 4: Bookmark on Mobile

- Open the Vercel URL on your phone
- Add to home screen/bookmarks for quick access

## Continuous Deployment

Once connected:
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- All deployments visible in Vercel dashboard

## Your Repository

- GitHub: https://github.com/mbitious126/expense-tracker
- Vercel will automatically detect and deploy from this repo
