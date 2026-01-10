# Deployment Guide - Expense Tracker to Vercel

## ✅ Completed Steps

1. ✅ Created `vercel.json` configuration file
2. ✅ Verified build works locally (`npm run build` completed successfully)
3. ✅ `.gitignore` is properly configured

## 📋 Next Steps to Deploy

### Step 1: Initialize Git Repository (if not already done)

```bash
cd "/Users/milapbhanderi/Downloads/Expense Tracker"
git init
git add .
git commit -m "Initial commit: Expense Tracker app"
```

### Step 2: Push to GitHub/GitLab/Bitbucket

1. Create a new repository on GitHub (or GitLab/Bitbucket)
2. Push your code:

```bash
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (or create a free account)
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset:** Vite (should auto-detect)
   - **Build Command:** `npm run build` (already set in vercel.json)
   - **Output Directory:** `dist` (already set in vercel.json)
   - **Install Command:** `npm install` (already set in vercel.json)
5. Click "Deploy"
6. Wait for deployment to complete (usually takes 1-2 minutes)

#### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy:

   ```bash
   cd "/Users/milapbhanderi/Downloads/Expense Tracker"
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Step 4: Access Your App

After deployment, Vercel will provide you with a URL like:

- `https://expense-tracker-xyz.vercel.app`

You can:

- Share this URL to access on any device
- Bookmark it on your phone for easy access
- Set up a custom domain in Vercel dashboard (optional)

### Step 5: Test Deployment

1. Open the deployed URL on desktop browser
2. Test on mobile browser
3. Verify all features work:
   - Add transactions
   - View dashboard with charts
   - View transaction history
   - Delete transactions
   - Month navigation
   - localStorage persistence

## 🔄 Continuous Deployment

Once connected to Git:

- Every push to the main branch automatically triggers a new deployment
- Preview deployments are created for pull requests
- All deployments are available in Vercel dashboard

## 📱 Mobile Access

Your app is now accessible on:

- Any mobile browser (Chrome, Safari, Firefox, etc.)
- Bookmark the URL for quick access
- Works offline with localStorage (data persists)

## 🛠️ Troubleshooting

If deployment fails:

1. Check Vercel build logs in the dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version (Vercel uses Node 18.x by default)
4. Check that `vercel.json` is in the root directory

## 📊 Monitoring

Vercel provides analytics on the free tier:

- View deployment history
- Monitor performance
- Check build logs
- View function logs (if using serverless functions)
