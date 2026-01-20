# GitHub Pages Setup Instructions

## ✅ What's Already Done

1. **GitHub Actions Workflow**: The deployment workflow is set up at `.github/workflows/deploy.yml`
2. **Vite Configuration**: Updated `vite.config.ts` with the correct base path (`/richard-augenti/`)
3. **Build Script**: The `package.json` has the build script configured

## 🔧 Steps to Enable GitHub Pages

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/richard-augenti/richard-augenti`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Save the settings

### 2. Push the Changes

The workflow will automatically trigger when you push to the `main` branch. After pushing:

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)

### 3. Access Your Site

Once the workflow completes successfully, your site will be available at:
- **URL**: `https://richard-augenti.github.io/richard-augenti/`

### 4. (Optional) Custom Domain

If you want to use a custom domain:
1. Update `vite.config.ts` to set `base: '/'`
2. Add your custom domain in GitHub Pages settings
3. Configure DNS records as instructed by GitHub

## 📝 Notes

- The workflow uses **pnpm** as the package manager
- The site will automatically rebuild and deploy on every push to `main`
- You can also manually trigger deployments from the Actions tab using "workflow_dispatch"

## 🐛 Troubleshooting

If the deployment fails:
1. Check the Actions tab for error messages
2. Ensure all dependencies are listed in `package.json`
3. Verify the build works locally: `pnpm install && pnpm build`
