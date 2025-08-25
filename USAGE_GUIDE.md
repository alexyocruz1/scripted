# 📝 Scripted Blog - Usage Guide

A comprehensive guide for using and managing your Scripted blog built with Astro, MDX, and Tailwind CSS.

## 🚀 Quick Start

### Development Workflow
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Setup development environment (copies search assets)
npm run setup-dev
```

## 📝 Adding New Blog Posts

### 🚀 Quick Start Options

#### Option 1: Interactive CLI Tool (Recommended)
The easiest way to create a new post is using our interactive tool:

```bash
npm run new-post
```

This will guide you through:
- Post title
- Description
- Author
- Tags
- Series
- Featured status
- Reading time

The tool automatically generates the file with proper frontmatter and basic structure.

#### Option 2: Copy Template
For a more manual approach, copy our template:

```bash
cp templates/post-template.mdx src/content/blog/my-new-post.mdx
```

Then edit the file with your content.

#### Option 3: Manual Creation
Create a new `.mdx` file in `src/content/blog/` with the following naming convention:
- Use kebab-case for filenames (e.g., `my-awesome-post.mdx`)
- Include the `.mdx` extension

### 2. Add Frontmatter

Every blog post requires frontmatter at the top of the file. Here's the complete schema:

```yaml
---
title: "Your Post Title"
description: "A brief description for SEO and previews (optional)"
pubDate: 2025-01-20
draft: false
tags: [astro, tutorial, web-development]
author: "Your Name"
featured: true
series: "Optional Series Name"
canonicalUrl: "https://external-site.com/post" # For external links
readingTime: 5 # Estimated reading time in minutes
---
```

#### Frontmatter Fields Explained:

- **`title`** (required): The main title of your post
- **`description`** (optional): Brief description for SEO and social sharing
- **`pubDate`** (required): Publication date in YYYY-MM-DD format
- **`draft`** (optional): Set to `true` to hide from public index and RSS
- **`tags`** (optional): Array of tags for categorization
- **`author`** (optional): Author name for attribution
- **`featured`** (optional): Set to `true` to show on homepage featured section
- **`series`** (optional): Group posts into a series
- **`canonicalUrl`** (optional): For linking to external content
- **`readingTime`** (optional): Estimated reading time in minutes

### 3. Write Your Content

Below the frontmatter, write your content using **MDX** (Markdown + JSX):

```mdx
---
title: "Getting Started with Astro"
description: "Learn how to build fast websites with Astro"
pubDate: 2025-01-20
draft: false
tags: [astro, tutorial, web-development]
author: "Alexy Cruz"
featured: true
readingTime: 8
---

# Getting Started with Astro

This is your blog post content written in **Markdown**.

## Code Examples

You can include code blocks with syntax highlighting:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

## Interactive Components

MDX allows you to embed interactive components:

<MyComponent prop="value" />

## Lists and Formatting

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- `inline code` for technical terms

### Numbered Lists

1. First step
2. Second step
3. Third step

## Links and Images

