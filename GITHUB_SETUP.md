# 🚀 Push AURA Landing Page to GitHub

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `AURA-Landing-Page`
3. Description: `Modern landing page for AURA - AI Urban Response Assistant`
4. Set to Public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

Run these commands in the landing-page directory:

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/Ankitcodes30/AURA-Landing-Page.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify Upload

1. Go to your GitHub repository
2. Check that all files are uploaded
3. Verify README.md displays properly

## Step 4: Enable GitHub Pages (Optional)

1. Go to repository Settings
2. Scroll to "Pages" section
3. Source: Deploy from a branch
4. Branch: main / root
5. Save

Your landing page will be available at:
`https://ankitcodes30.github.io/AURA-Landing-Page/`

## Step 5: Update Production URLs

Once deployed, update the dashboard links from `localhost:5000` to your production URL in:
- Hero.jsx
- Navbar.jsx  
- Features.jsx
- DashboardPreview.jsx
- Footer.jsx

## 🎉 Your AURA Landing Page is now on GitHub!

Repository: https://github.com/Ankitcodes30/AURA-Landing-Page
Live Demo: https://ankitcodes30.github.io/AURA-Landing-Page/ (if Pages enabled)