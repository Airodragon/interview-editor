# Deploy to GitHub Pages

## Quick Deploy

1. **Initialize Git Repository**
```bash
cd /Users/apiwizadmin/Desktop/Work/interview-editor
git init
git add .
git commit -m "Initial commit: Interview Code Editor"
```

2. **Create GitHub Repository**
- Go to https://github.com/new
- Name: `interview-code-editor`
- Description: "Secure web-based code editor for technical interviews"
- Make it Public
- Don't initialize with README (we already have one)
- Click "Create repository"

3. **Push to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/interview-code-editor.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages**
- Go to repository Settings
- Click "Pages" in the left sidebar
- Under "Source", select "main" branch
- Select "/ (root)" folder
- Click "Save"
- Wait 1-2 minutes for deployment

5. **Access Your Editor**
Your editor will be live at:
```
https://YOUR_USERNAME.github.io/interview-code-editor/
```

## Alternative: Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd /Users/apiwizadmin/Desktop/Work/interview-editor
vercel
```

3. **Follow prompts**
- Login to Vercel
- Set up project
- Deploy!

## Alternative: Deploy to Netlify

1. **Drag and Drop**
- Go to https://app.netlify.com/drop
- Drag the entire `interview-editor` folder
- Done! You'll get a URL instantly

## What Gets Deployed

The following files will be deployed:
- `index.html` - Main application (CodeMirror-based, fully working)
- `README.md` - Documentation
- `QUICKSTART.md` - Quick start guide
- `examples/` - Example code files

## Testing After Deployment

1. Open the deployed URL
2. Verify editor loads with code visible
3. Test typing in the editor
4. Test switching between HTML/CSS/JS and React modes
5. Test running code
6. Test security features (copy/paste should be blocked)

## Troubleshooting

**Editor doesn't load:**
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

**Security features not working:**
- This is expected on some browsers with strict security policies
- Works best on Chrome, Firefox, and Edge

**React code doesn't run:**
- Check that Babel and React CDN links are accessible
- Verify JSX syntax is correct
- Check browser console for transformation errors