[Link to external site](https://example.com)

![Alt text for image](/path/to/image.jpg)

## Blockquotes

> This is a blockquote for important information or quotes.

## Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Fast | Lightning fast performance | ✅ |
| SEO | Built-in SEO optimization | ✅ |
| Free | Zero ongoing costs | ✅ |
```

### 4. Preview Your Post

1. Save the file
2. The development server will automatically reload
3. Visit `http://localhost:4321/blog/your-post-slug/` to preview
4. Check the blog index at `http://localhost:4321/blog/`

## 🎨 Content Features

### Markdown Support

The blog supports all standard Markdown syntax:

- **Headers**: `# H1`, `## H2`, `### H3`, etc.
- **Bold**: `**text**` or `__text__`
- **Italic**: `*text*` or `_text_`
- **Code**: `` `inline code` ``
- **Code blocks**: ``` ``` ```
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Lists**: `- item` or `1. item`
- **Blockquotes**: `> quote`

### MDX Features

Since we're using MDX, you can also:

- **Embed React/Astro components**
- **Use JavaScript expressions**
- **Import and use custom components**

### Code Highlighting

Code blocks automatically get syntax highlighting based on the language specified:

```javascript
// JavaScript code
function example() {
  return "highlighted";
}
```

```python
# Python code
def example():
    return "highlighted"
```

```css
/* CSS code */
.example {
  color: blue;
}
```

## 📁 File Organization

### Content Structure
```
src/content/blog/
├── hello-world.mdx
├── welcome-to-scripted.mdx
├── building-a-free-blog.mdx
└── your-new-post.mdx
```

### Best Practices

1. **Use descriptive filenames**: `how-to-deploy-astro-blog.mdx`
2. **Keep filenames lowercase**: Use kebab-case for multiple words
3. **Organize with tags**: Use consistent tag naming
4. **Draft posts**: Use `draft: true` for work-in-progress

## 🔧 Managing Content

### Draft Posts

To create a draft post that won't appear publicly:

```yaml
---
title: "Work in Progress"
draft: true
# ... other frontmatter
---
```

Draft posts:
- ❌ Won't appear in the blog index
- ❌ Won't be included in RSS feeds
- ❌ Won't appear in search results
- ✅ Can still be previewed locally

### Featured Posts

To feature a post on the homepage:

```yaml
---
title: "Important Post"
featured: true
# ... other frontmatter
---
```

Featured posts:
- ✅ Appear in the "Featured Posts" section on homepage
- ✅ Get special styling and prominence
- ✅ Still appear in regular blog listing

### Tag Management

Use tags to organize your content:

```yaml
---
tags: [astro, tutorial, web-development, javascript]
---
```

Tag best practices:
- Use lowercase, descriptive tags
- Be consistent with tag naming
- Don't use too many tags per post (3-5 is ideal)
- Use existing tags when possible

### Series Management

Group related posts into series:

```yaml
---
title: "Part 1: Getting Started"
series: "Complete Astro Tutorial"
---
```

```yaml
---
title: "Part 2: Advanced Features"
series: "Complete Astro Tutorial"
---
```

## 🌐 Website Navigation

### Main Pages

- **Homepage** (`/`): Featured posts, latest posts, about section
- **Blog** (`/blog/`): Complete list of all published posts
- **Newsletter** (`/newsletter/`): Newsletter signup page
- **RSS Feed** (`/rss.xml`): RSS feed for subscribers

### Navigation Features

- **Search**: Click the "Search" button to search all content
- **Mobile Menu**: Hamburger menu on mobile devices
- **Breadcrumbs**: Navigation breadcrumbs on blog posts
- **Social Sharing**: Share buttons on individual posts

## 🔍 Search Functionality

### Using Search

1. Click the "Search" button in the navigation
2. Type your search query
3. Results appear instantly
4. Click on a result to navigate to the post

### Search Features

- **Instant results**: No loading time
- **Full-text search**: Searches title, content, and tags
- **Mobile-friendly**: Works on all devices
- **Keyboard navigation**: Use arrow keys to navigate results

## 💬 Comments System

### Giscus Integration

The blog uses Giscus for comments, powered by GitHub Discussions.

To configure comments:

1. Go to [giscus.app](https://giscus.app)
2. Select your repository
3. Copy the configuration
4. Update `src/components/Giscus.astro` with your settings

### Comment Features

- **GitHub integration**: Comments sync with GitHub Discussions
- **Reactions**: Users can react to comments
- **Moderation**: Manage comments through GitHub
- **No spam**: GitHub's spam protection

## 📊 Analytics

### Cloudflare Web Analytics

The blog includes Cloudflare Web Analytics for privacy-first analytics.

To enable analytics:

1. Get your Cloudflare Web Analytics token
2. Uncomment the analytics script in `src/layouts/Base.astro`
3. Replace `YOUR_TOKEN` with your actual token

### Analytics Features

- **Privacy-first**: No cookies required
- **Real-time data**: See traffic as it happens
- **Performance metrics**: Core Web Vitals tracking
- **Free tier**: No cost for basic analytics

## 🚀 Deployment

### Building for Production

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

### Cloudflare Pages Deployment

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Node.js version**: 18 (or higher)
4. Deploy!

### Post-Deployment

After deployment:
- Your site will be available at `https://your-project.pages.dev`
- Search functionality will work automatically
- RSS feed will be available at `/rss.xml`
- Sitemap will be generated at `/sitemap-index.xml`

## 🛠️ Customization

### Styling

- **Global styles**: Edit `src/styles/global.css`
- **Tailwind classes**: Use Tailwind utilities in components
- **Component styling**: Modify components in `src/components/`

### Layout

- **Base layout**: Edit `src/layouts/Base.astro`
- **Navigation**: Modify header and footer
- **Meta tags**: Update SEO settings

### Content Schema

To add new frontmatter fields:

1. Update `src/content/config.ts`
2. Add the field to your blog posts
3. Update components to use the new field

## 📱 Mobile Experience

### Responsive Design

The blog is fully responsive:
- **Mobile-first**: Designed for mobile devices first
- **Tablet optimized**: Looks great on tablets
- **Desktop enhanced**: Additional features on larger screens

### Mobile Features

- **Touch-friendly**: Large touch targets
- **Fast loading**: Optimized for mobile networks
- **Readable**: Proper typography scaling
- **Search**: Full search functionality on mobile

## 🔧 Troubleshooting

### Common Issues

**Post not appearing:**
- Check if `draft: false` in frontmatter
- Verify the file is in `src/content/blog/`
- Restart the development server

**Search not working:**
- Run `npm run setup-dev` to copy search assets
- Check that Pagefind files exist in `public/pagefind/`

**Styling issues:**
- Verify Tailwind CSS is properly imported
- Check that `src/styles/global.css` is imported in Base layout
- Clear browser cache

**Build errors:**
- Check for syntax errors in MDX files
- Verify all frontmatter fields are correct
- Check for missing dependencies

### Development Tips

1. **Use the development server**: `npm run dev` for live preview
2. **Check the console**: Look for errors in browser console
3. **Validate frontmatter**: Ensure all required fields are present
4. **Test on mobile**: Always test responsive design
5. **Preview before publishing**: Use `draft: true` for work-in-progress

## 📚 Additional Resources

### Documentation

- [Astro Documentation](https://docs.astro.build/)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Pagefind Documentation](https://pagefind.app/)

### Community

- [Astro Discord](https://astro.build/chat)
- [GitHub Discussions](https://github.com/withastro/astro/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/astro)

---

**Happy blogging! 🚀**

This guide covers everything you need to know about using and managing your Scripted blog. If you have questions or need help, check the troubleshooting section or refer to the documentation links above.
