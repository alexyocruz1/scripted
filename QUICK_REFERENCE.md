# 🚀 Scripted Blog - Quick Reference

## 📝 Adding a New Blog Post

### Option 1: Interactive CLI Tool (Easiest)
```bash
npm run new-post
```
This will guide you through creating a new post with prompts for all fields.

### Option 2: Copy Template
```bash
# Copy the template
cp templates/post-template.mdx src/content/blog/my-new-post.mdx
# Edit the file with your content
```

### Option 3: Manual Creation
```bash
# Create new .mdx file in src/content/blog/
touch src/content/blog/my-new-post.mdx
```

### Add Frontmatter
```yaml
---
title: "Your Post Title"
description: "Brief description for SEO"
pubDate: 2025-01-20
draft: false
tags: [astro, tutorial]
author: "Your Name"
featured: true
readingTime: 5
---
```

### 3. Write Content
```markdown
# Your Post Title

Your content here in **Markdown**...

## Code Example
```javascript
function example() {
  return "Hello World!";
}
```
```

### 4. Preview
- Save file → auto-reload
- Visit: `http://localhost:4321/blog/my-new-post/`

## 🔧 Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run setup-dev    # Setup search assets
npm run new-post     # Create new blog post (interactive)
```

## 📁 File Locations

| File Type | Location |
|-----------|----------|
| Blog Posts | `src/content/blog/` |
| Components | `src/components/` |
| Layouts | `src/layouts/` |
| Pages | `src/pages/` |
| Styles | `src/styles/` |

## 🎯 Frontmatter Options

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Post title |
| `description` | ❌ | SEO description |
| `pubDate` | ✅ | Publication date (YYYY-MM-DD) |
| `draft` | ❌ | Hide from public (true/false) |
| `tags` | ❌ | Array of tags |
| `author` | ❌ | Author name |
| `featured` | ❌ | Show on homepage (true/false) |
| `series` | ❌ | Group posts into series |
| `readingTime` | ❌ | Reading time in minutes |

## 🌐 Website URLs

| Page | URL |
|------|-----|
| Homepage | `/` |
| Blog Index | `/blog/` |
| Newsletter | `/newsletter/` |
| RSS Feed | `/rss.xml` |
| Individual Post | `/blog/post-slug/` |

## 🔍 Search

- Click "Search" button in navigation
- Type query → instant results
- Use arrow keys to navigate
- Click result to visit post

## 💬 Comments

Configure Giscus:
1. Go to [giscus.app](https://giscus.app)
2. Select your repository
3. Copy config to `src/components/Giscus.astro`

## 📊 Analytics

Enable Cloudflare Analytics:
1. Get token from Cloudflare
2. Uncomment script in `src/layouts/Base.astro`
3. Replace `YOUR_TOKEN`

## 🚀 Deployment

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Post not showing | Check `draft: false` |
| Search not working | Run `npm run setup-dev` |
| Styling broken | Check `src/styles/global.css` import |
| Build errors | Check MDX syntax and frontmatter |

## 📱 Mobile Testing

- Test on mobile devices
- Check responsive design
- Verify touch interactions
- Test search functionality

---

**Need more details?** See the full [USAGE_GUIDE.md](USAGE_GUIDE.md)
